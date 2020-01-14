/**
@method Seemple.once
@module seemple/once
@importance 3
@since 1.1
@summary Добавляет обработчик события, который может быть вызван однажды
@desc Этот статичный метод работает так же, как и {@link Seemple#once} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#once}
@example
const object = {};
Seemple.once(object, 'foo', evt => {
	//...
});
*/
