/**
@class Matreshka.Array
@module matreshka/array
@importance 1
@classdesc Класс ``Matreshka.Array`` служит коллекцией во фреймворке Матрешка. Он наследуется от класса {@link Matreshka}, получая все без исключения возможности родителя. Кроме этого, ``Matreshka.Array`` имеет все методы, которые есть у обычного массива.

#### Все методы, позаимствованные у встроенного Array работают аналогично их оригиналам
Программист, знакомый с методами нативного ``Array`` сразу может понять, каким методом можно добавить элемент (``push``, ``unshift``, ``splice``), каким удалить (``pop``, ``shift``, ``splice``), каким отсортировать (``sort``, ``reverse``) и т. д. Исключением из этого правила является метод ``forEach``, который в оригинальном виде всегда возвращает ``undefined``, а, в случае с {@link Matreshka.Array} возвращает "себя" для возможности цепочечного вызова. По причине того, что методы работают точно так же, как и оригинальные, они не приведены в этой документации по отдельности, а выведены в раздел {@link Matreshka.Array#METHOD}.
```js
this.push(1, 2, 3);
this.pop();
```

#### Все методы, позаимствованные у встроенного Array, которые модифицируют массив могут быть вызваны с передачей объекта события
Для этого используется синтаксис ``метод_``, где нижнее подчеркивание в конце имени метода означает, что последним аргументом является объект события. Такие методы не приведены в этой документации, так как требуется запомнить только их синтаксис. См.  {@link Matreshka.Array#METHOD_}.
```js
this.push_(1, 2, 3, {
	silent: true
});
this.pop_({
	silent: true
});
```

#### Разработчик имеет возможность отлавливать любые модификации данных

__При использовании методов, позаимствованных у встроенного ``Array`` генерируются события с соответствующим именем.__ Вызывая метод ``push``, генерируется событие ``push``, вызывая метод ``pull`` генерируется событие ``pull``, вызывая метод ``sort``, генерируется событие ``sort`` и так далее... Список аргументов можно получить, обратясь к свойству ``args``.
```js
this.on('push', function(evt) {
	console.log(evt.args); // [1,2,3]
});

this.push(1, 2, 3);
```


__При добавлении элементов генерируются события ``add`` и ``addone``.__ Первое генерируется один раз на добавление (например, вы добавили несколько элементов с помощью ``push``, событие вызвалось только один раз), второе генерируется один раз на каждый добавленный элемент. При срабатывании события ``add``, в объект события (свойство ``added``) передается массив добавленных элементов, а при срабатывании ``addone``, в него же передаётся каждый отдельный добавленный элемент.
```js
this.on('add', function(evt) {
	console.log(evt.added); // [1,2,3]
});

this.push(1, 2, 3);
```
```js
// обработчик запустится трижды,
// так как в массив добавили три новых элемента
this.on('addone', function(evt) {
	console.log(evt.added); // 1 ... 2 ... 3
});

this.push(1, 2, 3);
```


__При удалении элементов действует та же логика__: ``remove`` срабатывает один раз, даже если удалено несколько элементов, а событие ``removeone`` срабатывает для каждого удаленного элемента индивидуально. Удаленные элементы содержатся в свойстве ``removed`` объекта события.
```js
this.push(1, 2, 3, 4, 5);

this.on('remove', function(evt) {
	console.log(evt.removed); // [2,3,4]
});

this.splice(1, 3);
```
```js
this.push(1, 2, 3, 4, 5);

// обработчик запустится трижды,
// так как в массив добавили три новых элемента
this.on('removeone', function( evt ) {
	console.log(evt.removed); // 2 ... 3 ... 4
});

this.splice(1, 3);
```
__При каждой модификации массива генерируется событие ``modify``__, позволяя отловить все без исключения изменения в массиве (добавление, удаление, пересортировку).
```js
this.on('modify', function(evt) {
	...
});
```

__``length`` - это обычное свойство__ которое можно связывать с HTML элементом или отлавливать изменения с помощью события ``change:length``.

> Например, при добавлении трех элементов с помощью метода ``push`` с тремя аргументами, генерируются следующие события: ``push``, ``add``, ``addone`` (трижды), ``modify``, ``change:length``.

#### Model
Свойство {@link Matreshka.Array#Model} определяет класс элементов, которые будет содержать коллекция. Его поведение очень напоминает поведение свойства ``model`` из ``Backbone.Collection``. Рекомендуется наследовать ``Model`` от класса {@link Matreshka.Object} или {@link Matreshka.Array} (на случай, если требуется получить коллекцию коллекций), чтоб получить возможность конвертации массива в обычный массив методом {@link Matreshka.Array#toJSON}.
```js
// определяем Модель
var MyModel = MK.Class({
	// она наследуется от MK.Object
	'extends': MK.Object,
	constructor: function(data) {
		// устанавливаем переданные свойства методом jset
		this.jset(data);
	}
});

// определяем класс для коллекции
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel
});

// создаем экземпляр класса
var myArray = new MyArray;

// добавляем два элемента
myArray.push({
	a: 1,
	b: 2
}, {
	a: 3,
	b: 4
})

// вернет [{a: 1, b: 2}, {a: 3, b: 4}]
myArray.toJSON();
```

#### Автоматический рендеринг
``Matreshka.Array`` умеет автоматически отрисовывать элементы на странице **при любых модификациях** массива. Для этого применяется свойство {@link Matreshka.Array#itemRenderer}. Программисту больше не нужно заботиться о перестройке HTML дерева, ``Matreshka.Array`` делает это за него. Ниже пример использования автоматического рендеринга списка.
```html
<ul class="my-list"></ul>
```
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		this.jset(data);

		// ждем события 'render'
		this.on('render', function() {
			// и привязываем свойство 'value'
			// к новосозданному HTML элементу <li>
			this.bindNode('value', ':sandbox', MK.binders.html());
		});
	}
});

var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	// определяем рендерер для каждого элемента коллекции
	itemRenderer: '<li>',
	constructor: function() {
		// создаём песочницу
		this.bindNode('sandbox', '.my-list');
	}
});

var myArray = new MyArray();
myArray.push({
	value: 'Hello'
}, {
	value: 'World'
});
```
За подробностями обратитесь к документации {@link Matreshka.Array#itemRenderer}.

@see {@link Matreshka.Array#itemRenderer}
@see {@link Matreshka.Array#Model}
@see {@link Matreshka#bindNode}

@inherits Matreshka
@example <caption>Создание экземпляра</caption>
new MK.Array();
@example <caption>Создание экземпляра с указанием длины</caption>
new MK.Array(42);
@example <caption>Передача элементов при создании</caption>
new MK.Array('Hi', {a: 'b'});
@example <caption>Наследование</caption>
var MyClass = MK.Class({
	'extends': MK.Array,
	constructor: function() {
		this.sayHello();
	},
	sayHello: function() {
		alert("Hello World!");
	}
});
@example <caption>Наследование, используя синтаксис ECMAScript 2015</caption>
class MyClass extends MK.Array {
	constructor() {
		this.sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Перебор данных, используя цикл for..of из ECMAScript 2015</caption>
var mkArray = new MK.Array(1, 2, 3);
for(let item of mkArray) {
	console.log(item); // 1 .. 2 .. 3
}
@example <caption>Прослушивание событий</caption>
this.on('modify', function(evt) {
	alert('1) Вызван метод ' + evt.method);
});

this.on('shift', function(evt) {
	alert('2) Вызван метод ' + evt.method);
});

this.push(1); // 1) Вызван метод push

this.shift(); // 1) Вызван метод shift, 2) Вызван метод shift

@example <caption>Передача объекта события во встроенный метод ``Array``</caption>
this.on('modify', function(evt) {
	alert(evt.customData);
});

this.push_(1, {
	silent: true // событие не генерируется
});

this.shift_({
	customData: 42 // 42
});
*/
