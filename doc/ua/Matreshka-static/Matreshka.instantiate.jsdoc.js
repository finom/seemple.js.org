/**
@method Matreshka.instantiate
@module matreshka/instantiate
@oldlink #!Matreshka.setClassFor
@importance 3
@since 1.1
@summary Створює фіксований екземпляр класу
@desc Цей статичний метод працює так само, як і {@link Matreshka#instantiate} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {object} Перший аргумент
@see {@link Matreshka#instantiate}
@example
const object = {};
Matreshka.instantiate(object, 'x', SomeClass);
object.x = { a: 42 };
alert(this.x instanceof SomeClass); // true
alert(this.x.a); // 42
*/
