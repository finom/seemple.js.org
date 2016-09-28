/**
@method Matreshka#onDebounce
@importance 2
@fires addevent
@fires addevent:NAME
@summary Додає обробник події, що викликається лише одного разу за певний проміжок часу
@desc Метод дозволяє додати обробник події на екземпляр класу {@link Matreshka}, усуваючи "деренчання" обробника. Функція може бути викликана лише один раз за певний проміжок часу. В іншому, метод працює так само, як і {@link Matreshka#on}.

> У метода є {@link Matreshka.onDebounce статичний аналог}.

@see {@link Matreshka#on}
@see {@link Matreshka#once}
@see {@link Matreshka#off}
@see {@link Matreshka#trigger}
@param {eventNames} names -  Ім'я події або кілька імен, розділених пробілом (наприклад, <code>"change:x ajaxcomplete change:y" </code>)
@param {eventHandler} callback - Функція, яка викликається за подією
@param {number} [debounceDelay=0] - Затримка
@param {boolean} [triggerOnInit=false] - Якщо аргумент ``triggerOnInit`` дорівнює ``true``, то обробник буде викликаний негайно після ініціалізації
@param {object} [context] - Контекст обробника
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
@method Matreshka#onDebounce
@importance 2
@variation 2
@since 1.1
@summary Альтернативний синтаксис: пари "подія-обробник"
@desc У метод {@link Matreshka#onDebounce} можна передати об'єкт з парами подія-обробник, щоб уникнути багаторазового виклику методу і скоротити код.
@see {@link Matreshka#on(2)}
@param {object} evtnameHandlerObject - Об'єкт з обробниками подій
@param {number} [debounceDelay=0] - Затримка
@param {boolean} [triggerOnInit=false] - Якщо аргумент ``triggerOnInit`` дорівнює ``true``, то обробники будуть викликаний негайно після ініціалізації
@param {object} [context] - Контекст обробників
@returns {object} self
@example
this.onDebounce({
	'custom': evt => { ... },
	'click::x': evt => { ... },
	'change:y': evt => { ... }
});
*/
