/**
@method Matreshka#onDebounce
@importance 2
@fires addevent
@fires addevent:NAME
@summary Adds an event handler which is called only once during a definite period of time
@desc The method allows to add an event handler to an instance of the {@link Matreshka} class, debouncing the handler. Callback function can be called only once during a definite period of time. As to the rest the method works the same as {@link Matreshka#on}.

> The method has {@link Matreshka.onDebounce static alternative}.

@see {@link Matreshka#on}
@see {@link Matreshka#once}
@see {@link Matreshka#off}
@see {@link Matreshka#trigger}
@see {@link http://davidwalsh.name/javascript-debounce-function JavaScript Debounce Function}
@param {eventNames} names - An event name or some names which are separated by a space (for example, ``"change:x ajaxcomplete change:y"``).
@param {eventHandler} callback - A handler which is caused by an event
@param {number} [debounceDelay=0] - A delay
@param {boolean} [triggerOnInit=false] - If ``triggerOnInit`` argument equals ``true``, the handler will be called immediately after event initialization.
@param {object} [context] - A context of a handler. In other words, ``this`` when called ``callback``
@returns {object} self
@example
this.onDebounce('change:x', () => {
	alert(`x = ${this.x}`); // x = 100
}, 300);

this.x = 1;

for(let i = 0; i < 100; i++) {
	this.x++;
}
*/


/**
@method Matreshka#onDebounce
@importance 2
@variation 2
@since 1.1
@summary Alternative syntax: "eventname-handler" pairs
@see {@link Matreshka#on(2)}
@param {object} evtnameHandlerObject - An object where keys are event names and values are event handlers
@param {number} [debounceDelay=0] - A delay
@param {boolean} [triggerOnInit=false] - If ``triggerOnInit`` argument equals ``true``, all handlers will be called immediately after event initialization
@param {object} [context] - A context of the handler
@returns {object} self
@example
this.onDebounce({
	'custom': evt => { ... },
	'click::x': evt => { ... },
	'change:y': evt => { ... }
});
*/
