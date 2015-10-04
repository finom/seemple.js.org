// **todo.js** contains the ``Todo`` class, which is inherited from the [Matreshka.Object](http://matreshka.io/#Matreshka.Object) class and used as a ([Model](http://matreshka.io/#Matreshka.Array-Model)) for the main class ([Todos](todos.html)).
"use strict";
var Todo = Class({
	'extends': MK.Object,
	constructor: function( data ) {
		this
			// Assign the default values and add the keys ``"title"`` and ``"completed"`` to the list of the keys which are responsible for the data (see [jset](http://matreshka.io/#Matreshka.Object-jset)).
			// The ``"title"`` property by default is an empty string.
			// The ``"completed"`` property by default is ``false``.
			.jset({
				title: '',
				completed: false
			}) 
			// Now assign the data which the constructor has received as an argument, overwriting the default values  (for example, ``{ title: 'Do it!' }``).
			.set( data )
			// The ``"visible"`` property is responsible for the visibility of an element from the todo list on the page. 
			.set( 'visible', true )
			// Wait for the ``"render"`` event using the [on](http://matreshka.io/#Matreshka-on) method. The event fires when the element corresponding to the instance of the class is rendered.
			.on( 'render', function( evt ) {
				this
					// The binding of the elements that do not require the assignment of the binder (binder). The [defaultBinders](http://matreshka.io/#Matreshka.defaultBinders) are used here if it is possible.
					// * The ``"completed"`` property is bound to the checkbox with ``toggle`` class
					// * The ``"edit"`` property is bound to the field (``input type=text``) with ``edit`` class
					// * The ``"destroy"`` property is bound to the element with ``destroy`` class which does not have a default binder. It means that the element is simply associated with the property without synchronizing with its value.
					.bindNode({
						completed: ':sandbox .toggle',
						edit: ':sandbox .edit',
						destroy: ':sandbox .destroy'
					})
					// These bindings use the third argument as a binder.
					// * The visibility of the sandbox element will depend on the value of the ``"visible"`` property ([binders.visibility](http://matreshka.io/#Matreshka.binders.visibility))
					// * The presence of the ``"completed"`` class in the sandbox element will depend on the value of the ``"completed"`` property ([binders.className](http://matreshka.io/#Matreshka.binders.className))
					// * The presence of the ``"editing"`` class in the sandbox element will depend on the value of the ``"editing"`` property 
					// * Bind the element ``label`` whose ``innerHTML`` will be synchronized with the value of the ``"title"`` property ([binders.innerHTML](http://matreshka.io/#Matreshka.binders.innerHTML))
					.bindNode( 'visible', ':sandbox', MK.binders.visibility() )
					.bindNode( 'completed', ':sandbox', MK.binders.className( 'completed' ) )
					.bindNode( 'editing', ':sandbox', MK.binders.className( 'editing' ) )
					.bindNode( 'title', ':sandbox label', MK.binders.innerHTML() )
					// Add the event handler of the mouse double click (``"dblclick"``) to the element bound to the ``"title"`` property (``label`` tag).
					// When the handler fires, we change the instance mode to the editing and assign the value ``true`` to the ``"editing"`` property. This action adds the ``"edit"`` class to the sandbox element (see bindings above).
					// Next we assign the current value of the ``"title"`` property to the ``"edit"`` property.
					// After that we take focus on the field bound to the ``"edit"`` property.
					.on( 'dblclick::title', function() {
						this.editing = true;
						this.edit = this.title;
						this.$bound( 'edit' ).focus();
					})
					// Add the ``"keyup"`` event handler to the element bound to the ``"edit"`` property.
					// If the ``Esc`` key is pressed, go back from the edit mode to the normal mode.
					// If the ``Enter`` key is pressed, delete unnecessary spaces from the ``"edit"`` property value and assign it to the ``"title"`` property. Then go back from the edit mode to the normal mode. If the value is an empty string, call the ``readytodie`` event which is listened to by the ``Todos`` class.
					.on( 'keyup::edit', function( evt ) {
						var editValue;
						if( evt.which === ESC_KEY ) {
							this.editing = false;
						} else if( evt.which === ENTER_KEY ) {
							if( editValue = this.edit.trim() ) {
								this.title = editValue;
								this.editing = false;
							} else {
								this.trigger( 'readytodie', this );
							}
						}
					})
					// If we click on the element that is responsible for the item deletion, we trigger the ``readytodie`` event which is listened to by the ``Todos`` class.
					.on( 'click::destroy', function() {
						this.trigger( 'readytodie', this );
					})
				;
			})
		;
	}
});