/**
@class Matreshka
@module matreshka/matreshka
@importance 1
@lang en
@see {@link Matreshka.Class}
@classdesc The class ``Matreshka`` is a core of the Matreshka.js framework which is inherited by {@link Matreshka.Array}, {@link Matreshka.Object} and every class of the application you create. It contains the main functionality of the framework: {@link Matreshka#mediate mediators}, {@link Matreshka#linkProps dependencies}, {@link Matreshka#bindNode two-way data binding}, {@link Matreshka#on an event engine}, etc.

This class, (like {@link Matreshka.Array} and {@link Matreshka.Object}), usually isn't used directly. Instead, it is inherited by the classes that you create.

@example <caption>Creating of an instance</caption>
const mk = new Matreshka();
@example <caption>You can use ``MK`` variable instead of ``Matreshka``</caption>
const mk = new MK();

@example <caption>Inheritance</caption>
class MyClass extends Matreshka {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}

@example <caption>Inheritance using {@link Matreshka.Class}</caption>
const MyClass = MK.Class({
	'extends': Matreshka,
	constructor() {
		this.sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});
*/
