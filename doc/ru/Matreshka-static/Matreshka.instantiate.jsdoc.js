/**
@method Seemple.instantiate
@module seemple/instantiate
@oldlink #!Seemple.setClassFor
@importance 3
@since 1.1
@summary Создаёт фиксированный экземпляр класса
@desc Этот статичный метод работает так же, как и {@link Seemple#instantiate} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#instantiate}
@example
const object = {};
Seemple.instantiate(object, 'x', SomeClass);
object.x = { a: 42 };
alert(this.x instanceof SomeClass); // true
alert(this.x.a); // 42
*/
