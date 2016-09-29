/**
@method Matreshka.lookForBinder
@module matreshka/lookforbinder
@importance 3
@desc Повертає байндер, відповідний елементу. Якщо байндер не знайдений, повертає ``undefined``. Функція перебирає {@link Matreshka.defaultBinders} для пошуку байндера.
@see {@link Matreshka#bindNode}
@see {@link Matreshka.defaultBinders}
@param {node} node
@returns {binder} binder
@example
const element = document.createElement('input');
element.type = 'text';

console.log(Matreshka.lookForBinder(element));

// поверне приблизно такий об'єкт
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
