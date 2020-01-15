/**
@method Seemple.Array.of
@importance 2
@since 1.1
@summary Метод создаёт новый экземпляр {@link Seemple.Array} из произвольного числа агрументов, вне зависимости от числа или типа аргумента
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/of Array.of}
@returns {seempleArray}
@example
const seempleArray = Seemple.Array.of(1, 2, 3, 4);
@example <caption>Наследование метода</caption>
class MyClass extends Seemple.Array {
    // ...
}

const myArray = MyClass.of(1, 2, 3, 4);
console.log(myArray instanceof MyClass); // true
*/
