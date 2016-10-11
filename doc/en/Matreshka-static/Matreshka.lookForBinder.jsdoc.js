/**
@method Matreshka.lookForBinder
@module matreshka/lookforbinder
@importance 3
@desc Returns a binder corresponding to an element. If it is not found, it returns ``undefined``. The function uses {@link Matreshka.defaultBinders} for the search.
@see {@link Matreshka#bindNode}
@see {@link Matreshka.defaultBinders}
@param {node} node
@returns {binder} binder
@example
const element = document.createElement('input');
element.type = 'text';

console.log(Matreshka.lookForBinder(element));

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
