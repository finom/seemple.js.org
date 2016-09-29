/**
@method Matreshka.onDebounce
@module matreshka/ondebounce
@importance 3
@since 1.1
@summary Додатє обробник події, що викликається лише однин раз за певний проміжок часу
@desc Цей статичний метод працює так само, як і {@link Matreshka#onDebounce} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#onDebounce}
@example
const object = {};
Matreshka.onDebounce(object, 'foo', evt => {
	//...
});
*/
