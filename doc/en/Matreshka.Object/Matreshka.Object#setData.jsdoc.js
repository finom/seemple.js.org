/**
@method Seemple.Object#setData
@synonym Seemple.Object#jset
@importance 1
@fires change
@fires change:KEY
@fires modify
@fires set
@summary Sets a property and adds property name to a list of property names which are responsible for data
@desc This method does two things:

1. Sets a specified value to a given property.

2. Adds a key to data keys list which it makes property available for using in the {@link Seemple.Object#each}, {@link Seemple.Object#keys}, {@link Seemple.Object#toJSON} and other methods.


> When  ``replaceData`` flag is set as ``true`` then all other properties will be removed from the list of data properties.

Apart from that, the method works the same as {@link Seemple#set}.

@see {@link Seemple#set}

@param {string} key - A key
@param {*} value - A value
@param {eventOptions} [eventOptions] - An event options

@returns {seempleObject} self

@example
this.setData('a', 1).setData('b', 2);

// assign 3 to the 'c' property,
// but do not add the key to a list of keys which are responsible for data
this.set('c', 3);

this.each((value, key) => {
	console.log(key, value);
});
// displays  'a' 1 and 'b' 2

console.log(this.keys()); // displays  ['a', 'b']

console.log(this.toJSON()); // displays  { a: 1, b: 2 }

@example <caption>After using the {@link Seemple.Object#setData} method, you can work with a property like with an ordinary one</caption>
this.setData('a', 1).setData('b', 2);
this.set('a', 3);
this.b = 4;

@example <caption>The use of alternative method name ``jset``</caption>
this.jset('a', 1);
*/

/**
@method Seemple.Object#setData
@importance 1
@variation 2
@summary Alternative syntax of the {@link Seemple.Object#setData} method that uses a "key-value" object for setting several properties at once
@param {object} keyValuePairs - A key-value object
@param {eventOptions} evtOpts - A event object

@returns {seempleObject} self

@example
this.setData({
	a: 1,
	b: 2
});

@example <caption>If ``replaceData`` event option set as ``true``, then other properties will be removed from a list of data properties</caption>
this
	.addDataKeys(['a', 'b', 'c'])
	.setData({
		a: 1,
		b: 2
	}, {
		replaceData: true
	});

console.log(this.keys()); // ['a', 'b']
*/
