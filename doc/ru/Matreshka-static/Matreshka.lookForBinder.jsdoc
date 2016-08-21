/**
@method Matreshka.lookForBinder
@module matreshka/lookforbinder
@importance 3
@desc Возвращает байндер, соответствующий элементу. Если таковой не найден, возвращает ``undefined``. Функция перебирает {@link Matreshka.defaultBinders} для поиска байндера.
@see {@link Matreshka#bindNode}
@see {@link Matreshka.defaultBinders}
@param {node} node
@returns {binder} binder
@example
const element = document.createElement('input');
element.type = 'text';

console.log(Matreshka.lookForBinder(element));

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
