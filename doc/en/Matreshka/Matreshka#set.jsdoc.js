/**
@method Seemple#set
@importance 1
@fires change
@fires change:KEY
@fires beforechange
@fires beforechange:KEY
@summary Sets a property value allowing to pass event options object as the third argument
@desc The list of the supported flags:
+ ``silent`` -  do not call the ``change`` and ``change:KEY`` events
+ ``silentHTML`` - do not change states of bound HTML nodes
+ ``force`` - call the ``change`` and ``change:KEY`` events even though the property value has not been changed
+ ``forceHTML`` - change a state of bound element even though the property value has not been changed. This option is usable if the bound element has been rendered after the binding (for example, some ``option`` tags have been added to ``select`` tag)
+ ``skipMediator`` - prevents the property transformation by a mediator (see {@link Seemple#mediate})
+ ``skipCalc`` - prevents the work of dependencies created with {@link Seemple#calc}

> The method has {@link Seemple.set static alternative}.

@param {string} key - A key
@param {*} value - A value
@param {eventOptions} [eventOptions] - Event options
@example
this.on('change:myKey', evt => {
	alert(evt.value);
});

// the same as this['myKey'] = 3
// or this.myKey = 3
// alerts 3
this.set('myKey', 3);
@example <caption>Using ``eventOptions``</caption>
this.on('change:myKey', evt => {
	alert(evt.value);
});

// handler isn't called
this.set('myKey', 4, {
	silent: true
});

@example <caption>Passing custom data to a handler</caption>
this.on('change:myKey', evt => {
	alert(evt.myCustomFlag);
});

// alerts 42
this.set('myKey', 4, {
	myCustomFlag: 42
});
*/


/**
@method Seemple#set
@variation 2
@summary Alternative "key-value" syntax of the {@link Seemple#set} method
@param {object} keyValuePairs - An object containing key-value pairs
@param {eventOptions} [eventOptions] - An event object
@example
this.set({
	myKey1: 1,
	myKey2: 2
});
@example <caption>Passing  ``eventOptions`` as second argument</caption>
this.set({
	myKey: 3
}, {
	myFlag: 'foo'
});
*/
