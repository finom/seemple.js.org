/**
@method Seemple.on
@module seemple/on
@importance 3
@since 1.1
@summary Додає обробник події
@desc Цей статичний метод працює так само, як і {@link Seemple#on} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#on}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	alert(evt.hello);
});

Seemple.trigger(object, 'foo', { hello: 'World' });
*/
