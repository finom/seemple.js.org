/**
@method Seemple.Array.from
@importance 2
@since 1.1
@summary Метод создаёт новый экземпляр {@link Seemple.Array} из массивоподобного или итерируемого объекта
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from Array.from}
@param {object} arrayLike - Массивоподобный или итерируемый объект
@param {function} [mapFn] - Отображающая функция, вызываемая для каждого элемента массива
@param {*} [thisArg] - Объект, который используется в качестве ``this`` при вызове ``mapFn``
@returns {seempleArray}
@example
const mkArray = Seemple.Array.from([1, 2, 3, 4]);
@example
const mkArray = Seemple.Array.from([1, 2, 3, 4], item => item * 2);
@example <caption>Наследование метода</caption>
class MyClass extends Seemple.Array {
    // ...
}

const myArray = MyClass.from([1, 2, 3, 4]);
console.log(myArray instanceof MyClass); // true
*/
