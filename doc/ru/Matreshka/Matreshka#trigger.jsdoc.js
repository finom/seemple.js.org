/**
@method Seemple#trigger
@importance 1
@summary Генерирует событие
@desc После добавление обработчиков событий с помощью метода {@link Seemple#on}, {@link Seemple#onDebounce} или {@link Seemple#once}, событие можно генерировать вручную с помощью этого метода.

> Обратите внимание, что у метода есть {@link Seemple.trigger статичный аналог}.

@see {@link Seemple#on}
@see {@link Seemple#once}
@see {@link Seemple#onDebounce}
@see {@link Seemple#off}
@param {eventNames} [names] - Имя события или несколько имен, разделенных пробелом
@param {...*} [arg] - Аргументы, которые будут переданы обработчикам
@returns {object} self
@example
this.on('foo bar', (a, b, c) => {
	alert(a + b + c);
});
this.trigger('bar', 1, 2, 3); // alerts 6
*/
