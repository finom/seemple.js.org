/**
@method Matreshka.unbindNode
@module matreshka/unbindnode
@importance 3
@since 1.1
@summary Розриває зв'язок між властивістю і HTML елементом
@desc Цей статичний метод працює так само, як і {@link Matreshka#unbindNode} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#unbindNode}
@example
const object = {};
Matreshka.unbindNode(object, 'x', '.my-node');
*/
