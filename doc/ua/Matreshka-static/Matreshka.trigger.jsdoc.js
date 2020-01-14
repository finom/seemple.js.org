/**
@method Seemple.trigger
@module seemple/trigger
@importance 3
@since 1.1
@summary Генерує подію
@desc Цей статичний метод працює так само, як і {@link Seemple#trigger} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#trigger}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	alert(evt.hello);
});

Seemple.trigger(object, 'foo', { hello: 'World' });
*/
