/**
@class Seemple.Object
@module seemple/object
@importance 1
@classdesc ``Seemple.Object`` is a class which is responsible for key-value data. Its goal is to separate "service" properties from data that can be passed to a server or kept in a local storage. The class is inherited from the {@link Seemple} class and includes all its properties and methods.

Imagine you create an object which includes ``"a"``, ``"b"`` and ``"c"`` properties. Let's assume that ``"a"`` and ``"b"`` are the properties which must be sent to a server, and ``"c"`` property is just responsible for some application state (for example, it contains the sum of ``"a"`` and ``"b"``). The server does not need the ``"c"`` property. So we have to separate **the properties which are responsible for data** from ones which are not.

In order to declare such properties from others, you can make use of the {@link Seemple.Object#addDataKeys} method.
```js
this.addDataKeys(['a', 'b']);

this.a = 1;
this.b = 2;
this.c = 3;
```

If you don't know which properties are specified in advance, you can always use the {@link Seemple.Object#setData} method, which declares not only properties responsible for data but sets their values at once.
```js
this.setData({
	a: 1,
	b: 2
});

this.c = 3;
```

After an application has found out what is data, {@link Seemple.Object} instance can be converted into an ordinary object by the {@link Seemple.Object#toJSON} method and passed to a server or kept in a local DB (for example, in ``localStorage``).
```js
// will return an object { a: 1, b: 2 }
this.toJSON();
```

#### Events

On add or change of data properties ``set`` and ``modify`` events are fired. On remove of data properties ``remove`` and ``modify`` events are fired. That means you can listen any changes of ``Seemple.Object`` instance with the only ``modify`` event name.

```js
this.on('modify', () => {
	alert('an object is modified');
});
```
@param {object} [data] - Data
@inherits Seemple
@example <caption>Creation of an instance with two specified properties</caption>
// the same as new Seemple.Object().setData({ a: 1, b: 2 });
new Seemple.Object({ a: 1, b: 2 });
@example <caption>The inheritance</caption>
class MyClass extends Seemple.Object {
	constructor(data) {
		super(data).sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>The inheritance using {@link Seemple.Class} function</caption>
const MyClass = Seemple.Class({
	extends: Seemple.Object,
	constructor(data) {
		this.setData(data).sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});

@example <caption>Data enumerating, using for..of</caption>
const mkObject = new Seemple.Object({ a: 1, b: 2 });
for(let item of mkObject) {
	console.log(item); // 1 .. 2
}
*/
