/**
@method Matreshka.trigger
@module matreshka/trigger
@importance 3
@since 1.1
@summary Генерує подію
@desc Цей статичний метод працює так само, як і {@link Matreshka#trigger} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#trigger}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	alert(evt.hello);
});

Matreshka.trigger(object, 'foo', { hello: 'World' });
*/
