/**
@method Matreshka#trigger
@importance 1
@summary Генерує подію
@desc Після додавання обробників подій за допомогою методу {@link Matreshka#on}, {@link Matreshka#onDebounce} або {@link Matreshka#once}, подія може бути сгенерована вручну за допомогою цього методу.

> Зверніть увагу, що у метода є {@link Matreshka.trigger статичний аналог}.

@see {@link Matreshka#on}
@see {@link Matreshka#once}
@see {@link Matreshka#onDebounce}
@see {@link Matreshka#off}
@param {eventNames} [names] - Ім'я події або кілька імен, розділених пробілом
@param {...*} [arg] - Аргументи, які будуть передані обробникам
@returns {object} self
@example
this.on('foo bar', (a, b, c) => {
	alert(a + b + c);
});
this.trigger('bar', 1, 2, 3); // alerts 6
*/
