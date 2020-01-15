/**
@method Seemple.toSeemple
@oldlink #!Seemple.to
@module seemple/toseemple
@importance 3
@since 1.1
@summary Функция, конвертирующая произвольную структуру объектов и массивов в экземпляры {@link Seemple.Object} и {@link Seemple.Array}
@returns {seemple} новосозданный экземпляр ``Seemple``
@example
const seemple = Seemple.toSeemple({
	a: 1,
	b: {
		c: 2
	},
	d: [{e: 1}, {e: 2}, {e: 3}]
});
*/
