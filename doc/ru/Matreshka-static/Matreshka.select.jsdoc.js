/**
@method Seemple.select
@module seemple/select
@importance 3
@since 1.1
@summary Возвращает элемент из песочницы, соответствующий селектору
@desc Этот статичный метод работает так же, как и {@link Seemple#select} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {node|null} найденный элемент
@see {@link Seemple#select}
@example
const object = {};
Seemple.bindNode(object, 'sandbox', '.app');
Seemple.select(object, '.my-element');
*/
