/**
@method Matreshka.Object#toJSON
@importance 1
@summary Конвертирует экземпляр {@link Matreshka.Object} в обычный объект
@desc Метод работает рекурсивно, вызывая ``toJSON`` для всех свойств, у которых есть метод с таким именем. Для отмены рекурсии передайте ``false`` первым аргументом.
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

// возвращает {a: 1, b: 2, c: { d: 3, e: 4 }}
console.log(mkObject.toJSON());

// возвращает {a: 1, b: 2, c: MatreshkaObject}
console.log(mkObject.toJSON(false));
*/
