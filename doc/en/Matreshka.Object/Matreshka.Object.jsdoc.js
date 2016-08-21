/**
@class Matreshka.Object
@module matreshka/object
@importance 1
@classdesc ``Matreshka.Object`` is a class which is responsible for key-value data. Its goal is to separate service properties from data that can be passed to a server or kept in a local storage. The class is inherited from the {@link Matreshka} class and includes all its properties and methods.

Imagine you create a class including ``"a"``, ``"b"`` and ``"c"`` properties. Let's assume that ``"a"`` and ``"b"`` are the properties which must be sent to a server, and ``"c"`` property is just responsible for some application state (for example, it contains the sum of ``"a"`` and ``"b"``). The server does not need the ``"c"`` property. So we have to separate **the properties which are responsible for data** from ones which are not.

In order to declare such properties from others, you can make use of the {@link Matreshka.Object#addDataKeys} method.
```js
this.addDataKeys('a b');

this.a = 1;
this.b = 2;
this.c = 3;
```

If you don't know which properties are specified in advance, you can always use the {@link Matreshka.Object#jset} method, which declares not only properties responsible for data but sets their values at once.
```js
this.jset({
	a: 1,
	b: 2
});

this.c = 3;
```

After an application has found out what is data, {@link Matreshka.Object} instance can be converted into an ordinary object by the {@link Matreshka.Object#toJSON} method and passed to a server or kept in a local DB (for example, in ``localStorage``).
```js
// will return the object {a: 1, b: 2}
this.toJSON();
```

The ``modify`` event is fired on changing properties which are responsible for data
```js
this.on('modify', function() {
	alert('Object is modified');
});
```
@param {object} [data] - Data
@param {matreshkaArray} [collection] - An array, where this object is added as {@link Matreshka.Array#Model Model}
@inherits Matreshka
@example <caption>Simple use.</caption>
new MK.Object();
@example <caption>Creation of an instance with two specified properties.</caption>
// the same as new MK.Object().jset({a: 1, b: 2});
new MK.Object({a: 1, b: 2});
@example <caption>The inheritance.</caption>
var MyClass = MK.Class({
	'extends': MK.Object,
	constructor: function() {
		this.sayHello();
	},
	sayHello: function() {
		alert("Hello World!");
	}
});
@example <caption>The inheritance using ECMAScript 2015 syntax</caption>
class MyClass extends MK.Object {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Data enumerating, using for..of syntax from ECMAScript 2015</caption>
var mkObject = new MK.Object({a: 1, b: 2});
for(let item of mkObject) {
	console.log(item); // 1 .. 2
}
*/
