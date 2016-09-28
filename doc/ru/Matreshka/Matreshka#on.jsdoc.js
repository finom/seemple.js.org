/**
@method Matreshka#on
@importance 1
@fires addevent
@fires addevent:NAME
@summary Добавляет обработчик события
@desc Метод {@link Matreshka#on} добавляет обработчик события для экземпляра класса ``Matreshka``. Полный список возможных событий с описанием см. здесь: {@link #typedef-eventNames}.

> Обратите внимание, что у метода есть {@link Matreshka.on статичный аналог}, который работает в точности так же, но принимает любой объект в качестве первого аргумента, cдвигая остальные аргументы вправо.
```js
const on = require('matreshka/on');
const object = {};
on(object, names, callback, triggerOnInit, context);
// вместо this.on(names, callback, triggerOnInit, context);
```


@see {@link Matreshka#onDebounce}
@see {@link Matreshka#once}
@see {@link Matreshka#off}
@see {@link Matreshka#trigger}
@param {eventNames} names - Имя события или несколько имен, разделенных пробелом  (например, ``"change:x ajaxcomplete change:y"``)
@param {eventHandler} callback - Функция, которая вызывается по событию
@param {boolean} [triggerOnInit=false] - Если аргумент ``triggerOnInit`` равен ``true``, то обработчик будет вызван немедленно после инициализации.
@param {object} [context] - Контекст обработчика. Другими словами, ``this`` при вызове ``callback``
@returns {object} self
@example
this.on('foo', () => {
	alert('Custom Event is fired');
});

this.trigger('foo');
@example <caption>Передача контекста</caption>
this.on('foo', function() {
	alert(this.a); // 5
}, { a: 5 });

this.trigger('foo', 'Hello world');
@example <caption>Вызов обработчика сразу после инициализации</caption>
//Выводит на экран "bar" сиюсекундно и ждет события "foo"
this.on('foo', () => {
	alert('bar');
}, true);
*/


/**
@method Matreshka#on
@importance 2
@variation 2
@since 1.1
@summary Альтернативный синтаксис: пары "событие-обработчик"
@desc В метод {@link Matreshka#on} можно передать объект с парами событие-обработчик, чтобы избежать многократного вызова метода и сократить код.

@param {object} evtnameHandlerObject - Объект с событиями
@param {boolean} [triggerOnInit=false] - Если аргумент ``triggerOnInit`` равен ``true``, то обработчики будут вызван немедленно после инициализации
@param {object} [context] - Контекст обработчика
@returns {object} self

@example
this.on({
	'custom': evt => ...,
	'click::x': evt => ...,
	'change:y': evt => ...,
});
*/
