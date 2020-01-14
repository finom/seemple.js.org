/**
@method Seemple.set
@module seemple/set
@importance 3
@since 1.1
@summary Sets a property value allowing to pass an event object as the third argument
@desc This static method works the same as {@link Seemple#set} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Seemple#set}
@example
const object = {};
Seemple.set(object, 'x', 42, {
	someOption: true
});
*/
