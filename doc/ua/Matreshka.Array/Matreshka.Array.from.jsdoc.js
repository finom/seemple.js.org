/**
@method Seemple.Array.from
@importance 2
@since 1.1
@summary Метод створює новий екземпляр {@link Seemple.Array} з масивоподібного або ітеруємого об'єкта
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from Array.from}
@param {object} arrayLike - Массивоподібний або ітеруємий об'єкт
@param {function} [mapFn] - Відображаюча функція, що викликається для кожного елемента масиву
@param {*} [thisArg] - Об'єкт, який використовується в якості ``this`` при виклику ``mapFn``
@returns {seempleArray}
@example
const mkArray = Seemple.Array.from([1, 2, 3, 4]);
@example
const mkArray = Seemple.Array.from([1, 2, 3, 4], item => item * 2);
@example <caption>Спадкування методу</caption>
class MyClass extends Seemple.Array {
    // ...
}

const myArray = MyClass.from([1, 2, 3, 4]);
console.log(myArray instanceof MyClass); // true
*/
