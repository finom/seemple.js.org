/**
@method Seemple.Array#toJSON
@importance 1
@summary Конвертирует экземпляр {@link Seemple.Array} в обычный массив
@desc Метод работает рекурсивно, вызывая ``toJSON`` для входящих объектов, у которых есть метод с таким именем. Для отмены рекурсии передайте ``false`` первым аргументом.
@param {boolean} [recursive=true]
@returns {array}
@example
const seempleArray = new Seemple.Array([1, 2, new SeempleArray(3, 4)]);

// возвращает [1, 2, [3, 4]]
console.log(seempleArray.toJSON());

// возвращает [1, 2, SeempleArray]
console.log(seempleArray.toJSON(false));
*/
