/**
@method Matreshka.selectAll
@module matreshka/selectall
@importance 3
@since 1.1
@summary Повертає елементи з пісочниці, відповідні селектору
@desc Цей статичний метод працює так само, як і {@link Matreshka#selectAll} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {$nodes} найденные элементы
@see {@link Matreshka#selectAll}
@example
const object = {};
Matreshka.bindNode(object, 'sandbox', '.app');
Matreshka.selectAll(object, '.my-element');
*/
