/**
@method Matreshka#once
@importance 2
@fires addevent
@fires addevent:NAME
@summary Добавляет обработчик событий, который может быть вызван однажды
@desc Метод работает так же, как и {@link Matreshka#on} но передаваемый обработчик может быть вызван только один раз.

> Обратите внимание, что у метода есть {@link Matreshka.once статичный аналог}

@see {@link Matreshka#on}
@see {@link Matreshka#off}
@see {@link Matreshka#onDebounce}
@see {@link Matreshka#trigger}
@param {eventNames} names - Имя события или несколько имен, разделенных пробелом (например, <code>"change:x ajaxcomplete change:y"</code>)
@param {eventHandler} callback - Функция, которая вызывается по событию
@param {object} [context] - Контекст обработчика
@returns {object} self
@example
this.x = 1;

this.once('change:x', () => {
	alert('x is changed');
});

this.x = 2; // выводит 'x is changed'

this.x = 3; // ничего не делает
*/


/**
@method Matreshka#once
@importance 2
@variation 2
@since 1.1
@summary Альтернативный синтаксис: пары "событие-обработчик"
@desc В метод {@link Matreshka#once} можно передать объект с парами событие-обработчик, чтобы избежать многократного вызова метода и сократить код.
@see {@link Matreshka#on(2)}
@param {object} evtnameHandlerObject - Объект с событиями
@param {object} [context] - Контекст обработчиков
@returns {object} self
@example
this.once({
	'custom': evt => { ... },
	'click::x': evt => { ... },
	'change:y': evt => { ... }
});
*/
