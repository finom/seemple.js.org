/**
@method Seemple.unbindNode
@module seemple/unbindnode
@importance 3
@since 1.1
@summary Breaks a binding between given property and HTML node
@desc This static method works the same as {@link Seemple#unbindNode} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Seemple#unbindNode}
@example
const object = {};
Seemple.unbindNode(object, 'x', '.my-node');
*/
