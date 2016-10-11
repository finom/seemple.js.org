/**
@method Matreshka.Array.from
@importance 2
@since 1.1
@summary The function creates a new {@link Matreshka.Array} instance from array-like or iterable object
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from Array.from}
@param {object} arrayLike - Array-like or iterable object
@param {function} [mapFn] - The mapping function which is called for each element of an array
@param {*} [thisArg] - An object which is used as ``this`` on calling ``mapFn``
@returns {matreshkaArray}
@example
const mkArray = Matreshka.Array.from([1, 2, 3, 4]);
@example
const mkArray = Matreshka.Array.from([1, 2, 3, 4], item => item * 2);
@example <caption>Inheritance of the method</caption>
class MyClass extends Matreshka.Array {
    // ...
}

const myArray = MyClass.from([1, 2, 3, 4]);
console.log(myArray instanceof MyClass); // true
*/
