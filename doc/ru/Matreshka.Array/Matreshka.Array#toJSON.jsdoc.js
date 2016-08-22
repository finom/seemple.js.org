/**
@method Matreshka.Array#toJSON
@importance 1
@summary Конвертирует экземпляр {@link Matreshka.Array} в обычный массив
@desc Метод работает рекурсивно, вызывая ``toJSON`` для входящих объектов, у которых есть метод с таким именем. Для отмены рекурсии передайте ``false`` первым аргументом.
@param {boolean} [recursive=true]
@returns {array}
@example
const mkArray = new Matreshka.Array([1, 2, new MatreshkaArray(3, 4)]);

// возвращает [1, 2, [3, 4]]
console.log(mkArray.toJSON());

// возвращает [1, 2, MatreshkaArray]
console.log(mkArray.toJSON(false));
*/
