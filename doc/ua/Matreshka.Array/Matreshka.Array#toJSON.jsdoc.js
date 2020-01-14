/**
@method Seemple.Array#toJSON
@importance 1
@summary Конвертує екземпляр {@link Seemple.Array} в звичайний масив
@desc Метод працює рекурсивно, викликаючи ``toJSON`` для внутрішніх об'єктів, у яких є метод з таким ім'ям. Для скасування рекурсії передайте ``false`` першим аргументом.
@param {boolean} [recursive=true]
@returns {array}
@example
const mkArray = new Seemple.Array([1, 2, new SeempleArray(3, 4)]);

// повертає [1, 2, [3, 4]]
console.log(mkArray.toJSON());

// повертає [1, 2, SeempleArray]
console.log(mkArray.toJSON(false));
*/
