/**
@method Seemple.bindSandbox
@module seemple/bindsandbox
@importance 3
@since 1.1
@summary Пов'язує властивість ``sandbox`` з елементом і одв'язує попередній елемент, якщо такий існує

@desc Цей статичний метод працює так само, як і {@link Seemple#bindSandbox} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Seemple#bindSandbox}
@example
const object = {};
Seemple.bindSandbox(object, '.my-node');
*/
