/**
@method Matreshka.on
@module matreshka/on
@importance 3
@since 1.1
@summary Adds an event handler
@desc This static method works the same as {@link Matreshka#on} and all its variations, but accepts any kind of JavaScript objects as first argument.
@returns {object} The first argument
@see {@link Matreshka#on}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	alert(evt.hello);
});

Matreshka.trigger(object, 'foo', { hello: 'World' });
*/
