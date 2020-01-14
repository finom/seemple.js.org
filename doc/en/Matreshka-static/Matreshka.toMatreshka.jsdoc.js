/**
@method Seemple.toSeemple
@module seemple/toseemple
@importance 3
@since 1.1
@summary The function, converting any nested tree of objects and arrays into {@link Seemple.Object} and {@link Seemple.Array} instances
@returns {seemple} a newly created instance of ``Seemple``
@example
const mk = Seemple.toSeemple({
	a: 1,
	b: {
		c: 2
	},
	d: [{e: 1}, {e: 2}, {e: 3}]
});
*/
