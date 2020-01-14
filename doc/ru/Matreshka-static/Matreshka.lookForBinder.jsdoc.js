/**
@method Seemple.lookForBinder
@module seemple/lookforbinder
@importance 3
@desc Возвращает байндер, соответствующий элементу. Если таковой не найден, возвращает ``undefined``. Функция перебирает {@link Seemple.defaultBinders} для поиска байндера.
@see {@link Seemple#bindNode}
@see {@link Seemple.defaultBinders}
@param {node} node
@returns {binder} binder
@example
const element = document.createElement('input');
element.type = 'text';

console.log(Seemple.lookForBinder(element));

// вернет примерно такой объект
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
