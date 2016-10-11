/**
@class Matreshka.Object
@module matreshka/object
@importance 1
@classdesc ``Matreshka.Object`` is a class which is responsible for key-value data. Its goal is to separate "service" properties from data that can be passed to a server or kept in a local storage. The class is inherited from the {@link Matreshka} class and includes all its properties and methods.

Imagine you create an object which includes ``"a"``, ``"b"`` and ``"c"`` properties. Let's assume that ``"a"`` and ``"b"`` are the properties which must be sent to a server, and ``"c"`` property is just responsible for some application state (for example, it contains the sum of ``"a"`` and ``"b"``). The server does not need the ``"c"`` property. So we have to separate **the properties which are responsible for data** from ones which are not.

In order to declare such properties from others, you can make use of the {@link Matreshka.Object#addDataKeys} method.
```js
this.addDataKeys(['a', 'b']);

this.a = 1;
this.b = 2;
this.c = 3;
```

If you don't know which properties are specified in advance, you can always use the {@link Matreshka.Object#setData} method, which declares not only properties responsible for data but sets their values at once.
```js
this.setData({
	a: 1,
	b: 2
});

this.c = 3;
```

After an application has found out what is data, {@link Matreshka.Object} instance can be converted into an ordinary object by the {@link Matreshka.Object#toJSON} method and passed to a server or kept in a local DB (for example, in ``localStorage``).
```js
// will return an object { a: 1, b: 2 }
this.toJSON();
```

#### Events

On add or change of data properties ``set`` and ``modify`` events are fired. On remove of data properties ``remove`` and ``modify`` events are fired. That means you can listen any changes of ``Matreshka.Object`` instance with the only ``modify`` event name.

```js
this.on('modify', () => {
	alert('an object is modified');
});
```
@param {object} [data] - Data
@inherits Matreshka
@example <caption>Creation of an instance with two specified properties</caption>
// the same as new Matreshka.Object().setData({ a: 1, b: 2 });
new Matreshka.Object({ a: 1, b: 2 });
@example <caption>The inheritance</caption>
class MyClass extends Matreshka.Object {
	constructor(data) {
		super(data).sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>The inheritance using {@link Matreshka.Class} function</caption>
const MyClass = Matreshka.Class({
	extends: Matreshka.Object,
	constructor(data) {
		this.setData(data).sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});

@example <caption>Data enumerating, using for..of</caption>
const mkObject = new Matreshka.Object({ a: 1, b: 2 });
for(let item of mkObject) {
	console.log(item); // 1 .. 2
}
*/
