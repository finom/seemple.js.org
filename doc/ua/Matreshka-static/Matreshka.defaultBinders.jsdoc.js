/**
@member {array} Matreshka.defaultBinders
@module matreshka/defaultbinders
@importance 2
@enum {function}
@summary Масив функцій, які повертають відповідний Байндер або ``undefined``
@desc ``defaultBinders`` - масив функцій, які по черзі перевіряють елемент на відповідність заданим в цих функціях правилам і повертають байндер (див. {@link #typedef-binder}). Цей масив використовується тоді, коли в метод {@link Matreshka#bindNode} не був переданий третій аргумент. Детальну інформацію про байндінги дивіться в документації до {@link Matreshka#bindNode}.
@see {@link Matreshka#bindNode}
@see {@link Matreshka.lookForBinder}
@example

Matreshka.defaultBinders.unshift(element => {
	// перевіряємо, чи є у елемента клас "foo"
	if(element.classList.contains('foo')) {
		// якщо перевірка пройдена, повертаємо новий байндер
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
