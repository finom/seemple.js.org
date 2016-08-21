/**
@method Matreshka.onDebounce
@module matreshka/ondebounce
@importance 3
@since 1.1
@summary Adds an event handler which is called only once during a definite period of time
@desc This static method works the same as {@link Matreshka#onDebounce} and all its variations, but accepts any kind of JavaScript objects as first argument.
@returns {object} The first argument
@see {@link Matreshka#onDebounce}
@example
const object = {};
Matreshka.onDebounce(object, 'foo', evt => {
	//...
});
*/
