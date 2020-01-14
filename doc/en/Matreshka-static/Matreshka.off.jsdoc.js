/**
@method Seemple.off
@module seemple/off
@importance 3
@since 1.1
@summary Deletes an event handler
@desc This static method works the same as {@link Seemple#off} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Seemple#off}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	//...
});

Seemple.off(object, 'foo');
*/
