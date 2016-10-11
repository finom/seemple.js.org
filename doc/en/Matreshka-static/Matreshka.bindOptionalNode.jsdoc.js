/**
@method Matreshka.bindOptionalNode
@module matreshka/bindoptionalnode
@importance 3
@since 1.1
@summary Initializes two-way data binding but does not throws an exception if ``node`` argument is an empty array, ``undefined`` or non-existent
@desc This static method works the same as {@link Matreshka#bindOptionalNode} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Matreshka#bindOptionalNode}
@example
const object = {};
Matreshka.bindOptionalNode(object, 'x', '.my-node');
*/
