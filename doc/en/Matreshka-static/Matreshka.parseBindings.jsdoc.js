/**
@method Seemple.parseBindings
@module seemple/parsebindings
@importance 3
@since 1.1
@summary Parses DOM tree, declaring bindings with properties enclosed in double braces
@desc This static method works the same as {@link Seemple#parseBindings} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {$nodes} Resulting collection of DOM nodes
@see {@link Seemple#parseBindings}
@example
const object = {};
const $node = Seemple.parseBindings(object, `
    <h3>Hello, {{name}}</h3>
`);
object.name = 'World';
*/
