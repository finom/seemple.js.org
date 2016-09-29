/**
@method Matreshka.select
@module matreshka/select
@importance 3
@since 1.1
@summary Повертає елемент з пісочниці, відповідний селектору
@desc Цей статичний метод працює так само, як і {@link Matreshka#select} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {node|null} знайдений елемент
@see {@link Matreshka#select}
@example
const object = {};
Matreshka.bindNode(object, 'sandbox', '.app');
Matreshka.select(object, '.my-element');
*/
