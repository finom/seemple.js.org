// **todos.js** - is the largest file in this project which contains most of logic. In bigger projects it is better to divide applications into smaller parts.
"use strict";
var Todos = Class({
	'extends': MK.Array,
	// [Model](http://matreshka.io/#Matreshka.Array-Model) defines the class of items which will be included into the collection. In this case, the items of the collection will be instances of the [Todo](todo.html) class.
	Model: Todo,
	//  Defining the [itemRenderer](http://matreshka.io/#Matreshka.Array-itemRenderer) property, you create a renderer for every added item of the array (see HTML code).
	itemRenderer: '#todo_item_template',
	constructor: function() {
		var self = this
			// Add the dependency of the ``"leftLength"`` property on ``"length"`` and ``"completedLength"`` ones, and use their difference as a value. The application listens to the changes in these properties calculating ``“leftLength"`` on every their changing.
			.linkProps( 'leftLength', 'length completedLength', function( length, completedLength ) {
				return length - completedLength;
			})
			// The ``"bindings"`` method adds data bindings between the properties of the class instance and DOM nodes. The ``"events"`` method, as you may guess, adds the event handlers. These names of the methods are not special; they group different actions for the code purity. After their launching, take the data out of the local storage and restore the todo items from it using [recreate](http://matreshka.io/#Matreshka.Array-recreate) method.

			.bindings()
			.events()
			.recreate( JSON.parse( localStorage[ 'todos-matreshka' ] || '[]' ) )
		;
		
		// We use the [director](https://github.com/flatiron/director) library for routing, as it is required by the specification of TodoMVC. When ``location.hash`` is changed, its value is added to the ``"route"`` property.
		Router({
			':state': function( state ) {
				self.route = state;
			},
			'': function() {
				self.route = '';
			}
		}).init();
	},
	bindings: function() {
		return this
			// Declare a sandbox
			.bindNode( 'sandbox', '#todoapp' )
			// Bind some other nodes (``main``, ``footer``, etc.). The ``:sandbox`` selector is not used because we access the elements by their ID.
			.bindNode({
				main: '#main',
				footer: '#footer',
				newTodo: '#new-todo',
				container: '#todo-list',
				allCompleted: '#toggle-all',
				clearCompleted: '#clear-completed'
			})
			// The next call of [bindNode](http://matreshka.io/#Matreshka-bindNode) makes the visibility of HTML nodes dependable on the values of corresponding properties (if the value passes a non-strict test for equality ``true``, the element will be shown, otherwise - hidden).
			.bindNode({
				completedLength: ':bound(clearCompleted)',
				length: ':bound(main), :bound(footer)'
			}, MK.binders.visibility() )
			// The next two bindings change inner HTML of the bound nodes depending on a value of the corresponding properties.
			.bindNode( 'completedLength', ':bound(clearCompleted)', {
				setValue: function( v ) {
					$( this ).html( 'Clear completed (' + v + ')' );
				}
			})
			.bindNode( 'leftLength', '#todo-count', {
				setValue: function( v ) {
					$( this ).html( '<strong>' + v + '</strong> item' + ( v !== 1 ? 's' : '' ) + ' left' );
				}
			})
			// This binding controls which exact link (“All”, “Active”, “Completed”) will be highlighted in bold. The following technique has been used for demonstrating the work of ``bindNode`` here: we bind the ``#filters`` element to the ``"route"`` property, but in the binder we manipulate the links inside this element.
			.bindNode( 'route', '#filters', {
				setValue: function( v ) {
					$( this ).find( 'a' ).each( function() {
						var $this = $( this );
						$this.toggleClass( 'selected', $this.attr( 'href' ) === '#/' + v );
					});
				}
			})
		;
	},
	events: function() {
		return this
			// Add the event handler to the changing of the ``"JSON"`` property which keeps the representation of the todo list as JSON string. In order to access a hard drive as rare as possible (because it works slower than RAM), the [onDebounce](http://matreshka.io/#Matreshka-onDebounce) method is used, it prevents a multiple invocation of a handler over a period of time.
			.onDebounce( 'change:JSON', function( evt ) {
				localStorage[ 'todos-matreshka' ] = evt.value;
			})
			// If the Enter key is pressed in the input bound to the ``“newTodo"`` property and the trimmed value of this property is not an empty string, add a new todo item using the ``push`` method.
			.on( 'keyup::newTodo', function( evt ) {
				var newTodo;
				if( evt.which === ENTER_KEY ) {
					if( newTodo = this.newTodo.trim() ) {
						this.push({
							title: newTodo
						});
					}
					
					this.newTodo = '';
				}
			})
			// When the value of the ``"allCompleted"`` property is changed, we change ``"completed"`` for all todo items to the same value. The ``"silent"`` flag means that the ``"change:completed"`` event must not be triggered.
			.on( 'change:allCompleted', function( evt ) {
				this.forEach( function( todo ) {
					todo.set( 'completed', evt.value, { silent: true });
				});
				
				this.completedLength = evt.value ? this.length : 0;
			})
			// A mouse click on the ``'#clear-completed'`` node deletes all the performed items using the [pull](http://matreshka.io/#Matreshka.Array-pull) method.
			.on( 'click::clearCompleted', function() {
				for( var i = 0; i < this.length; i++ ) {
					if( this[i].completed ) {
						this.pull( this[i--] );
					}
				}
			})
			// If some element from the todo list has fired the ``"readytodie"`` event, we delete it using the [pull](http://matreshka.io/#Matreshka.Array-pull) method.
			.on( '@readytodie', function( todo ) {
				this.pull( todo );
			})
			// The next handler is called by two events. The first one is ``"modify"`` which fires when ``MK.Array`` is changed (when some elements are added or deleted). The second one is ``"@change:completed"``. The ``@`` symbol means that we listen to the ``"change:completed"`` event for every item of todo list. As a result, the handler calls when an item is added or deleted and when the ``"completed"`` property of one of the items is changed. The code of the handler is self-explanatory: ``"allCompleted"`` becomes equal ``true`` if every item is performed and inversely – ``false`` when some item is not performed. Then the value of the ``"completedLength"`` property is calculated, which contains a number of the performed items.
			.on( 'modify @change:completed', function() {
				this.set( 'allCompleted', this.every( function( todo ) {
					return todo.completed;
				}), { silent: true } );
				
				this.completedLength = this.filter( function( todo ) {
					return todo.completed;
				}).length;
			})
			// If some items have been added or deleted or the ``"completed"`` property of one of the items has been changed or the value of the ``"allCompleted"`` property has been changed, prepare the representation of our todo list in order to place it into the ``localStorage`` afterwards.
			.on( 'modify @change:completed change:allCompleted', function() {
				this.JSON = JSON.stringify( this );
			})
			// The next strings control how the visibility of the items from the todo list is controlled by ``location.hash`` (or the ``"route"`` property). This part can be implemented in several ways. The way of adding dependencies of one property on the others using the [linkProps](http://matreshka.io/#Matreshka-linkProps) method has been chosen here. What happens here? We listen to the ``"addone"`` event which fires when a new item is added to the todo list. The event handler receives the object (``evt``) as an argument containing the ``"added"`` property which is the added item. We add the dependency of the ``"visible"`` property for the added item on ``todos.route`` and on the own ``"completed"`` property.
			.on( 'addone', function( evt ) {
				var todo = evt.added;
				
				todo.linkProps( 'visible', [
					todo, 'completed',
					this, 'route'
				], function( completed, route ) {
					return !route || route === 'completed' && completed || route === 'active' && !completed;
				});
			})
		;
	},
});