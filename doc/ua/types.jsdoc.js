/**
Функція-обробник події. Приймає будь-які аргументи, передані в {@link Matreshka#trigger}
@callback eventHandler
@param {...*} options - будь-які аргументи, передані в виклик {@link Matreshka#trigger} після імені події
@example
const eventHandler = () => {
	console.log(arguments);
};
this.on('fyeah', eventHandler);
this.trigger('fyeah', 'foo', 'bar', 'baz'); // logs 'foo', 'bar', 'baz'
*/


/**
Екземпляр класу {@link Matreshka}
@typedef {object} matreshka
@example
const mk = new Matreshka();
obj.calc('a', 'b');
*/

/**
Екземпляр класу {@link Matreshka.Object}
@typedef {object} matreshkaObject
@example
const obj = new Matreshka.Object({ foo: 'x' });
obj.setData({ bar: 'y' });
*/


/**
Екземпляр класу {@link Matreshka.Array}
@typedef {object} matreshkaArray
@example
const arr = new Matreshka.Array(1, 2, 3);
arr.push(4);
*/


/**
Ім'я події або кілька імен, розділених пробілами.

##### Довільні події
```js
this.on('myevent', () => {...});
this.trigger('myevent');
```

##### ``change:KEY``, що викликається, коли властивість змінюється
```js
this.on('change:x', evt => {...});
this.x = 42;
```

##### ``beforechange:KEY``, що викликається, перед зміною властивості
```js
this.on('beforechange:x', evt => {...});
this.x = 42;
```

##### ``addevent:NAME`` і ``addevent``, що викликаються, коли подія ініціалізується
```js
// для всіх подій
this.on('addevent', evt => {...});
// для події "someevent"
this.on('addevent:someevent', evt => {...});
// генерує події "addevent" та "addevent:someevent"
this.on('someevent', evt => {...});
```

##### ``DOM_EVENT::KEY``, де DOM_EVENT - це им'я DOM події, KEY - ключ. Генерується тоді, коли подія DOM_EVENT спрацьовує на елементі, який пов'язаний з KEY.
```js
this.bindNode('x', '.my-div');
this.on('click::x', evt => {
	alert('clicked ".my-div"');
});
```

##### ``DOM_EVENT::KEY(SELECTOR)``, де DOM_EVENT - це им'я DOM події, KEY - ключ, SELECTOR - селектор. Генерується тоді, коли подія DOM_EVENT спрацьовує на елементі, який відповідає селектору SELECTOR, і знаходиться в елементі, який пов'язаний з властивістю KEY.

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

##### ``DOM_EVENT::(SELECTOR)``, де DOM_EVENT - це ім'я DOM події, SELECTOR - селектор. Генерується тоді, коли подія DOM_EVENT спрацьовує на елементі, який відповідає селектору SELECTOR, і знаходиться в пісочниці поточного об'єкта.
```js
this.bindNode('sandbox', '.my-div');
this.on('click::(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```
Те ж саме, що і:
```js
this.bindNode('sandbox', '.my-div');
this.on('click::sandbox(.my-button)', evt => {
	alert('clicked ".my-button"');
});
```

##### Делеговані події ``PATH@EVENT``, де PATH - це шлях до об'єкта, події якого ми бажаємо прослуховувати, EVENT - це ім'я події.
```js
this.on('a@someevent', () => {...});
this.on('a.b.c@change:d', () => {...});
```

При виникненні необхідності слухати зміни в усіх елементах {@link Matreshka.Array} або у всіх властивостях, що відповідають за дані {@link Matreshka.Object}, замість імені властивості можна вказати зірочку "*".
```js
this.on('*@someevent', () => {...});
this.on('*.b.*.d@change:e', () => {...});
```

#### Різні комбінації
Всі наведені вище варіанти синтаксису можна комбінувати довільним способом.
```js
this.on('x.y.z@click::(.my-selector)', () => {...});
```
@typedef {string} eventNames
*/


/**
``binder`` (байндер, прів'язчик) містить всю інформацію про те, як синхронізувати значення властивості з прив'язаним до нього DOM елементом. Для всіх методів байндера контекст (``this``) - відповідний DOM вузол.
@typedef {object} binder
@property {string|function} [on] - Ім'я DOM події (або список імен подій, розділених пробілами), після спрацювання якогї витягується стан DOM елемента і встановлюється властивість. Крім цього, значенням властивості може бути функція, яка встановлює обробник довільним чином.
@property {function} [getValue] - Функція, яка відповідає за те, як витягти стан DOM елемента
@property {function} [setValue] - Функція, яка відповідає за те, як встановити значення DOM елементу
@property {function} [initialize] - Функція, яка запускається при ініціалізації прив'язки. Наприклад, може бути використана для ініціалізації jQuery плагіна
@property {function} [destroy] - Функція, яка викликається під час роботи ``unbindNode``. Якщо Байндер досить складний, ``destroy`` може містити видалення логіки яка більше не потрібна та звільнення пам'яті
@example
const binder = {
	on: 'click',
	getValue(bindingOptions) {
		return this.value;
	}
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
Об'єкт події
@typedef {object} eventOptions
@desc Це звичайний об'єкт, котрий може містити службові прапори або довільні дані, які потраплять в обробник події
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
Клас створений за допомогою синтаксису ECMAScript 2015 або повернений функцією {@link Matreshka.Class}
@typedef {function} class
@example
class MyClass {
	method() { ... }
};
@example
const MyClass = Matreshka.Class({
	method() { ... }
});
*/


/**
DOM вузол
@typedef node
@example
const node = document.querySelector('.foo');
*/

/**
Колекція DOM вузлів. Наприклад, jQuery або NodeList.
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
Логічний тип
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
Об'єкт
@typedef object
@example
const obj = {
	foo: 'x',
	['bar']: 'y'
};
*/

/**
Масив
@typedef array
@example
const arr = ['foo', undefined, null, () => {}];
*/

/**
Функція
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
Будь-який тип
@typedef *
@example
let whatever = 'foo';
whatever = 42;
*/
