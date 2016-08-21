/**
@member {string|function} Matreshka.Array#itemRenderer
@importance 1
@abstract
@since 0.1
@summary HTML строка, селектор или функция, отвечающая за отрисовку элементов массива на странице
@param {matreshkaObject} model - объект, который будет рендериться (на случай необходимости использования условий для рендеринга разных элементов в разных случаях)
@desc Свойство ``itemRenderer`` - это переопределяемое (виртуальное) свойство, которое позволяет рендерить элементы массива без участия программиста. При вставке нового элемента в массив, автоматически создается HTML узел. Этот узел становится песочницей (см. {@link Matreshka#bindNode}) для вставленного элемента и встраивается в HTML контейнер, определенный в массиве.

#### Куда вставляется созданный элемент?
Для того, чтобы определить HTML контейнер, в который будут вставляться отрисованные HTML узлы, нужно определить **контейнер**. Для этого следует объявить HTML песочницу для массива либо связать специальный ключ ``container`` с HTML контейнером. Подробнее о привязках и песочнице см. {@link Matreshka#bindNode}.
Пример использования песочницы в качестве контейнера:
```html
<ul class="my-list"></ul>
```
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	itemRenderer: '<li>',
	Model: MyModel,
	constructor: function() {
		// определяем песочницу
		this.bindNode('sandbox', '.my-list');
	}
});
```
Теперь все новосозданные узлы ``<li>`` попадут в узел ``.my-list``

Если вы не хотите вставлять HTML узлы непосредственно в песочницу, можете связать ключ ``container`` с необходимым элементом. Такая логика нужна в том случае, если песочница не ограничена одними лишь элементами коллекции и включает в себя другие HTML узлы.
```html
<div class="my-widget">
	<h1>This is my awesome list</h1>
	<ul class="my-list"></ul>
</div>
```
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	itemRenderer: '<li>',
	Model: MyModel,
	constructor: function() {
		// определяем песочницу
		this.bindNode('sandbox', '.my-widget');
		// определяем контейнер для HTML элементов
		this.bindNode('container', '.my-list');
	}
});
```
В примере выше HTML узлы будут вставляться в ``.my-list`` вместо ``.my-widget``.

Свойство ``itemRenderer`` поддерживает несколько вариантов определения, но все они должны содержать или возвращать единственный HTML узел.
#### HTML строка в качестве значения свойства
Как видно из примера выше, ``itemRenderer`` может быть определен, как HTML строка.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: '<div class="my-div">Be cool</div>',
	constructor: function() { ... }
});
```
#### Селектор в качестве значения свойства
На случай, если вы выносите шаблоны для элементов на HTML страницу, ``itemRenderer`` поддерживает селектор в качестве значения. В этом случае, {@link Matreshka.Array} будет искать HTML элемент в DOM дереве и извлечет ``innerHTML`` найденого элемента. В случае, если элемент не найден, бросается исключение. HTML текст от селектора отличается наличием  символа ``<`` в строке.
```html
<script type="text/html" id="be-cool-template">
	<div class="my-div">Be cool</div>
</script>
```
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel
	itemRenderer: '#be-cool-template',
	constructor: function() { ... }
});
```
#### Функция в качестве значения свойства
Использование функции в качестве значения свойства ``itemRenderer`` даёт дополнительную гибкость кода, если есть нужда динамически генерировать элемент для рендеринга. Функция может возвращать:

__HTML строку__
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: function() {
		return '<div class="my-div">Be cool</div>';
	},
	constructor: function() { ... }
});
```

__Селектор__
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: function() {
		return '#be-cool-template';
	},
	constructor: function() { ... }
});
```

__DOM узел__
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	itemRenderer: function() {
		return document.createElement('div');
	}
});
```

__Handlebars.js в качестве шаблонизатора__
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	// model - модель (экземпляр Matreshka.Object), который будет рендериться
	itemRenderer: function(model) {
		// получение и компилирование шаблона
        var template = Handlebars
			.compile($('#handlebarsTemplateSelector').html());
		// подстановка значений модели в шаблон и его возвращение
        return template(model);
	}
});
```

#### Переопределение родительского рендерера свойством ``render``
Иногда удобно объявлять рендерер внутри класса {@link Matreshka.Array#Model}, как это делает ``Backbone``. Свойство ``renderer`` переопределяет значение ``itemRenderer``, если оно задано для дочернего элемента коллекции.
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	renderer: '<div class="my-div">Be cool</div>',
	constructor: function(data) { ... }
});

var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: '<frameset>Not cool</frameset>',
	constructor: function() { ... }
});
```
В этом случае, можно вовсе не указывать ``itemRenderer``, так как ``render`` дочернего элемента перенимает все его возможности. Синтаксис остаётся такими же: можно использовать HTML, селектор или функцию.

#### Событие ``render``
После того, как элемент вставлен в массив, а его HTML узел уже создан, но еще не вставлен в контейнер, генерируется событие ``render`` на вставленном элементе. После его генерации можно объявить привязки свойств к HTML узлам, содержащимся внутри вставленного.
```html
<form class="my-form"></form>
```
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		this.jset(data);

		// ждем генерации события
		this.on('render', function() {
			this.bindNode('isChecked', ':sandbox .my-checkbox');
			this.bindNode('text', ':sandbox .text',
				MK.binders.html());
		});
	}
});

var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: '<label>\
		<input type="checkbox" class="my-checkbox">\
		<span class="text"></span>\
	</label>',
	constructor: function() {
		this.bindNode('sandbox', '.my-form');
		this.push({
			isChecked: true,
			text: 'Be cool'
		}, {
			isChecked: false,
			text: 'Produce shitcode'
		});
	}
});

var app = new MyArray();
```
Код выше создаст такое HTML дерево:
```html
<form class="my-form">
	<label>
		<input type="checkbox" class="my-checkbox">
		<span class="text">Be cool</span>
	</label>
	<label>
		<input type="checkbox" class="my-checkbox">
		<span class="text">Produce shitcode</span>
	</label>
</form>
```
И свяжет чекбоксы с соответствующими свойствaми ``isChecked`` и ``text``. <a href="http://jsbin.com/zetuya/1/" target="_blank">Живой пример</a>

Не забывайте, что в Матрешке реализована возможность отлова всплывающих событий. Т. е. сам массив может отловить событие рендеринга элемента, используя имя события ``*@render`` (см. документацию к {@link #typedef-eventNames}).
```js
this.on('*@render', function(evt) {
	alert('Child element is rendered');
});
```

> Отрисованный HTML узел становится песочницей для вставленного элемента, позволяя использовать селектор ``:sandbox`` и другие возможности после рендеринга. Если элемент входит сразу в несколько коллекций, установите ему свойство ``bindRenderedAsSandbox: false``, чтобы отменить это поведение.
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	bindRenderedAsSandbox: false,
	// ...
});
```

#### Событие ``afterrender``
После срабатывания события ``render`` запускается нулевой таймер (``setTimeout(f, 0)``), вызывающий событие ``afterrender``. Таким образом можно получить актуальные данные о позиции элемента на странице и другую информацию, которая доступна только тогда, когда DOM узел вставлен на страницу.
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		//...
		this.on('afterrender', function() {
			console.log('Computed style', getComputedStyle(this.sandbox));
		});
		//...
	}
});
// ...
```


#### ``onItemRender`` и ``onRender``
Для улучшения читаемости кода и небольшого выигрыша в скорости, в версии 1.1 появился виртуальный метод {@link Matreshka.Array#onItemRender}, который можно использовать вместо события ``render``. В качестве альтернативы, у "моделей" вызывается метод ``onRender``, так же позволяющий сделать код более "плоским" и избавиться от вложенных функций.

```js
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		this.jset(data);
	},
	onRender: function(evt) {
		this.bindNode('isChecked', ':sandbox .my-checkbox');
		this.bindNode('text', ':sandbox .text',
				MK.binders.html());
	}
});

var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: '...`,
	constructor: function() {
		//...
	},
	onItemRender: function(item, evt) {
		//...
	}
});

var app = new MyArray();
```



#### Шаблонизатор
Взглянув на примеры использования {@link Matreshka.Array} и {@link Matreshka.Array#itemRenderer} можно обратить внимание на то, что вся логика, отвечающая за двустороннюю и одностороннюю привязку данных заключена в JavaScript коде. Это одно из главных преимуществ Матрешки. Но когда разрабатываешь очень простую коллекцию, не включающую в себя сложную логику, массу привязок и пр. хотелось бы иметь более краткий вариант объявления привязок. Для этого, в ``itemRenderer`` может быть передан шаблон, включающий привязки. Начиная с версии 1.1, шаблонизатор включен по умолчанию.

```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MK.Object,
	itemRenderer: '<label>\
		<input type="checkbox" checked="&#123;{isChecked}}">&#123;{text}}\
	</label>',
	constructor: function() {
		this.bindNode('sandbox', '.my-form');
		this.push({
			isChecked: true,
			text: 'Be cool'
		}, {
			isChecked: false,
			text: 'Produce shitcode'
		});
	}
});

var app = new MyArray();
```
Пример выше полностью повторяет предыдущий, но не требует создания отдельного класса для Модели, так как нам не требуется отлавливать событие ``render`` и объявлять привязки вручную. <a href="http://jsbin.com/wabiyi/1/" target="_blank">Живой пример</a>

Шаблонизация реализована с помощью метода {@link Matreshka#parseBindings}.


#### Отмена рендеринга
Как видно выше, если у дочернего элемента задано свойство ``render``, ``Matreshka.Array`` попробует его отрисовать. Для того, чтоб полностью отменить рендеринг для массива, присвойте свойству ``renderIfPossible: false``.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	renderIfPossible: false,
	// ...
});
```

#### Перемещение объекта из одного массива в другой
По умолчанию, при вставке объекта в массив Матрешка попытается его отрисовать, используя ``itemRenderer`` (если он еще не был отрисован).  Это даёт огромное преимущество в случаях, когда у вас на странице есть два или более списка, включающих в себя один и тот же объект. При изменении этого объекта, все списки моментально реагируют на изменение, обновляя DOM.

Но иногда стоит задача перемещения объекта между коллекциями, не перерисовывая его заново. Для перемещения объекта из одного массива в другой, включая его песочницу, используйте флаг ``moveSandbox``.
```js
this.push_( item, {
	moveSandbox: true
});
```

#### Переопределение ``itemRenderer``
Начиная с версии 1.1, при переустановке свойства ``itemRenderer``, коллекция автоматически перерисовывается.
```js
this.itemRenderer = '<div>';
```
Эта возможность полезна в том случае, когда разработчик желает загрузить шаблон с сервера.
```js
// пример jQuery.get
jQuery.get('templates/template.html', function(data) {
	this.itemRenderer = data;
}.bind(this));

// пример Fetch API
fetch('templates/template.html')
	.then(function(resp) {
		return resp.text();
	})
	.then(function(data) {
		this.itemRenderer = data;
	}.bind(this));

// пример Fetch API + ECMAScript 2015
fetch('templates/template.html')
	.then(resp => resp.text())
	.then(data => this.itemRenderer = data);
```

Для отрисовки только тех объектов, которые еще не были отрисованы, воспользуйтесь методом {@link Matreshka#set} с флагом ``forceRerender: false``
```js
this.set('itemRenderer', renderer, {forceRerender: false});
```
Такая необходимость может возникнуть тогда, когда вы используете серверный пререндеринг (см. {@link Matreshka.Array#restore}), а шаблон подгружается динамически.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	constructor:  function() {
		this
			.bindNode('sandbox', '.some-node')
			.restore();

		jQuery.get('templates/template.html', function(data) {
			this.set('itemRenderer', data, {forceRerender: false})
		}.bind(this));
	}
});
```

#### Рендеринг коллекции, состоящей из обычных объектов
В версии 1.1 самым большим нововведением фреймворка стала поддержка нативных объектов в методах {@link Matreshka.bindNode}, {@link Matreshka.linkProps}, {@link Matreshka.mediate} и пр. Эта замечательная возможность не обошла стороной и рендеринг. Теперь не обязательно заботиться о том, чтобы элементы, входящие в коллекцию наследовались от класса {@link Matreshka}.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	// Model не определена
	itemRenderer: ...
	onItemRender: function(item) {
		MK.bindNode(item, 'x', ':sandbox .some-node');
	}
})
```

Для того, чтоб удостовериться, что элементы, попадающие в массив - объекты (а не null, number и пр), можно присвоить свойству {@link Matreshka.Array#Model} значение ``Object``, который является встроенным в JavaScript конструктором объектов.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: Object,
	itemRenderer: ...
	constructor: function() {...}
})
```

Еще небольшой пример: рендеринг простого списка:
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	itemRenderer: '<li>{{value}}</li>',
	constructor: function() {
		this.bindNode('sandbox', '.my-list');
	}
});

var arr = new MyArray();
arr.push({value: 'Item 1'}, {value: 'Item 2'});
```

@see {@link Matreshka#bindNode}
@see {@link Matreshka.Array#Model}

@example <caption>ECMAScript 2015</caption>
class MyArray extends MK.Array {
	get itemRenderer() {
		return '<div>';
	},
	constructor() { ... }
}

@example <caption>ECMAScript 7</caption>
class MyArray extends MK.Array {
	itemRenderer = '<div>';
	constructor() { ... }
}
*/
