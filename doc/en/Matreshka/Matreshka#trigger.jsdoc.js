/**
@method Seemple#trigger
@importance 1
@summary Fires an event
@desc After adding event handlers using {@link Seemple#on}, {@link Seemple#onDebounce} or {@link Seemple#once}, any event can be fired manually using this method.

> Note that the method has {@link Seemple.trigger static alternative}

@see {@link Seemple#on}
@see {@link Seemple#once}
@see {@link Seemple#onDebounce}
@see {@link Seemple#off}
@param {eventNames} [names] - An event name or some names which are separated by a space
@param {...*} [arg] - Any arguments which will be passed to every handler
@returns {seemple} self
@example
this.on('foo bar', (a, b, c) => {
	alert(a + b + c);
});
this.trigger('foo', 1, 2, 3); // alerts 6
*/
