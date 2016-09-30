/**
@method Matreshka.Object#toJSON
@importance 1
@summary Конвертує екземпляр {@link Matreshka.Object} в звичайний об'єкт
@desc Метод працює рекурсивно, викликаючи ``toJSON`` для всіх властивостей, у яких є метод з таким ім'ям. Для скасування рекурсії передайте ``false`` першим аргументом.
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

// повертає {a: 1, b: 2, c: { d: 3, e: 4 }}
console.log(mkObject.toJSON());

// повертає {a: 1, b: 2, c: MatreshkaObject}
console.log(mkObject.toJSON(false));
*/
