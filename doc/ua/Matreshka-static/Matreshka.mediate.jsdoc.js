/**
@method Seemple.mediate
@module seemple/mediate
@importance 3
@since 1.1
@summary Трансформує значення властивості при його зміні
@desc Цей статичний метод працює так само, як і {@link Seemple#mediate} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#mediate}
@example
const object = {};
Seemple.mediate(object, 'x', String);
object.x = 42;
alert(typeof object.x); // string
*/
