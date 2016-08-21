/**
@method Matreshka.calc
@module matreshka/calc
@importance 3
@since 1.1
@summary Creates a dependency of one property value on values of others
@desc This static method works the same as {@link Matreshka#calc} and all its variations, but accepts any kind of JavaScript objects as first argument.
@returns {object} The first argument
@see {@link Matreshka#calc}
@example
const object = {};
object.a = 40;
object.b = 2;
Matreshka.calc(object, 'sum', ['a', 'b'], (a, b) => a + b);
alert(object.sum); // 42
*/
