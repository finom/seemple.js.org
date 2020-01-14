/**
@method Seemple#on
@importance 1
@fires addevent
@fires addevent:NAME
@summary Adds an event handler
@desc The method adds an event handler for an instance of the ``Seemple`` class. Refer to the complete list of possible events with the description here: {@link #typedef-eventNames}.

> Note that the method has {@link Seemple.on static alternative}, which works just the same but accepts any target object as the first argument, shifting rest arguments to the right.
```js
const on = require('seemple/on');
const object = {};
on(object, names, callback, triggerOnInit, context);
// instead of this.on(names, callback, triggerOnInit, context);
```

@see {@link Seemple#onDebounce}
@see {@link Seemple#once}
@see {@link Seemple#off}
@see {@link Seemple#trigger}
@param {eventNames} names - An event name or some names which are separated by a space (for example, ``"change:x ajaxcomplete change:y"``)
@param {eventHandler} callback - A function which is caused by the event
@param {boolean} [triggerOnInit=false] - If ``triggerOnInit`` argument equals ``true``, the handler will be called immediately after event initialization.
@param {object} [context] - A context of the handler. In other words, ``this`` when called ``callback``
@returns {object} self
@example
this.on('foo', () => {
	alert('Custom Event is fired');
});

this.trigger('foo');
@example <caption>Passing a context</caption>
this.on('foo', function() {
	alert(this.a); // 5
}, { a: 5 });

this.trigger('foo', 'Hello world');
@example <caption>Calling a handler immediately after event initialization</caption>
// Displays "bar" at once and waits for a firing of "foo" event
this.on('foo', () => {
	alert('bar');
}, true);
*/


/**
@method Seemple#on
@importance 2
@variation 2
@since 1.1
@summary Alternative syntax: "eventname-handler" pairs
@desc In the {@link Seemple#on} method the object with the key-element pairs can be passed to avoid multiple invocation of the method and reduce your code.

@param {object} evtnameHandlerObject - An object where keys are event names and values are event handlers
@param {boolean} [triggerOnInit=false] - If ``triggerOnInit`` argument  equals ``true``, all handlers will be called immediately after event initialization.
@param {object} [context] - A context of the handler
@returns {object} self

@example
this.on({
	'custom': evt => ...,
	'click::x': evt => ...,
	'change:y': evt => ...,
});
*/
