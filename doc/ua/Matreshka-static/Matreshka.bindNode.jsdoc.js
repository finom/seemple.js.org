/**
@method Matreshka.bindNode
@module matreshka/bindnode
@importance 3
@since 1.1
@summary Пов'язує властивість об'єкта з HTML елементом
@desc Цей статичний метод працює так само, як і {@link Matreshka#bindNode} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#bindNode}
@example
const object = {};
Matreshka.bindNode(object, 'x', '.my-node');
*/
