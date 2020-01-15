/**
@class Seemple
@module seemple/seemple
@importance 1
@lang ru
@see {@link Seemple.Class}
@classdesc Класс ``Seemple`` - ядро фреймворка Seemple.js, от которого наследуются {@link Seemple.Array}, {@link Seemple.Object} и каждый класс создаваемого приложения. Он содержит основной функционал фреймворка: {@link Seemple#mediate медиаторы}, {@link Seemple#calc зависимости}, {@link Seemple#bindNode привязки к DOM}, {@link Seemple#on движок событий} и пр.

Как правило, этот класс, (как и {@link Seemple.Array} и {@link Seemple.Object}), не используются напрямую. Вместо этого, от него наследуются классы, создаваемые разработчиком.

@example <caption>Создание экземпляра</caption>
const seemple = new Seemple();

@example <caption>Наследование</caption>
class MyClass extends Seemple {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Наследование при помощи функции {@link Seemple.Class}</caption>
const MyClass = Seemple.Class({
	'extends': Seemple,
	constructor() {
		this.sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});
*/
