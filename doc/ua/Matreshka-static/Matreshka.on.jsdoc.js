/**
@method Matreshka.on
@module matreshka/on
@importance 3
@since 1.1
@summary Додає обробник події
@desc Цей статичний метод працює так само, як і {@link Matreshka#on} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#on}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	alert(evt.hello);
});

Matreshka.trigger(object, 'foo', { hello: 'World' });
*/
