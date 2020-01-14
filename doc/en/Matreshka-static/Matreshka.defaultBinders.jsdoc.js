/**
@member {array} Seemple.defaultBinders
@module seemple/defaultbinders
@importance 2
@enum {function}
@summary An array of functions which return a corresponding binder
@desc ``defaultBinders`` is the array of functions which check an element in turn against given rules in these functions and return a binder (see {@link #typedef-binder}). This array is used when the third argument has not been passed to the {@link Seemple#bindNode} method. See more detailed information about bindings in {@link Seemple#bindNode} documentation.
@see {@link Seemple#bindNode}
@see {@link Seemple.lookForBinder}

@example
Seemple.defaultBinders.unshift(element => {
	// check if the element has "foo" class name
	if(element.classList.contains('foo')) {
		// if checking is OK, return a new binder
		return {
			on: ...,
			getValue: ...,
			setValue: ...
		};
	}
});

// ...

this.bindNode('myKey', '.foo.bar');
*/
