/**
@method Seemple.off
@module seemple/off
@importance 3
@since 1.1
@summary Видаляє обробник події
@desc Цей статичний метод працює так само, як і {@link Seemple#off} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#off}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	//...
});

Seemple.off(object, 'foo');
*/
