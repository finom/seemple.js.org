/**
@method Matreshka.Array.from
@importance 2
@since 1.1
@summary Метод создаёт новый экземпляр {@link Matreshka.Array} из массивоподобного объекта.
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from Array.from}
@param {object} arrayLike - Массивоподобный объект.
@param {function} [mapFn] - Отображающая функция, вызываемая для каждого элемента массива.
@param {*} [thisArg] - Объект, который используется в качестве ``this`` при вызове ``mapFn``
@returns {matreshkaArray}
@example
var mkArray = MK.Array.from([1, 2, 3, 4]);
@example
var mkArray = MK.Array.from([1, 2, 3, 4], function(item) {
	return item*2;
}, this);
*/
