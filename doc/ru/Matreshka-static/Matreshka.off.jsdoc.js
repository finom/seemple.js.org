/**
@method Seemple.off
@module seemple/off
@importance 3
@since 1.1
@summary Удаляет обработчик события
@desc Этот статичный метод работает так же, как и {@link Seemple#off} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#off}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	//...
});

Seemple.off(object, 'foo');
*/
