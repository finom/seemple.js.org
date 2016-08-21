/**
@class Matreshka.Array
@module matreshka/array
@importance 1
@classdesc The ``Matreshka.Array`` serves as collection class in Matreshka framework. It is inherited from the {@link Matreshka} class, obtaining all parent possibilities without exception. Besides, ``Matreshka.Array`` has all methods that ordinary array has.

#### All the methods which have been adopted from the built-in Array work like their originals.
A programmer familiar to the methods of native ``Array`` can understand immediately by means of which method adds (``push``, ``unshift``, ``splice``), deletes (``pop``, ``shift``, ``splice``), sorts (``sort``, ``reverse``) items etc. An exception from this rule is the ``forEach`` method which in its original form always returns ``undefined`` and in case with {@link Matreshka.Array} it returns itself for the chained call possibility. For the reason that methods work exactly the same as original ones, they are not presented in this documentation separately but they are gathered in the {@link Matreshka.Array#METHOD} section.
```js
this.push(1, 2, 3);
this.pop();
```

#### All methods adopted from built-in ``Array`` which modify an array can be called with an event object passing.

The ``method_`` syntax is used for this, where underscore at the end of a method name means that the last argument is an event object. Such methods are not given in this documentation because it is necessary to remember their syntax only. See {@link Matreshka.Array#METHOD_}.
```js
this.push_(1, 2, 3, {
	silent: true
});
this.pop_({
	silent: true
});
```

#### A developer has an opportunity of catching any data modification.

__While using a methods adopted from built-in ``Array``, events with corresponding name are fired.__ Calling the ``push`` method, the ``push`` event  is fired, calling the ``pull`` method, the ``pull`` event is fired,  calling the ``sort`` method, the ``sort`` event is fired, and so on... The list of arguments can be obtained addressing the ``args`` property.
```js
this.on('push', function(evt) {
	console.log(evt.args); // [1,2,3]
});

this.push(1, 2, 3);
```


__While adding items, the ``add`` and ``addone`` events are fired.__ The first one is fired once on adding (for example, you have added few items using ``push`` and the event has been called only once), the second one is fired once on every added item. On the ``add`` event triggering, an array of added items is passed to an event object (``added`` property) and on the ``addone`` triggering, each particular added item is passed to it.
```js
this.on('add', function(evt) {
	console.log(evt.added); // [1,2,3]
});

this.push(1, 2, 3);
```
```js
// the handler will be launched three times,
// as three new item have been added to the array
this.on('addone', function(evt) {
	console.log(evt.added); // 1 ... 2 ... 3
});

this.push(1, 2, 3);
```


__On removing items the same logic is observed__: ``remove`` triggers once even though several items have been removed and the ``removeone`` event triggers for each removed item individually. Removed items are contained in the ``removed`` property of an event object.
```js
this.push(1, 2, 3, 4, 5);

this.on('remove', function(evt) {
	console.log(evt.removed); // [2,3,4]
});

this.splice(1, 3);
```
```js
this.push(1, 2, 3, 4, 5);

// the handler will be launched three times,
// as three items have been removed from the array
this.on('removeone', function(evt) {
	console.log(evt.removed); // 2 ... 3 ... 4
});

this.splice(1, 3);
```
__On every modification of an array the ``modify`` event is fired__, allowing to catch all changes in the array (adding, removing, re-sorting) without any exception.
```js
this.on('modify', function(evt) {
	...
});
```

__``length`` is an ordinary property which can be bound to HTML node__  or you can catch changes using the ``change:length`` event.

> For example, on adding three items using the ``push`` method with three arguments, the following events: ``push``, ``add``, ``addone`` (three times), ``modify``, ``change:length`` are fired..

#### Model
The {@link Matreshka.Array#Model} property specifies a model class of items that an array contains. Its behavior is very similar to ``model`` property from ``Backbone.Collection``. It is recommended to inherit ``Model`` from the {@link Matreshka.Object} class or the {@link Matreshka.Array} one (in case if it is necessary to get a collection of collections) in order to get the opportunity of converting an array into an ordinary one by using the {@link Matreshka.Array#toJSON} method.
```js
// define Model
var MyModel = MK.Class({
	// it is inherited from MK.Object
	'extends': MK.Object,
	constructor: function(data) {
		// set passed properties by jset method
		this.jset(data);
	}
});

// define the class for a collection
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel
});

// create class instance
var myArray = new MyArray();

// add two items
myArray.push({
	a: 1,
	b: 2
}, {
	a: 3,
	b: 4
})

// will return [{a: 1, b: 2}, {a: 3, b: 4}]
myArray.toJSON();
```

#### Automatic rendering
``Matreshka.Array`` can render HTML nodes on a page automatically **in any modifications** of an array. The {@link Matreshka.Array#itemRenderer} property is used for that. You do not have to worry about rebuilding the HTML tree, ``Matreshka.Array`` does it for you. The example of the usage of automatic list rendering is below.
```html
<ul class="my-list"></ul>
```
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		this.jset(data);

		// wait for the 'render' event
		this.on('render', function() {
			// and bind the 'value' property
			// to the newly created <li> HTML node
			this.bindNode('value', ':sandbox', MK.binders.html());
		});
	}
});

var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	// define the renderer for each item of the collection
	itemRenderer: '<li>',
	constructor: function() {
		// create a sandbox
		this.bindNode('sandbox', '.my-list');
	}
});

var myArray = new MyArray();
myArray.push({
	value: 'Hello'
}, {
	value: 'World'
});
```
For more detailed information read the documentation of {@link Matreshka.Array#itemRenderer}.

@see {@link Matreshka.Array#itemRenderer}
@see {@link Matreshka.Array#Model}
@see {@link Matreshka#bindNode}

@inherits Matreshka
@example <caption>An instance creation</caption>
new MK.Array();
@example <caption>An instance creation with length specifying</caption>
new MK.Array(42);
@example <caption>Items passing on creation</caption>
new MK.Array('Hi', {a: 'b'});
@example <caption>The inheritance</caption>
var MyClass = MK.Class({
	'extends': MK.Array,
	constructor: function() {
		this.sayHello();
	},
	sayHello: function() {
		alert("Hello World!");
	}
});
@example <caption>The inheritance using ECMAScript 2015 syntax</caption>
class MyClass extends MK.Array {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Data enumerating, using the for..of syntax from ECMAScript 2015</caption>
var mkArray = new MK.Array(1, 2, 3);
for(let item of mkArray) {
	console.log(item); // 1 .. 2 .. 3
}
@example <caption>Listening to events</caption>
this.on('modify', function( evt ) {
	alert('1) the ' + evt.method + ' method has been called');
});

this.on('shift', function(evt) {
	alert('2) the ' + evt.method + ' method has been called');
});

this.push(1); // 1) the push method has been called

this.shift(); // 1) the shift method has been called, 2) the shift method has been called

@example <caption>An event object passing to native-like ``Array`` method</caption>
this.on('modify', function(evt) {
	alert(evt.customData);
});

this.push_(1, {
	silent: true // event is not fired
});

this.shift_({
	customData: 42 // alerts 42
});
*/
