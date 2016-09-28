/**
@method Matreshka#mediate
@importance 2
@since 0.1
@summary Трансформує значення властивості при його зміні
@desc Цей метод використовується для перетворення значення властивості при його зміні. Наприклад, вам потрібно, щоб значення властивості завжди було або певного типу, або цілим числом, або бути не менше нуля і не більше ста тощо.

> Зверніть увагу, що у метода є {@link Matreshka.mediate статичний аналог}, який працює в точності так само, але приймає будь-який об'єкт в якості першого аргументу, зсуваючи інші аргументи вправо.
```js
const mediate = require('matreshka/mediate');
const object = {};
mediate(object, key, mediator);
// Замість this.mediate(key, mediator);
```

@param {string|array} key - Ім'я властивості або масив імен
@param {function} mediator - Функція-посередник (медіатор, mediator), яка повертає нове значення. У неї передаються такі аргументи: нове значення, попереднє значення, ім'я властивості, сам об'єкт
@example
this.mediate('x', value => String(value));
this.x = 1;
alert(typeof this.x); // "string"

@example <caption>Масив ключів</caption>
this.mediate(['x', 'y'], value => String(value));
*/


/**
@method Matreshka#mediate
@importance 2
@variation 2
@since 0.1
@summary Альтернативный синтаксис методу {@link Matreshka#mediate}, приймаючий в якості аргументу об'єкт "ключ-медіатор"
@param {object} keyMediatorPairs - Об'ект із властивостями ключ-медіатор
@example
this.mediate({
	x: String,
	y: Number,
	z: Boolean
});
this.x = 1;
this.y = 2;
this.z = 3;
alert(typeof this.x); // "string"
alert(typeof this.y); // "number"
alert(typeof this.z); // "boolean"
*/
