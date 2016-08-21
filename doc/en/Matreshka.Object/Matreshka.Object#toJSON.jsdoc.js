/**
@method Matreshka.Object#toJSON
@importance 1
@summary Converts an instance and its internal properties into an ordinary object
@desc The method works recursively, calling ``toJSON`` for all internal properties which have such method. To cancel this behavior pass ``false`` as the only argument.
@param {boolean} [recursive=true]
@returns {object}
@example
const mkObject = new Matreshka.Object({
	a: 1,
	b: 2,
	c: new Matreshka.Object({
		d: 3,
		e: 4
	})
});

// returns {a: 1, b: 2, c: { d: 3, e: 4 }}
console.log(mkObject.toJSON());

// returns {a: 1, b: 2, c: MatreshkaObject}
console.log(mkObject.toJSON(false));
*/
