/**
@method Matreshka#off
@importance 1
@fires removeevent
@fires removeevent:NAME
@summary Видаляє обробник події
@desc Видаляє створений раніше обробник. Всі три аргументи опційні. Ви можете видалити як всі події (не передаючи жодного аргументу), так і окремі (передавши тільки ім'я події, передавши ім'я події і обробник, передавши і ім'я події, і обробник, і контекст)
@see {@link Matreshka#on}
@see {@link Matreshka#once}
@see {@link Matreshka#onDebounce}
@see {@link Matreshka#trigger}
@param {eventNames} [names] - Розділений пробілами список імен подій (наприклад, ``"change:x ajaxcomplete change:y"``)
@param {eventHandler} [callback] - Функція-обробник
@param {object} [context] - Контекст
@returns {matreshka} self
@example
this.off('change:x bind');
@example <caption>Видалення всіх подій</caption>
this.off();
@example <caption>Видалення події з певним обробником</caption>
const handler = function () {
	// ...
}
this.on('change:x', handler);
this.off('change:x', handler);
@example <caption>Видалення події з певним контекстом</caption>
const object = {};
this.on('change:x', handler, object);
this.off('change:x', handler, object);
*/
