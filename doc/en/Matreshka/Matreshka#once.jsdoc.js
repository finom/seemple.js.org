/**
@method Seemple#once
@importance 2
@fires addevent
@fires addevent:NAME
@summary Adds an event handler which can be called only once
@desc The method works the same as {@link Seemple#on} but the passing handler can be called only once.

> Note that the method has {@link Seemple.once static alternative}

@see {@link Seemple#on}
@see {@link Seemple#off}
@see {@link Seemple#onDebounce}
@see {@link Seemple#trigger}
@param {eventNames} names - An event name or some names which are separated by a space (for example, ``"change:x ajaxcomplete change:y"``)
@param {eventHandler} callback - A handler which is caused by an event
@param {object} [context] - A context of a handler
@returns {object} self
@example
this.x = 1;

this.once('change:x', () => {
	alert('x is changed');
});

this.x = 2; // displays 'x is changed'

this.x = 3; // does nothing
*/


/**
@method Seemple#once
@importance 2
@variation 2
@since 1.1
@summary Alternative syntax: "eventname-handler" pairs
@see {@link Seemple#on(2)}
@param {object} evtnameHandlerObject - An object where keys are event names and values are event handlers
@param {object} [context] - A context of a handler
@returns {object} self
@example
this.once({
	'custom': evt => { ... },
	'click::x': evt => { ... },
	'change:y': evt => { ... }
});
*/
