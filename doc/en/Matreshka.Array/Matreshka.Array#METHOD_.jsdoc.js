/**
@method Seemple.Array#METHOD_
@importance 1
@summary Any method from ``Array.prototype`` with the possibility of passing event object
@desc Having found out more about {@link Seemple.Array#METHOD}, it becomes clear that the methods do not support an event object passing as they exactly duplicate the syntax and the number of arguments of the built-in ``Array``. The ``METHOD_`` syntax allows to pass some data to event handlers.

The list of available flags:
- ``silent`` - disables event triggering
- ``dontRender`` - disables {@link Seemple.Array#itemRenderer rendering}
- ``skipItemMediator`` - disables {@link Seemple.Array#mediateItem mediators} and {@link Seemple.Array#Model models}


@see {@link Seemple.Array#METHOD}
@example
this.push_(1, 2, 3, {
    silent: true
});

this.pop_({
    silent: true
});
@example
this.on('modify', evt => {
	alert(evt.flag); // 42
});

this.push_(1, 2, 3, {
	flag: 42
});
*/
