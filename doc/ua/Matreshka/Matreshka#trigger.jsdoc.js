/**
@method Seemple#trigger
@importance 1
@summary Генерує подію
@desc Після додавання обробників подій за допомогою методу {@link Seemple#on}, {@link Seemple#onDebounce} або {@link Seemple#once}, подія може бути сгенерована вручну за допомогою цього методу.

> Зверніть увагу, що у метода є {@link Seemple.trigger статичний аналог}.

@see {@link Seemple#on}
@see {@link Seemple#once}
@see {@link Seemple#onDebounce}
@see {@link Seemple#off}
@param {eventNames} [names] - Ім'я події або кілька імен, розділених пробілом
@param {...*} [arg] - Аргументи, які будуть передані обробникам
@returns {object} self
@example
this.on('foo bar', (a, b, c) => {
	alert(a + b + c);
});
this.trigger('bar', 1, 2, 3); // alerts 6
*/
