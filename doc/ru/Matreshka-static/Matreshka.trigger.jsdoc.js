/**
@method Seemple.trigger
@module seemple/trigger
@importance 3
@since 1.1
@summary Генерирует событие
@desc Этот статичный метод работает так же, как и {@link Seemple#trigger} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#trigger}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	alert(evt.hello);
});

Seemple.trigger(object, 'foo', { hello: 'World' });
*/
