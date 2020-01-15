/**
@method Seemple.Array.of
@importance 2
@since 1.1
@summary Метод створює новий екземпляр {@link Seemple.Array} з довільного числа агрумент, незалежно від числа або типу аргументів
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/of Array.of}
@returns {seempleArray}
@example
const seempleArray = Seemple.Array.of(1, 2, 3, 4);
@example <caption>Спадкування методу</caption>
class MyClass extends Seemple.Array {
    // ...
}

const myArray = MyClass.of(1, 2, 3, 4);
console.log(myArray instanceof MyClass); // true
*/
