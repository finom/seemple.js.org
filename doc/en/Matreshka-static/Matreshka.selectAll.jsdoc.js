/**
@method Matreshka.selectAll
@module matreshka/selectall
@importance 3
@since 1.1
@summary Returns HTML nodes corresponding to a selector from a sandbox
@desc This static method works the same as {@link Matreshka#selectAll} and all its variations, but accepts any kind of JavaScript objects as first argument.
@returns {$nodes}
@see {@link Matreshka#selectAll}
@example
const object = {};
Matreshka.bindNode(object, 'sandbox', '.app');
Matreshka.selectAll(object, '.my-element');
*/
