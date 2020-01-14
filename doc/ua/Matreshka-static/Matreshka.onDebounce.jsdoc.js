/**
@method Seemple.onDebounce
@module seemple/ondebounce
@importance 3
@since 1.1
@summary Додатє обробник події, що викликається лише однин раз за певний проміжок часу
@desc Цей статичний метод працює так само, як і {@link Seemple#onDebounce} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#onDebounce}
@example
const object = {};
Seemple.onDebounce(object, 'foo', evt => {
	//...
});
*/
