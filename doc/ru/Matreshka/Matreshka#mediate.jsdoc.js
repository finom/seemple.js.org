/**
@method Matreshka#mediate
@importance 2
@since 0.1
@summary Трансформирует значение свойства при его изменении
@desc Этот метод используется для преобразования значения свойства при его изменении. Например, вам нужно, чтоб значение свойства всегда было либо определенного типа, либо целым числом, либо быть не менее нуля и не более ста и т. д.

> Обратите внимание, что у метода есть {@link Matreshka.mediate статичный аналог}, который работает в точности так же, но принимает любой объект в качестве первого аргумента, cдвигая остальные аргументы вправо.
```js
const mediate = require('matreshka/mediate');
const object = {};
mediate(object, key, mediator);
// вместо this.mediate(key, mediator);
```

@param {string|array} key - Имя свойства или массив имен
@param {function} mediator - Функция-посредник (медиатор, mediator), возвращающая новое значение. В неё передаются следующие аргументы: новое значение, предыдущее значение, имя свойства, сам объект
@example
this.mediate('x', value => String(value));
this.x = 1;
alert(typeof this.x); // "string"

@example <caption>Массив ключей</caption>
this.mediate(['x', 'y'], value => String(value));
*/


/**
@method Matreshka#mediate
@importance 2
@variation 2
@since 0.1
@summary Альтернативный синтаксис метода {@link Matreshka#mediate}, принимающий в качестве аргумента объект "ключ-медиатор"
@param {object} keyMediatorPairs - Объект со свойствами ключ-медиатор
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
