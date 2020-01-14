/**
@method Seemple.bindOptionalNode
@module seemple/bindoptionalnode
@importance 3
@since 1.1
@summary Пов'язує елемент із властивістю, але не кидає виняток, якщо аргумент node - порожній масив, ``undefined`` або не існує
@desc Цей статичний метод працює так само, як і {@link Seemple#bindOptionalNode} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#bindOptionalNode}
@example
const object = {};
Seemple.bindOptionalNode(object, 'x', '.my-node');
*/
