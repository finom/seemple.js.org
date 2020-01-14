/**
@method Seemple.instantiate
@module seemple/instantiate
@importance 3
@since 1.1
@summary Creates fixed class instance
@desc This static method works the same as {@link Seemple#instantiate} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Seemple#instantiate}
@example
const object = {};
Seemple.instantiate(object, 'x', SomeClass);
object.x = { a: 42 };
alert(this.x instanceof SomeClass); // true
alert(this.x.a); // 42
*/
