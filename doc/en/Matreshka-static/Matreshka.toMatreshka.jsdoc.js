/**
@method Matreshka.toMatreshka
@module matreshka/tomatreshka
@importance 3
@since 1.1
@summary The function, converting any nested tree of objects and arrays into {@link Matreshka.Object} and {@link Matreshka.Array} instances
@returns {matreshka} a newly created instance of ``Matreshka``
@example
const mk = Matreshka.toMatreshka({
	a: 1,
	b: {
		c: 2
	},
	d: [{e: 1}, {e: 2}, {e: 3}]
});
*/
