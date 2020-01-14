/**
@method Seemple.select
@module seemple/select
@importance 3
@since 1.1
@summary Повертає елемент з пісочниці, відповідний селектору
@desc Цей статичний метод працює так само, як і {@link Seemple#select} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {node|null} знайдений елемент
@see {@link Seemple#select}
@example
const object = {};
Seemple.bindNode(object, 'sandbox', '.app');
Seemple.select(object, '.my-element');
*/
