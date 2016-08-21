/**
@method Matreshka#trigger
@importance 1
@summary Fires an event
@desc After adding event handlers using {@link Matreshka#on}, {@link Matreshka#onDebounce} or {@link Matreshka#once}, any event can be fired manually using this method.

> Note that the method has {@link Matreshka.trigger static alternative}

@see {@link Matreshka#on}
@see {@link Matreshka#once}
@see {@link Matreshka#onDebounce}
@see {@link Matreshka#off}
@param {eventNames} [names] - An event name or some names which are separated by a space
@param {...*} [arg] - Any arguments which will be passed to every handler
@returns {matreshka} self
@example
this.on('foo bar', (a, b, c) => {
	alert(a + b + c);
});
this.trigger('foo', 1, 2, 3); // alerts 6
*/
