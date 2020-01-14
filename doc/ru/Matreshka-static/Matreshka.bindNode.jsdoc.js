/**
@method Seemple.bindNode
@module seemple/bindnode
@importance 3
@since 1.1
@summary Связывает свойство объекта с HTML элементом
@desc Этот статичный метод работает так же, как и {@link Seemple#bindNode} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#bindNode}
@example
const object = {};
Seemple.bindNode(object, 'x', '.my-node');
*/
