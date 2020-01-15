/**
Функция-обработчик события. Принимает любые аргументы, переданные в {@link Seemple#trigger}
@callback eventHandler
@param {...*} options - любые аргументы, переданные в вызов {@link Seemple#trigger} после имени события
@example
const eventHandler = (...args) => {
	console.log(args);
};
this.on('fyeah', eventHandler);
// logs 'foo', 'bar', 'baz'
this.trigger('fyeah', 'foo', 'bar', 'baz');
*/


/**
Экземпляр класса {@link Seemple}
@typedef {object} seemple
@example
const seemple = new Seemple();
obj.calc('a', 'b');
*/

/**
Экземпляр класса {@link Seemple.Object}
@typedef {object} seempleObject
@example
const obj = new Seemple.Object({ foo: 'x' });
obj.setData({ bar: 'y' });
*/


/**
Экземпляр класса {@link Seemple.Array}
@typedef {object} seempleArray
@example
const arr = new Seemple.Array(1, 2, 3);
arr.push(4);
*/


/**
Имя события или несколько имен, разделенных пробелами.

> Здесь представлен краткий список событий с небольшими примерами. Для получения полной информации, прочтите [эту статью на Хабре](http://habrahabr.ru/company/seemple/blog/267513/).

##### Произвольные события
```js
this.on('myevent', () => {...});
this.trigger('myevent');
```

##### ``change:KEY``, вызывающееся, когда свойство меняется
```js
this.on('change:x', evt => {...});
this.x = 42;
```

##### ``beforechange:KEY``, вызывающееся перед изменением свойства
```js
this.on('beforechange:x', evt => {...});
this.x = 42;
```

##### ``addevent:NAME`` и ``addevent``, вызывающееся при инициализации события
```js
// для всех событий
this.on('addevent', evt => {...});
// для события "someevent"
this.on('addevent:someevent', evt => {...});
// генерирует события "addevent" и "addevent:someevent"
this.on('someevent', evt => {...});
```

##### ``removeevent:NAME`` и ``removeevent``, вызывающееся при удалении обработчика события
```js
// для всех событий
this.on('removeevent', evt => {...});
// для события "someevent"
this.on('removeevent:someevent', evt => {...});
// генерирует события "removeevent" и "removeevent:someevent"
this.off('someevent', evt => {...});
```

##### ``DOM_EVENT::KEY``, где DOM_EVENT - имя DOM события, KEY - ключ. Генерируется тогда, когда событие DOM_EVENT срабатывает на элементе, который связан с KEY.
```js
this.bindNode('x', '.my-div');
this.on('click::x', evt => {
	alert('clicked ".my-div"');
});
```

##### ``DOM_EVENT::KEY(SELECTOR)``, где DOM_EVENT - имя DOM события, KEY - ключ, SELECTOR - селектор. Генерируется тогда, когда событие DOM_EVENT срабатывает на элементе, который соответствует селектору SELECTOR, и находится в элементе, который связан со свойством KEY.

```html
<div class="my-div">
	<button class="my-button"></button>
</div>
```
```js
this.bindNode('x', '.my-div');
this.on('click::x(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```

##### ``DOM_EVENT::(SELECTOR)``, где DOM_EVENT - имя DOM события, SELECTOR - селектор. Генерируется тогда, когда событие DOM_EVENT срабатывает на элементе, который соответствует селектору SELECTOR, и находится в песочнице текущего объекта.

```js
this.bindNode('sandbox', '.my-div');
this.on('click::(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```
То же самое, что и:
```js
this.bindNode('sandbox', '.my-div');
this.on('click::sandbox(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```

##### Делегированные события ``PATH@EVENT``, где PATH - путь к объекту, события которого мы желаем прослушивать, EVENT - имя события.
```js
this.on('a@someevent', () => {...});
this.on('a.b.c@change:d', () => {...});
```

При возникновении необходимости слушать изменения во всех элементах {@link Seemple.Array} или во всех свойствах, отвечающих за данные {@link Seemple.Object}, вместо имени свойства можно указать звездочку "*".
```js
this.on('*@someevent', () => {...});
this.on('*.b.*.d@change:e', () => {...});
```

#### Всевозможные комбинации
Все приведенные выше варианты синтаксиса можно комбинировать произвольным способом.
```js
this.on('x.y.z@click::(.my-selector)', () => {...});
```
@typedef {string} eventNames
*/


