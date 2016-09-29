/**
@method Matreshka.off
@module matreshka/off
@importance 3
@since 1.1
@summary Видаляє обробник події
@desc Цей статичний метод працює так само, як і {@link Matreshka#off} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#off}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	//...
});

Matreshka.off(object, 'foo');
*/
