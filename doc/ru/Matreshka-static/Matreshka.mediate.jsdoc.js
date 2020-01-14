/**
@method Seemple.mediate
@module seemple/mediate
@importance 3
@since 1.1
@summary Трансформирует значение свойства при его изменении
@desc Этот статичный метод работает так же, как и {@link Seemple#mediate} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#mediate}
@example
const object = {};
Seemple.mediate(object, 'x', String);
object.x = 42;
alert(typeof object.x); // string
*/
