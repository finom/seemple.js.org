/**
@method Matreshka.off
@module matreshka/off
@importance 3
@since 1.1
@summary Deletes an event handler
@desc This static method works the same as {@link Matreshka#off} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Matreshka#off}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	//...
});

Matreshka.off(object, 'foo');
*/
