/**
@method Seemple.selectAll
@module seemple/selectall
@importance 3
@since 1.1
@summary Returns HTML nodes corresponding to a selector from a sandbox
@desc This static method works the same as {@link Seemple#selectAll} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {$nodes}
@see {@link Seemple#selectAll}
@example
const object = {};
Seemple.bindNode(object, 'sandbox', '.app');
Seemple.selectAll(object, '.my-element');
*/
