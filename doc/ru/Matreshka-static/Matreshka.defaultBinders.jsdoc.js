/**
@member {array} Seemple.defaultBinders
@module seemple/defaultbinders
@importance 2
@enum {function}
@summary Массив функций, возвращающих соответствующий байндер или ``undefined``
@desc ``defaultBinders`` - массив функций, которые по очереди проверяют элемент на соответствие заданным в этих функциях правилам и возвращающих байндер (см. {@link #typedef-binder}). Этот массив используется тогда, когда в метод {@link Seemple#bindNode} не был передан третий аргумент. Подробную информацию о привязках смотрите в документации к {@link Seemple#bindNode}.
@see {@link Seemple#bindNode}
@see {@link Seemple.lookForBinder}
@example

Seemple.defaultBinders.unshift(element => {
	// проверяем, есть ли у элемента класс "foo"
	if(element.classList.contains('foo')) {
		// если проверка пройдена, возвращаем новый байндер
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
