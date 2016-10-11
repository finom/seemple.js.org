/**
@method Matreshka.trigger
@module matreshka/trigger
@importance 3
@since 1.1
@summary Fires an event
@desc This static method works the same as {@link Matreshka#trigger} and all its variations, but accepts any kind of JavaScript object as first argument.
@returns {object} The first argument
@see {@link Matreshka#trigger}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	alert(evt.hello);
});

Matreshka.trigger(object, 'foo', { hello: 'World' });
*/
