/**
@method Seemple.selectAll
@module seemple/selectall
@importance 3
@since 1.1
@summary Возвращает элементы из песочницы, соответствующие селектору
@desc Этот статичный метод работает так же, как и {@link Seemple#selectAll} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {$nodes} найденные элементы
@see {@link Seemple#selectAll}
@example
const object = {};
Seemple.bindNode(object, 'sandbox', '.app');
Seemple.selectAll(object, '.my-element');
*/
