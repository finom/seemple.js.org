/**
@method Seemple.lookForBinder
@module seemple/lookforbinder
@importance 3
@desc Returns a binder corresponding to an element. If it is not found, it returns ``undefined``. The function uses {@link Seemple.defaultBinders} for the search.
@see {@link Seemple#bindNode}
@see {@link Seemple.defaultBinders}
@param {node} node
@returns {binder} binder
@example
const element = document.createElement('input');
element.type = 'text';

console.log(Seemple.lookForBinder(element));

// will return something similar to the following object
{
	on: 'input',
	getValue() {
		return this.value;
	},
	setValue(v) {
		this.value = v;
	}
}
*/
