/**
@class Seemple
@module seemple/seemple
@importance 1
@lang en
@see {@link Seemple.Class}
@classdesc The class ``Seemple`` is a core of the Seemple.js framework which is inherited by {@link Seemple.Array}, {@link Seemple.Object} (and every class of an application you create). It contains the main functionality of the framework: {@link Seemple#mediate mediators}, {@link Seemple#calc dependencies}, {@link Seemple#bindNode two-way data binding}, {@link Seemple#on an event engine}, etc.

This class usually isn't used directly. Instead, it is inherited by other classes.

@example <caption>Creating of an instance</caption>
const seemple = new Seemple();

@example <caption>Inheritance</caption>
class MyClass extends Seemple {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}

@example <caption>Inheritance using {@link Seemple.Class}</caption>
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
