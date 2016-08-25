/**
@function Matreshka.binders.display
@module matreshka/binders/display
@importance 2
@since 0.1
@summary Returns a binder which controls a visibility of DOM node (using ``style.display``) depending on the instance property value
@param {boolean} [bool=true] - If the argument equals ``true``, a node is hidden when a property value is falsy; if it equals ``false``, it is hidden when a property value is truly.
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.display(true));
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.display(false));
*/
