/**
@method Matreshka.Object#jset
@importance 1
@fires change
@fires change:KEY
@fires modify
@summary Sets a property and adds a key to a list of keys which are responsible for data.
@desc This method does two things:

1\. Sets a specified value to a given property.

2\. Adds a key to data keys list which it makes property available for using in the {@link Matreshka.Object#each}, {@link Matreshka.Object#keys}, {@link Matreshka.Object#toJSON} methods).

Apart from that, the method works the same as {@link Matreshka#set}.

@see {@link Matreshka#set}

@param {string} key - A key
@param {*} value - A value
@param {eventOptions} [evtOpts] - An event object

@returns {matreshkaObject} self

@example
this.jset('a', 1).jset('b', 2);

@example
this.jset('a', 1).jset('b', 2);

// assign 3 to the 'c' property,
// but do not add the key to a list of keys which are responsible for data
this.set('c', 3);

this.each(function(value, key) {
	console.log(key, value);
});

// displays  'a' 1 and 'b' 2

console.log(this.keys()); // displays  ['a', 'b']

console.log(this.toJSON()); // displays  {a: 1, b: 2}

@example <caption>After using the {@link Matreshka.Object#jset} method, you can work with a property like with an ordinary one</caption>
this.jset('a', 1).jset('b', 2);
this.set('a', 3);
this.b = 4;
*/

/**
@method Matreshka.Object#jset
@importance 1
@variation 2
@summary Alternative syntax of the {@link Matreshka.Object#jset} method that uses a "key-value" object for setting several properties at once
@param {object} keyValuePairs - A key-value object
@param {eventOptions} evtOpts - A event object

@returns {matreshkaObject} self

@example
this.jset({
	a: 1,
	b: 2
});
@example <caption>The usage of event object</caption>
this.jset({
	a: 1,
	b: 2
}, {silent: true});
*/
