/**
Event handler. Takes any arguments passed to {@link Matreshka#trigger}
@callback eventHandler
@param {...*} options - Any arguments
@example
const eventHandler = () => {
	console.log(arguments);
};
this.on('fyeah', eventHandler);
this.trigger('fyeah', 'foo', 'bar', 'baz'); // logs 'foo', 'bar', 'baz'
*/


/**
{@link Matreshka} instance
@typedef {object} matreshka
const mk = new Matreshka();
obj.calc('a', 'b');
*/

/**
{@link Matreshka.Object} instance
@typedef {object} matreshkaObject
const obj = new Matreshka.Object({ foo: 'x' });
obj.setData({ bar: 'y' });
*/


/**
{@link Matreshka.Array} instance
@typedef {object} matreshkaArray
const arr = new Matreshka.Array(1, 2, 3);
arr.push(4);
*/


/**
Event name or space-delimited list of event names.

> This is very brief description of event names. The full article about events you can find at [this article](https://medium.com/@finom/matreshka-js-events-e35cc201c2cb).

##### Custom events.
```js
this.on('myevent', () => {...});
this.trigger('myevent');
```

##### ``change:KEY`` which is triggered every time when a property is changed.
```js
this.on('change:x', evt => {...});
this.x = 42;
```

##### ``beforechange:KEY`` which is triggered every time before a property is changed.
```js
this.on('beforechange:x', evt => {...});
this.x = 42;
```

##### ``addevent:NAME`` and ``addevent`` which are triggered on event initialization.
```js
// for any event
this.on('addevent', evt => {...});
// for "someevent" event
this.on('addevent:someevent', evt => {...});
// the line below fires "addevent" and "addevent:someevent"
this.on('someevent', evt => {...});
```

##### ``DOM_EVENT::KEY``, where DOM_EVENT is a name of DOM event, KEY is a key. A handler is called when DOM_EVENT is triggered on a node which is bound to the KEY.
```js
this.bindNode('x', '.my-div');
this.on('click::x', evt => {
	alert('clicked ".my-div"');
});
```

##### ``DOM_EVENT::KEY(SELECTOR)``, where DOM_EVENT is a name of DOM event, KEY is a key, SELECTOR is a selector. A handler is called when DOM_EVENT is triggered on a node which matches the SELECTOR within a node bound to the KEY.
```html
<div class="my-div">
	<button class="my-button"></button>
</div>
```
```js
this.bindNode('x', '.my-div');
this.on('click::x(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```

##### ``DOM_EVENT::(SELECTOR)``, where DOM_EVENT is a name of DOM event, SELECTOR is a selector. A handler is called when DOM_EVENT is triggered on a node which matches the SELECTOR within a sandbox.

```js
this.bindNode('sandbox', '.my-div');
this.on('click::(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```
The same as:
```js
this.bindNode('sandbox', '.my-div');
this.on('click::sandbox(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```

##### Delegated events: ``PATH@EVENT``, where PATH is a path to a target object whose events we want to listen, EVENT is an event name.
```js
this.on('a@someevent', () => {...});
this.on('a.b.c@change:d', () => {...});
```

If you need to listen an event of every item of {@link Matreshka.Array} or every data property of {@link Matreshka.Object}, you can use an asterisk "*" instead of specific property name.

```js
this.on('*@someevent', () => {...});
this.on('*.b.*.d@change:e', () => {...});
```

##### Any combinations. All events described above can be combined.
```js
this.on('x.y.z@click::(.my-selector)', () => {...});
```
@typedef {string} eventNames
*/


/**
``binder`` contains all information about how to synchronize instance property value with DOM node state. Every member of a binder uses HTML node as its context (``this``)
@typedef {object} binder
@property {string|function} [on] - DOM event (or space-delimited list of events) which tells when the node state is changed. Besides, it accepts a function as a value if you need to customize your listener definition
@property {function} [getValue] - A function which tells how to retrieve a value (state) from HTML node when DOM event is fired
@property {function} [setValue] - A function which tells how to change DOM node when the property value is changed
@property {function} [initialize] - A function which is called before binding is launched. For example it can initialize jQuery plugin or something else
@property {function} [destroy] - A function which is called when a binding is removed using ``unbindNode`` method
@example
const binder = {
	on: 'click',
	getValue(bindingOptions) {
		return this.value;
	},
	setValue(v, bindingOptions) {
		this.value = v;
	},
	initialize(bindingOptions) {
		alert('A binding is initialized');
	},
	destroy(bindingOptions) {
		alert('A binding is destroyed');
	}
};

this.bindNode('a', '.my-checkbox', binder);
@example
const binder = {
	on(callback, bindingOptions) {
		this.onclick = callback;
	},
	// ...
};
// ...
*/


/**
An event object
@typedef {object} eventOptions
@desc An object which can contain service flags or custom data which will be passed to an event handler
@example
const eventOptions = { silent: true };

this.a = 1;

this.on('change:a', () => {
	alert('a is changed');
});

this.set('a', 2, eventOptions); // no alert
@example
const eventOptions = { f: 'yeah' };

this.a = 1;

this.on('change:a', eventOptions => {
	alert(eventOptions.f);
});

this.set('a', 2, eventOptions); // alerts "yeah"
*/


/**
A class made using ECMAScript 2015 syntax or returned by {@link Matreshka.Class} function
@typedef {function} class
@example
class MyClass {
	method() { ... }
};
@example
const MyClass = Matreshka.Class({
	method() { ... }
});
*/


/**
A DOM node
@typedef node
@example
const node = document.querySelector('.foo');
*/

/**
DOM nodes collection. For example, jQuery instance.
@typedef $nodes
@example
const $nodes = $('.foo');
*/


/**
A string
@typedef string
@example
const foo = 'bar';
*/

/**
A boolean
@typedef boolean
@example
const bool = true;
*/

/**
A number
@typedef number
@example
const num = 42;
*/

/**
An object
@typedef object
@example
const obj = {
	foo: 'x',
	['bar']: 'y'
};
*/

/**
An array
@typedef array
@example
const arr = ['foo', undefined, null, () => {}];
*/

/**
A function
@typedef function
@example
function comeOnBarbieLetsGoParty() {
	alert("I'm a Barbie girl, in a Barbie world");
}
*/

/**
null
@typedef null
@example
const x = null;
*/

/**
Any type
@typedef *
@example
let whatever = 'foo';
whatever = 42;
*/
