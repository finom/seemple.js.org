/**
@class Seemple
@module seemple/seemple
@importance 1
@lang ua
@see {@link Seemple.Class}
@classdesc Клас `` Seemple`` - це ядро ​​фреймворка Seemple.js, від якого успадковуються {@link Seemple.Array}, {@link Seemple.Object} і кожен клас створюваного додатка. Він містить основний функціонал фреймворка: {@link Seemple#mediate медіатори}, {@link Seemple#calc залежності}, {@link Seemple#bindNode прив'язки до DOM}, {@link Seemple#on механізм подій} тощо.

Як правило, цей клас, (як і {@link Seemple.Array} і {@link Seemple.Object}), не використовуються безпосередньо. Замість цього, від нього успадковуються класи, створювані розробником.

@example <caption>Створення екземпляру</caption>
const mk = new Seemple();
@example <caption>Короткий запис: ``MK`` замість ``Seemple`` (для немодульного оточення)</caption>
const mk = new MK();

@example <caption>Спадкування</caption>
class MyClass extends Seemple {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Спадкування за допомогою функції {@link Seemple.Class}</caption>
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
