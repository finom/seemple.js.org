/**
@method Matreshka#off
@importance 1
@fires removeevent
@fires removeevent:NAME
@summary Удаляет обработчик события
@desc Удаляет созданный ранее обработчик. Все три аргумента опциональны. Вы можете удалить как все события (не передавая ни одного аргумента), так и отдельные (передав только имя события, передав имя события и обработчик, передав и имя события, и обработчик, и контекст)
@see {@link Matreshka#on}
@see {@link Matreshka#once}
@see {@link Matreshka#onDebounce}
@see {@link Matreshka#trigger}
@param {eventNames} [names] - Разделенный пробелами список имен событий (например, ``"change:x ajaxcomplete change:y"``)
@param {eventHandler} [callback] - Функция-обработчик
@param {object} [context] - Контекст
@returns {matreshka} self
@example
this.off('change:x bind');
@example <caption>Удаление всех событий</caption>
this.off();
@example <caption>Удаление события с определенным обработчиком</caption>
const handler = function() {
	//...
}
this.on('change:x', handler);
this.off('change:x', handler);
@example <caption>Удаление события с определенным контекстом</caption>
const object = {};
this.on('change:x', handler, object);
this.off('change:x', handler, object);
*/
