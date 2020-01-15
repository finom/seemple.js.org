/**
@method Seemple.Object#toJSON
@importance 1
@summary Конвертує екземпляр {@link Seemple.Object} в звичайний об'єкт
@desc Метод працює рекурсивно, викликаючи ``toJSON`` для всіх властивостей, у яких є метод з таким ім'ям. Для скасування рекурсії передайте ``false`` першим аргументом.
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

// повертає {a: 1, b: 2, c: { d: 3, e: 4 }}
console.log(seempleObject.toJSON());

// повертає {a: 1, b: 2, c: SeempleObject}
console.log(seempleObject.toJSON(false));
*/
