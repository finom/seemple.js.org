/**
@method Seemple.bindOptionalNode
@module seemple/bindoptionalnode
@importance 3
@since 1.1
@summary Связывает элемент со свойством, но не бросает исключение, если аргумент node - пустой массив, ``undefined`` или не существует
@desc Этот статичный метод работает так же, как и {@link Seemple#bindOptionalNode} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#bindOptionalNode}
@example
const object = {};
Seemple.bindOptionalNode(object, 'x', '.my-node');
*/
