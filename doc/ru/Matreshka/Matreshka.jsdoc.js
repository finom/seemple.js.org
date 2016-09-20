/**
@class Matreshka
@module matreshka/matreshka
@importance 1
@lang ru
@see {@link Matreshka.Class}
@classdesc Класс ``Matreshka`` - ядро фреймворка Matreshka.js, от которого наследуются {@link Matreshka.Array}, {@link Matreshka.Object} и каждый класс создаваемого приложения. Он содержит основной функционал фреймворка: {@link Matreshka#mediate медиаторы}, {@link Matreshka#calc зависимости}, {@link Matreshka#bindNode привязки к DOM}, {@link Matreshka#on движок событий} и пр.

Как правило, этот класс, (как и {@link Matreshka.Array} и {@link Matreshka.Object}), не используются напрямую. Вместо этого, от него наследуются классы, создаваемые разработчиком.

@example <caption>Создание экземпляра</caption>
const mk = new Matreshka();
@example <caption>Краткая запись: ``MK`` вместо ``Matreshka`` (для немодульного окружения)</caption>
const mk = new MK();

@example <caption>Наследование</caption>
class MyClass extends Matreshka {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Наследование при помощи функции {@link Matreshka.Class}</caption>
const MyClass = Matreshka.Class({
	'extends': Matreshka,
	constructor() {
		this.sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});
*/
