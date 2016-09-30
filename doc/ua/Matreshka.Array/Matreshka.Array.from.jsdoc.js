/**
@method Matreshka.Array.from
@importance 2
@since 1.1
@summary Метод створює новий екземпляр {@link Matreshka.Array} з масивоподібного або ітеруємого об'єкта
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from Array.from}
@param {object} arrayLike - Массивоподібний або ітеруємий об'єкт
@param {function} [mapFn] - Відображаюча функція, що викликається для кожного елемента масиву
@param {*} [thisArg] - Об'єкт, який використовується в якості ``this`` при виклику ``mapFn``
@returns {matreshkaArray}
@example
const mkArray = Matreshka.Array.from([1, 2, 3, 4]);
@example
const mkArray = Matreshka.Array.from([1, 2, 3, 4], item => item * 2);
@example <caption>Спадкування методу</caption>
class MyClass extends Matreshka.Array {
    // ...
}

const myArray = MyClass.from([1, 2, 3, 4]);
console.log(myArray instanceof MyClass); // true
*/
