/**
@class Matreshka
@module matreshka/matreshka
@importance 1
@lang en
@alias MK
@see {@link Class}
@classdesc The class ``Matreshka`` is a core of the Matreshka.js framework which is inherited by {@link Matreshka.Array}, {@link Matreshka.Object} and every class of the application you create. It contains the main functionality of the framework, among which there are some very useful functions, such as {@link Matreshka#mediate mediators}, {@link Matreshka#linkProps dependencies}, {@link Matreshka#bindNode two-way data binding}, {@link Matreshka#on an event engine}, etc. The inheritance of this class, the same as the inheritance of any other class, is carried out with the help of the {@link Class} function.

This class, (like {@link Matreshka.Array} and {@link Matreshka.Object}), usually isn't used directly. Instead, it is inherited by the classes that you create. Therefore, the examples to the properties and methods in this documentation, as a rule, will be given with the use of ``this`` keyword.
@example <caption>Creating of an instance</caption>
var mk = new Matreshka();
@example <caption>You can use ``MK`` variable instead of ``Matreshka``</caption>
var mk = new MK();
@example <caption>Inheritance</caption>
var MyClass = MK.Class({
	'extends': Matreshka,
	constructor: function() {
		this.sayHello();
	},
	sayHello: function() {
		alert("Hello World!");
	}
});
@example <caption>Matreshka uses prototypes for implementing the inheritance. The {@link Class} function just brings in some syntactic sugar. That's why you can use any other way of the inheritance you like, for example, using classes from ECMAScript 2015</caption>
class MyClass extends Matreshka {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
*/
