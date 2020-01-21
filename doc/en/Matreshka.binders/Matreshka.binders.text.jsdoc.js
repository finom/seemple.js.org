/**
@function Seemple.binders.text
@importance 2
@since 1.1
@summary Returns a binder which changes ``textContent`` of bound DOM node depending on an object property value
@desc The property value can be transformed using ``mappingFn`` argument.
@param {function} [mappingFn] - Mapping function
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.text());
this.myKey = 'foo'; // sets textContent as "foo"
@example <caption>The usage of mapping function</caption>
this.bindNode('myKey', '.my-element',
    Seemple.binders.text(value => `Hello, ${value}`));

this.myKey = 'foo'; // sets textContent as "Hello, foo"
*/
