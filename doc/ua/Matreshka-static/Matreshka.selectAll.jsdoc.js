/**
@method Seemple.selectAll
@module seemple/selectall
@importance 3
@since 1.1
@summary Повертає елементи з пісочниці, відповідні селектору
@desc Цей статичний метод працює так само, як і {@link Seemple#selectAll} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {$nodes} найденные элементы
@see {@link Seemple#selectAll}
@example
const object = {};
Seemple.bindNode(object, 'sandbox', '.app');
Seemple.selectAll(object, '.my-element');
*/
