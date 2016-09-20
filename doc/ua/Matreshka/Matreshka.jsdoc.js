/**
@class Matreshka
@module matreshka/matreshka
@importance 1
@lang ua
@see {@link Matreshka.Class}
@classdesc Клас `` Matreshka`` - це ядро ​​фреймворка Matreshka.js, від якого успадковуються {@link Matreshka.Array}, {@link Matreshka.Object} і кожен клас створюваного додатка. Він містить основний функціонал фреймворка: {@link Matreshka#mediate медіатори}, {@link Matreshka#calc залежності}, {@link Matreshka#bindNode прив'язки до DOM}, {@link Matreshka#on механізм подій} тощо.

Як правило, цей клас, (як і {@link Matreshka.Array} і {@link Matreshka.Object}), не використовуються безпосередньо. Замість цього, від нього успадковуються класи, створювані розробником.

@example <caption>Створення екземпляру</caption>
const mk = new Matreshka();
@example <caption>Короткий запис: ``MK`` замість ``Matreshka`` (для немодульного оточення)</caption>
const mk = new MK();

@example <caption>Спадкування</caption>
class MyClass extends Matreshka {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Спадкування за допомогою функції {@link Matreshka.Class}</caption>
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
