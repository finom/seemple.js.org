/**
@method Matreshka.select
@module matreshka/select
@importance 3
@since 1.1
@summary Returns HTML node corresponding to a selector from a sandbox
@desc This static method works the same as {@link Matreshka#select} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {node|null}
@see {@link Matreshka#select}
@example
const object = {};
Matreshka.bindNode(object, 'sandbox', '.app');
Matreshka.select(object, '.my-element');
*/
