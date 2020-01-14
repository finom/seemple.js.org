/**
@method Seemple.unbindNode
@module seemple/unbindnode
@importance 3
@since 1.1
@summary Разрывает связь между свойством и HTML элементом
@desc Этот статичный метод работает так же, как и {@link Seemple#unbindNode} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#unbindNode}
@example
const object = {};
Seemple.unbindNode(object, 'x', '.my-node');
*/
