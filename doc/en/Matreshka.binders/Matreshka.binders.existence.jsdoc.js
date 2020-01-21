/**
@function Seemple.binders.existence
@importance 2
@since 2.3
@summary Returns a binder which controls an existence of DOM node at DOM tree depending on an object property value
@desc The binder works the same way as {@link Seemple.binders.display}, but instead of visibility change the existence at page DOM is changed. The binder is useful for:

- Big appications: show one or another page depending on route state;
- For infinite scrolling;
- For other cases where you need to hide an element but its existence at DOM tree isn't necessary.

@param {boolean} [bool=true] - If the argument equals ``true``, a node is removed when a property value is falsy; if it equals ``false``, it is removed when a property value is truly
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.existence(true));
@example
this.bindNode('myKey', '.my-element', Seemple.binders.existence(false));
*/
