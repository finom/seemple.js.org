/**
@method Matreshka#trigger
@importance 1
@summary Генерирует событие
@desc После добавление обработчиков событий с помощью метода {@link Matreshka#on}, {@link Matreshka#onDebounce} или {@link Matreshka#once}, событие можно генерировать вручную с помощью этого метода.

> Обратите внимание, что у метода есть {@link Matreshka.trigger статичный аналог}.

@see {@link Matreshka#on}
@see {@link Matreshka#once}
@see {@link Matreshka#onDebounce}
@see {@link Matreshka#off}
@param {eventNames} [names] - Имя события или несколько имен, разделенных пробелом
@param {...*} [arg] - Аргументы, которые будут переданы обработчикам
@returns {object} self
@example
this.on('foo bar', (a, b, c) => {
	alert(a + b + c);
});
this.trigger('bar', 1, 2, 3); // alerts 6
*/
