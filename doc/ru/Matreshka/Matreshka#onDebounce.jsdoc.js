/**
@method Seemple#onDebounce
@importance 2
@fires addevent
@fires addevent:NAME
@summary Добавляет обработчик события, вызываемый лишь однажды за определенный промежуток времени
@desc Метод позволяет добавить обработчик события на экземпляр класса {@link Seemple}, устраняя "дребезжание" обработчика. Функция может быть вызвана лишь один раз за определенный промежуток времени. В остальном, метод работает так же, как и {@link Seemple#on}.

> У метода есть {@link Seemple.onDebounce  статичный аналог}.

@see {@link Seemple#on}
@see {@link Seemple#once}
@see {@link Seemple#off}
@see {@link Seemple#trigger}
@see {@link http://habrahabr.ru/post/60957/ Статья на Хабре о микропаттерне debounce}
@param {eventNames} names - Имя события или несколько имен, разделенных пробелом  (например, ``"change:x ajaxcomplete change:y"``).
@param {eventHandler} callback - Функция, которая вызывается по событию
@param {number} [debounceDelay=0] - Задержка
@param {boolean} [triggerOnInit=false] - Если аргумент ``triggerOnInit`` равен ``true``, то обработчик будет вызван немедленно после инициализации
@param {object} [context] - Контекст обработчика. Другими словами, ``this`` при вызове ``callback``
@returns {object} self
@example
this.onDebounce('change:x', () => {
	alert(`x = ${this.x}`); // x = 100
}, 300);

this.x = 1;

for(let i = 0; i < 100; i++) {
	this.x++;
}
*/


/**
@method Seemple#onDebounce
@importance 2
@variation 2
@since 1.1
@summary Альтернативный синтаксис: пары "событие-обработчик"
@desc В метод {@link Seemple#onDebounce} можно передать объект с парами событие-обработчик, чтобы избежать многократного вызова метода и сократить код.
@see {@link Seemple#on(2)}
@param {object} evtnameHandlerObject - Объект с обработчиками событий
@param {number} [debounceDelay=0] - Задержка
@param {boolean} [triggerOnInit=false] - Если аргумент ``triggerOnInit`` равен ``true``, то обработчики будут вызван немедленно после инициализации
@param {object} [context] - Контекст обработчиков
@returns {object} self
@example
this.onDebounce({
	'custom': evt => { ... },
	'click::x': evt => { ... },
	'change:y': evt => { ... }
});
*/
