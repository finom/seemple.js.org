/**
@method Matreshka.Array.from
@importance 2
@since 1.1
@summary The function creates a new {@link Matreshka.Array} instance from array-like object.
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from Array.from}
@param {object} arrayLike - Array-like object.
@param {function} [mapFn] - The mapping function which is called for each element of an array.
@param {*} [thisArg] - An object which is used as ``this`` on calling ``mapFn``
@returns {matreshkaArray}
@example
var mkArray = MK.Array.from([1, 2, 3, 4]);
@example
var mkArray = MK.Array.from([1, 2, 3, 4], function(item) {
	return item*2;
}, this);
*/
