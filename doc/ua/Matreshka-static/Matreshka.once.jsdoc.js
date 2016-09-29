/**
@method Matreshka.once
@module matreshka/once
@importance 3
@since 1.1
@summary Додає обробник події, який може бути викликаний лише один раз
@desc Цей статичний метод працює так само, як і {@link Matreshka#once} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#once}
@example
const object = {};
Matreshka.once(object, 'foo', evt => {
	//...
});
*/
