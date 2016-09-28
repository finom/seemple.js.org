/**
@method Matreshka#on
@importance 1
@fires addevent
@fires addevent:NAME
@summary Додає обробник події
@desc Метод {@link Matreshka#on} додає обробник події для екземпляра класу ``Matreshka``. Повний список можливих подій з описом см. Тут: {@link #typedef-eventNames}.

> Зверніть увагу, що у методва є {@link Matreshka.on статичний аналог}, який працює в точності так само, але приймає будь-який об'єкт в якості першого аргументу, зсуваючи інші аргументи вправо.
```js
const on = require('matreshka/on');
const object = {};
on(object, names, callback, triggerOnInit, context);
// Замість this.on(names, callback, triggerOnInit, context);
```

@see {@link Matreshka#onDebounce}
@see {@link Matreshka#once}
@see {@link Matreshka#off}
@see {@link Matreshka#trigger}
@param {eventNames} names - Ім'я події або кілька імен, розділених пробілом (наприклад, ``"change:x ajaxcomplete change:y"``)
@param {eventHandler} callback - Функція, яка викликається за подією
@param {boolean} [triggerOnInit = false] - Якщо аргумент ``triggerOnInit`` дорівнює ``true``, то обробник буде викликаний негайно після ініціалізації.
@param {object} [context] - Контекст обробника. Іншими словами, ``this`` при виклику ``callback``
@returns {object} self
@example
this.on('foo', () => {
	alert('Custom Event is fired');
});

this.trigger('foo');
@example <caption>Передача контексту</caption>
this.on('foo', function() {
	alert(this.a); // 5
}, { a: 5 });

this.trigger('foo', 'Hello world');
@example <caption>Виклик обробника відразу після ініціалізації</caption>
// Виводить на екран "bar" моментально і чекає на подію "foo"
this.on('foo', () => {
	alert('bar');
}, true);
*/


/**
@method Matreshka#on
@importance 2
@variation 2
@since 1.1
@summary Альтернативний синтаксис: пари "подія-обробник"
@desc У метод {@link Matreshka#on} можна передати об'єкт з парами подія-обробник, щоб уникнути багаторазового виклику методу і скоротити код.

@param {object} evtnameHandlerObject - Об'єкт з подіями
@param {boolean} [triggerOnInit = false] - Якщо аргумент ``triggerOnInit`` дорівнює ``true``, то обробники будуть викликані негайно після ініціалізації
@param {object} [context] - Контекст обробника
@returns {object} self

@example
this.on({
	'custom': evt => ...,
	'click::x': evt => ...,
	'change:y': evt => ...,
});
*/
