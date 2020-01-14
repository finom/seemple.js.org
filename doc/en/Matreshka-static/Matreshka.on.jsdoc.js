/**
@method Seemple.on
@module seemple/on
@importance 3
@since 1.1
@summary Adds an event handler
@desc This static method works the same as {@link Seemple#on} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Seemple#on}
@example
const object = {};
Seemple.on(object, 'foo', evt => {
	alert(evt.hello);
});

Seemple.trigger(object, 'foo', { hello: 'World' });
*/
