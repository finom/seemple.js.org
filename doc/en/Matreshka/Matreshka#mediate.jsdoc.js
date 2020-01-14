/**
@method Seemple#mediate
@importance 2
@since 0.1
@summary Transforms property value on its changing
@desc This method is used for transforming property value on its changing. For example, you want the property value to be always either of a certain type or an integer value, or to be no less than zero and no more than a hundred etc.

> Note that the method has {@link Seemple.mediate static alternative}, which works just the same but accepts any target object as the first argument, shifting rest arguments to the right.
```js
const mediate = require('seemple/mediate');
const object = {};
mediate(object, key, mediator);
// instead of this.mediate(key, mediator);
```

@param {string|array} key - A key or an array of keys
@param {function} mediator - A function-mediator which returns a new value. It gets the following arguments: new value, previous value, a key, an object itself

@returns {object} self

@example
this.mediate('x', value => String(value));

this.x = 1;

alert(typeof this.x); // "string"

@example <caption>An array of keys</caption>
this.mediate(['x', 'y'], value => String(value));
*/


/**
@method Seemple#mediate
@importance 2
@variation 2
@since 0.1
@summary Alternative syntax of the {@link Seemple#mediate} method which accepts "key-mediator" object as an argument
@param {object} keyMediatorPairs - An object with key-mediator properties
@example
this.mediate({
	x: String,
	y: Number,
	z: Boolean
});
this.x = 1;
this.y = 2;
this.z = 3;
alert(typeof this.x); // "string"
alert(typeof this.y); // "number"
alert(typeof this.z); // "boolean"
*/
