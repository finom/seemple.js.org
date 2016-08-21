/**
@method Matreshka.Array.of
@importance 2
@since 1.1
@summary The function creates a new {@link Matreshka.Array} instance with a variable number of arguments, regardless of number or type of the arguments.
@see {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/of Array.of}
@returns {matreshkaArray}
@example
const mkArray = Matreshka.Array.of(1, 2, 3, 4);
@example <caption>Inheritance of the method</caption>
class MyClass extends Matreshka.Array {
    // ...
}

const myArray = MyClass.of(1, 2, 3, 4);
console.log(myArray instanceof MyClass); // true
*/
