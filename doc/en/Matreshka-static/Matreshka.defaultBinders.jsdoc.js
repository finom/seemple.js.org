/**
@member {array} Matreshka.defaultBinders
@module matreshka/defaultbinders
@importance 2
@enum {function}
@summary An array of functions which return a corresponding binder
@desc ``defaultBinders`` is the array of functions which check an element in turn against given rules in these functions and return a binder (see {@link #typedef-binder}). This array is used when the third argument has not been passed to the {@link Matreshka#bindNode} method. See more detailed information about bindings in {@link Matreshka#bindNode} documentation.
@see {@link Matreshka#bindNode}
@see {@link Matreshka.lookForBinder}

@example
Matreshka.defaultBinders.unshift(element => {
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