/**
``binder`` (байндер, привязчик) содержит всю информацию о том, как синхронизировать значение свойства с привязанным к нему DOM элементом. Для всех методов байндера контекст (``this``) - соответствующий DOM узел.
@typedef {object} binder
@property {string|function} [on] - Имя DOM события (или список имен событий, разделенных пробелами), после срабатывания которого извлекается состояние DOM элемента и устанавливается свойство. Кроме этого, значением свойства может быть функция, которая устанавливает обработчик произвольным образом.
@property {function} [getValue] - Функция, которая отвечает за то, как извлечь состояние DOM элемента
@property {function} [setValue] - Функция, которая отвечает за то, как установить значение свойства DOM элементу
@property {function} [initialize] - Функция, которая запускается при инициализации привязки. Например, может быть использована для инициализации jQuery плагина.
@property {function} [destroy] - Функция, которая вызывается после вызова метода ``unbindNode``. Если байндер достаточно сложен, ``destroy`` может содержать удаление логики, навешаной байндером
@example
const binder = {
	on: 'click',
	getValue(bindingOptions) {
		return this.value;
	},
	setValue(v, bindingOptions) {
		this.value = v;
	},
	initialize(bindingOptions) {
		alert('A binding is initialized');
	},
	destroy(bindingOptions) {
		alert('A binding is destroyed');
	}
};

this.bindNode('a', '.my-checkbox', binder);
@example
const binder = {
	on(callback, bindingOptions) {
		this.onclick = callback;
	}
	// ...
};
// ...
*/


/**
Объект события
@typedef {object} eventOptions
@desc Это обычный объект, который может содержать служебные флаги или произвольные данные, которые попадут в обработчик события
@example
const eventOptions = { silent: true };

this.a = 1;

this.on('change:a', () => {
	alert('a is changed');
});

this.set('a', 2, eventOptions); // no alert
@example
const eventOptions = { f: 'yeah' };

this.a = 1;

this.on('change:a', eventOptions => {
	alert(eventOptions.f);
});

this.set('a', 2, eventOptions); // alerts "yeah"
*/


/**
Класс созданный при помощи синтаксиса ECMAScript 2015 либо возвращаемый функцией {@link Seemple.Class}
@typedef {function} class
@example
class MyClass {
	method() { ... }
};
@example
const MyClass = Seemple.Class({
	method() { ... }
});
*/


/**
DOM узел
@typedef node
@example
const node = document.querySelector('.foo');
*/

/**
Коллекция DOM узлов. Например, jQuery или NodeList.
@typedef $nodes
@example
let $nodes = $('.foo');
$nodes = document.querySelectorAll('.bar');
*/


/**
Строка
@typedef string
@example
const foo = 'bar';
*/

/**
Логический тип
@typedef boolean
@example
const bool = true;
*/

/**
Число
@typedef number
@example
const num = 42;
*/

/**
Объект
@typedef object
@example
const obj = {
	foo: 'x',
	['bar']: 'y'
};
*/

/**
Массив
@typedef array
@example
const arr = ['foo', undefined, null, () => {}];
*/

/**
Функция
@typedef function
@example
function comeOnBarbieLetsGoParty() {
	alert("I'm a Barbie girl, in a Barbie world");
}
*/

/**
null
@typedef null
@example
const x = null;
*/

/**
Любой тип
@typedef *
@example
let whatever = 'foo';
whatever = 42;
*/
