/**
@method Seemple.unbindNode
@module seemple/unbindnode
@importance 3
@since 1.1
@summary Розриває зв'язок між властивістю і HTML елементом
@desc Цей статичний метод працює так само, як і {@link Seemple#unbindNode} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#unbindNode}
@example
const object = {};
Seemple.unbindNode(object, 'x', '.my-node');
*/
