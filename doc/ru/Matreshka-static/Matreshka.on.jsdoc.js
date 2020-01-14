/**
@method Seemple.on
@module seemple/on
@importance 3
@since 1.1
@summary Добавляет обработчик события
@desc Этот статичный метод работает так же, как и {@link Seemple#on} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#on}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	alert(evt.hello);
});

Seemple.trigger(object, 'foo', { hello: 'World' });
*/
