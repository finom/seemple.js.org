/**
@method Seemple.onDebounce
@module seemple/ondebounce
@importance 3
@since 1.1
@summary Adds an event handler which is called only once during a definite period of time
@desc This static method works the same as {@link Seemple#onDebounce} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Seemple#onDebounce}
@example
const object = {};
Seemple.onDebounce(object, 'foo', evt => {
	//...
});
*/
