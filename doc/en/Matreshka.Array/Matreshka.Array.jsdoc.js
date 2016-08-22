/**
@class Matreshka.Array
@module matreshka/array
@inherits Matreshka
@importance 1
@classdesc The ``Matreshka.Array`` serves as collection class in Matreshka framework. It is inherited from the {@link Matreshka} class, obtaining all parent possibilities without exception. Besides, ``Matreshka.Array`` has all methods that ordinary array has.

#### All the methods which have been adopted from the built-in Array work like their originals
A programmer familiar to the methods of native ``Array`` can understand immediately by means of which method adds (``push``, ``unshift``, ``splice``), deletes (``pop``, ``shift``, ``splice``), sorts (``sort``, ``reverse``) items etc. An exception from this rule is the ``forEach`` method which in its original form always returns ``undefined`` and in case with {@link Matreshka.Array} it returns ``this`` for the chained call possibility. For the reason that methods work exactly the same as original ones, they are not presented in this documentation separately but they are gathered in the {@link Matreshka.Array#METHOD} section.
```js
this.push(1, 2, 3);
this.pop();
```

#### All methods adopted from built-in ``Array`` which modify an array can be called with an event object passing

The ``method_`` syntax is used for this, where underscore at the end of a method name means that the last argument is an event object. Such methods are not given in this documentation because it is necessary to remember their syntax only. See {@link Matreshka.Array#METHOD_}.
```js
this.push_(1, 2, 3, {
	silent: true
});

this.pop_({
	foo: 'bar'
});
```

#### A developer has an opportunity of catching any data modification

__While using a methods adopted from built-in ``Array``, events with corresponding name are fired.__ Calling the ``push`` method, the ``push`` event  is fired, calling the ``shift`` method, the ``shift`` event is fired,  calling the ``sort`` method, the ``sort`` event is fired, and so on.
```js
this.on('push', evt => {
	console.log('push is called');
});

this.push(1, 2, 3);
```

__While adding items, ``add`` and ``addone`` events are fired.__ The first one is fired once on adding (for example, you have added few items using ``push`` and the event has been fired only once), the second one is fired once on every added item. On the ``add`` event triggering, an array of added items is passed to an event object as ``added`` property and on the ``addone`` triggering, each particular added item is passed to it as ``addedItem`` property.
```js
this.on('add', evt => {
	console.log(evt.added); // [1,2,3]
});

this.push(1, 2, 3);
```
```js
// the handler will be called three times,
// as three new item have been added to the array
this.on('addone', evt => {
	console.log(evt.addedItem); // 1 ... 2 ... 3
});

this.push(1, 2, 3);
```

__On removing items the same logic is observed__: ``remove`` triggers once even though several items have been removed (removed items are contained in the ``removed`` property) and the ``removeone`` event triggers for each removed item individually (removed item is contained in the ``removedItem`` property).

```js
this.push(1, 2, 3, 4, 5);

this.on('remove', evt => {
	console.log(evt.removed); // [2, 3, 4]
});

this.splice(1, 3);
```
```js
this.push(1, 2, 3, 4, 5);

// the handler will be called three times,
// as three items have been removed from the array
this.on('removeone', evt => {
	console.log(evt.removedItem); // 2 ... 3 ... 4
});

this.splice(1, 3);
```
__On every modification of an array the ``modify`` event is fired__, allowing to catch all changes in the array (adding, removing, re-sorting).
```js
this.on('modify', evt => {
	console.log(evt.added);
	console.log(evt.removed);
});
```

__``length`` is an ordinary property which can be bound to HTML node__  or you can listen changes using the ``change:length`` event name.

> For example, on adding three items using the ``push`` method with three arguments, the following events: ``push``, ``add``, ``addone`` (three times), ``modify``, ``change:length`` are fired.

#### Model
The {@link Matreshka.Array#Model} property specifies a class of items that an array contains. It is recommended to inherit ``Model`` from the {@link Matreshka.Object} class or the {@link Matreshka.Array} one (in case if it is necessary to get a collection of collections) in order to get the opportunity of converting an array into an ordinary one recursively by using the {@link Matreshka.Array#toJSON} method.

#### Automatic rendering
``Matreshka.Array`` can render HTML nodes on a page automatically in any modifications of an array. The {@link Matreshka.Array#itemRenderer} property is used for that. You do not have to worry about rebuilding the HTML tree, ``Matreshka.Array`` does it for you. For detailed information read the documentation of {@link Matreshka.Array#itemRenderer}.

@see {@link Matreshka.Array#itemRenderer}
@see {@link Matreshka.Array#Model}

@example <caption>An instance creation</caption>
new Matreshka.Array();
@example <caption>An instance creation with length specifying</caption>
new Matreshka.Array(42);
@example <caption>Items passing on creation</caption>
new Matreshka.Array('Hi', {a: 'b'});
@example <caption>The inheritance</caption>
class MyClass extends Matreshka.Array {
	constructor(items) {
		super(items).sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}

@example <caption>The inheritance using {@link Matreshka.Class} function</caption>
const MyClass = Matreshka.Class({
	extends: Matreshka.Array,
	constructor(items) {
		this.recreate(items).sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});
*/
