/**
@method Matreshka.Array.from
@importance 2
@since 1.1
@summary Метод создаёт новый экземпляр {@link Matreshka.Array} из массивоподобного или итерируемого объекта
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from Array.from}
@param {object} arrayLike - Массивоподобный объект.
@param {function} [mapFn] - Отображающая функция, вызываемая для каждого элемента массива.
@param {*} [thisArg] - Объект, который используется в качестве ``this`` при вызове ``mapFn``
@returns {matreshkaArray}
@example
const mkArray = Matreshka.Array.from([1, 2, 3, 4]);
@example
const mkArray = Matreshka.Array.from([1, 2, 3, 4], item => item * 2);
@example <caption>Наследование метода</caption>
class MyClass extends Matreshka.Array {
    // ...
}

const myArray = MyClass.from([1, 2, 3, 4]);
console.log(myArray instanceof MyClass); // true
*/
