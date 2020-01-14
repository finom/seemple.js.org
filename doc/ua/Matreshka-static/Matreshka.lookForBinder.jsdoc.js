/**
@method Seemple.lookForBinder
@module seemple/lookforbinder
@importance 3
@desc Повертає байндер, відповідний елементу. Якщо байндер не знайдений, повертає ``undefined``. Функція перебирає {@link Seemple.defaultBinders} для пошуку байндера.
@see {@link Seemple#bindNode}
@see {@link Seemple.defaultBinders}
@param {node} node
@returns {binder} binder
@example
const element = document.createElement('input');
element.type = 'text';

console.log(Seemple.lookForBinder(element));

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
