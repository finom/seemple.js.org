/**
@method Seemple.calc
@module seemple/calc
@oldlink #!Seemple.linkProps
@importance 3
@since 1.1
@summary Создает зависимость значения одного свойства от значений других
@desc Этот статичный метод работает так же, как и {@link Seemple#calc} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#calc}
@example
const object = {};
object.a = 40;
object.b = 2;
Seemple.calc(object, 'sum', ['a', 'b'], (a, b) => a + b);
alert(object.sum); // 42
*/
