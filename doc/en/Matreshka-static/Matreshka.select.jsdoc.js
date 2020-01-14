/**
@method Seemple.select
@module seemple/select
@importance 3
@since 1.1
@summary Returns HTML node corresponding to a selector from a sandbox
@desc This static method works the same as {@link Seemple#select} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {node|null}
@see {@link Seemple#select}
@example
const object = {};
Seemple.bindNode(object, 'sandbox', '.app');
Seemple.select(object, '.my-element');
*/
