/**
@method Seemple.Object#toJSON
@importance 1
@summary Converts an instance and its internal properties into an ordinary object
@desc The method works recursively, calling ``toJSON`` for all internal properties which have such method. To cancel this behavior pass ``false`` as the only argument.
@param {boolean} [recursive=true]
@returns {object}
@example
const seempleObject = new Seemple.Object({
	a: 1,
	b: 2,
	c: new Seemple.Object({
		d: 3,
		e: 4
	})
});

// returns {a: 1, b: 2, c: { d: 3, e: 4 }}
console.log(seempleObject.toJSON());

// returns {a: 1, b: 2, c: SeempleObject}
console.log(seempleObject.toJSON(false));
*/
