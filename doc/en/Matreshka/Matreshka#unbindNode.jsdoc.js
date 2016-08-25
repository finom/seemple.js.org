/**
@method Matreshka#unbindNode
@importance 2
@fires unbind
@fires unbind:KEY
@summary Breaks a binding between given property and HTML node.
@desc Using this method you can delete the binding between a property and HTML node, which has been added recently and no longer needed.
@param {string|null} The key or a list of keys which are separated by spaces. If you pass ``null`` instead of the key, all bindings for the given instance will be deleted
@param {string|node|$nodes} [node] - HTML node
@param {eventOptions} [eventOptions] -  Event object (``"silent"`` key disables firing the events ``"unbind"`` and ``"unbind:KEY"``)
@returns {object} self
@example
this.bindNode('myKey', '.my-element');

// changes the property value and the state of the HTML element
this.myKey = true;

this.unbindNode('myKey', '.my-element');

// only the property value is being changed now
this.myKey = false;
*/


/**
@method Matreshka#unbindNode
@importance 2
@variation 2
@summary Alternative syntax which allows to pass an object with bindings to ``unbindNode``. Look at {@link Matreshka#bindNode(2)} for more information
@param {object} bindings (see the example)
@param {eventOptions} [eventOptions] (see above)
@returns {object} self
@example
this.unbindNode({
	foo: '.aaa'
	bar: {
		node: '.bbb'
	},
	baz: [{
		node: '.ccc'
	}, {
		node: '.ddd'
	}]
});
*/


/**
@method Matreshka#unbindNode
@importance 2
@variation 3
@summary Alternative syntax of the method which allows to easily unbind unlimited amount of bindings by single ``unbindNode`` call.

@desc The variation makes possible to pass an array which includes objects with the following properties:

- ``key`` - a property name
- ``node`` - a node bound to ``key`` (optional)

This variation is useful because it matches one variation of {@link Matreshka#bindNode} method, allowing to store bindings in a variable to easily remove them when needed.

@param {array} batch - An array of bindings
@param {eventOptions} [eventOptions] (see above)

@example
const temporaryBindings = [{
	key: 'a',
	node: '.my-node',
	binder: {
		setValue(v) {
			doSomething(v);
		}
	}
}, {
	key: 'b',
	node: document.querySelectorAll('.bar')
	event: {
		foo: 'bar'
	}
}, {
	key: 'c.d.e',
	node: jQuery('.baz'),
	binder: Matreshka.binders.html(),
	event: {
		silent: true,
		exactKey: true
	}
}]

this.bindNode(temporaryBindings);

// these bindings are no longer needed
this.unbindNode(temporaryBindings);
*/
