/**
@method Matreshka.toMatreshka
@oldlink #!Matreshka.to
@module matreshka/tomatreshka
@importance 3
@since 1.1
@summary Функція, яка конвертує довільну структуру об'єктів і масивів в екземпляри {@link Matreshka.Object} та {@link Matreshka.Array}
@returns {matreshka} новостворений екземпляр ``Matreshka``
@example
const mk = Matreshka.toMatreshka({
	a: 1,
	b: {
		c: 2
	},
	d: [{e: 1}, {e: 2}, {e: 3}]
});
*/
