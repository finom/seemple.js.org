/**
@method Seemple.set
@module seemple/set
@importance 3
@since 1.1
@summary Встановлює значення властивості, дозволяючи передати об'єкт події в якості третьої аргументу
@desc Цей статичний метод працює так само, як і {@link Seemple#set} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#set}
@example
const object = {};
Seemple.set(object, 'x', 42, {
	someOption: true
});
*/
