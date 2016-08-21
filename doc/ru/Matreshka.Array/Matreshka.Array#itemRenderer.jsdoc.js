/**
@member {string|function} Matreshka.Array#itemRenderer
@importance 1
@abstract
@since 0.1
@summary HTML строка, селектор или функция, отвечающая за отрисовку элементов массива на странице
@param {object} item - объект, который будет рендериться (на случай необходимости определения условий для рендеринга разных элементов в разных случаях)
@desc Свойство ``itemRenderer`` - это переопределяемое (виртуальное) свойство, которое позволяет рендерить элементы массива без дополнительного кода. При вставке нового элемента в массив, автоматически создается HTML узел. Этот узел становится песочницей (см. {@link Matreshka#bindNode}) (это поведение можно отменить, см. ниже) для вставленного элемента и встраивается в HTML контейнер, определенный в массиве.

> Для краткости, в примерах к этой статье, будут использоваться синтаксис class fields.

#### Куда вставляется созданный элемент?
Для того, чтобы определить HTML контейнер, в который будут вставляться отрисованные HTML узлы, нужно определить **контейнер**. Для этого следует объявить HTML песочницу для массива либо связать специальный ключ ``container`` с HTML контейнером. Подробнее о привязках и песочнице см. {@link Matreshka#bindNode}.
Пример использования песочницы в качестве контейнера:
```html
<ul class="my-list"></ul>
```
```js
class MyArray extends Matreshka.Array {
	itemRenderer = '<li>';
	Model = MyModel;
	constructor() {
        super();
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
class MyArray extends Matreshka.Array {
	itemRenderer = '<li>';
	Model = MyModel;
	constructor() {
        super();
		// определяем песочницу
		this.bindNode('sandbox', '.my-widget');
		// определяем контейнер для HTML элементов
		this.bindNode('container', '.my-list');
	}
}
```
В примере выше HTML узлы будут вставляться в ``.my-list`` вместо ``.my-widget``.

Свойство ``itemRenderer`` поддерживает несколько вариантов определения, но все они должны содержать или возвращать единственный HTML узел.

#### HTML строка в качестве значения свойства
Как видно из примера выше, ``itemRenderer`` может быть определен, как HTML строка.
```js
class MyArray extends Matreshka.Array {
	Model = MyModel;
	itemRenderer = '<div class="my-div">Be cool</div>';
	constructor() { ... }
}
```
#### Селектор в качестве значения свойства
На случай, если вы выносите шаблоны для элементов на HTML страницу, ``itemRenderer`` поддерживает селектор в качестве значения. В этом случае, {@link Matreshka.Array} будет искать HTML элемент в DOM дереве и извлечет ``innerHTML`` найденого элемента. В случае, если элемент не найден, бросается исключение.

> HTML текст от селектора отличается наличием  символа ``<`` в строке.

```html
<script type="text/html" id="my-template">
	<div class="my-div">Be cool</div>
</script>
```
```js
class MyArray extends Matreshka.Array {
	Model = MyModel;
	itemRenderer = '#my-template';
	constructor() { ... }
}
```
#### Функция в качестве значения свойства
Использование функции в качестве значения свойства ``itemRenderer`` может пригодиться, когда есть нужда динамически генерировать элемент для рендеринга. Функция может возвращать:

**HTML строку**
```js
class MyArray extends Matreshka.Array {
	itemRenderer() {
		return '<div class="my-div">Be cool</div>';
	}
}
```

**Селектор**
```js
class MyArray extends Matreshka.Array {
	itemRenderer: function() {
		return '#my-template';
	}
}
```

**DOM узел**
```js
class MyArray extends Matreshka.Array {
	itemRenderer() {
		return document.createElement('div');
	}
}
```

#### Переопределение родительского рендерера свойством ``render``
Иногда удобно объявлять рендерер внутри класса {@link Matreshka.Array#Model}, а не на уровне коллекции. Свойство ``renderer`` перекрывает значение ``itemRenderer``, если оно задано для элемента коллекции.
```js
class MyModel extends Matreshka.Object {
	renderer = '<div class="my-div">Be cool</div>';
}

class MyArray extends Matreshka.Array {
	Model = MyModel,
	itemRenderer = '<frameset>Not cool</frameset>';
	constructor() { ... }
}
```
В этом случае, можно вовсе не указывать ``itemRenderer``, так как ``render`` дочернего элемента перенимает все его возможности. Синтаксис остаётся такими же: можно использовать HTML, селектор или функцию.

#### Событие ``render`` и ``afterrender``
После того, как объект вставлен в массив, а его HTML узел уже создан, но еще не вставлен в контейнер, генерируется событие ``render`` на вставленном элементе. После его генерации можно объявить привязки свойств к HTML узлам, содержащимся внутри вставленного.

``afterrender``, в свою оередь, генерируется после вставки HTML элемента в контейнер массива.

```html
<form class="my-form"></form>
```
```js
class MyModel extends Matreshka.Object {
	constructor(data) {
		super(data);

		// ждем генерации события
		this.on('render', () => {
            // объявляем байндинги
			this.bindNode('isChecked', ':sandbox .my-checkbox');
			this.bindNode('text', ':sandbox .text',
				Matreshka.binders.html());
		});
	}
});

class MyArray extends Matreshka.Array {
	Model = MyModel;
	itemRenderer = `<label>
		<input type="checkbox" class="my-checkbox">
		<span class="text"></span>
	</label>`;
	constructor() {
        super();
		this.bindNode('sandbox', '.my-form');
		this.push({
			isChecked: true,
			text: 'Buy a raccoon'
		}, {
			isChecked: false,
			text: 'Sell the raccoon'
		});
	}
});

const app = new MyArray();
```
Код выше создаст такое HTML дерево:
```html
<form class="my-form">
	<label>
		<input type="checkbox" class="my-checkbox">
		<span class="text">Buy a raccoon</span>
	</label>
	<label>
		<input type="checkbox" class="my-checkbox">
		<span class="text">Sell the raccoon</span>
	</label>
</form>
```
И свяжет чекбоксы с соответствующими свойствaми ``isChecked`` и ``text``.

Не забывайте, что в Матрешке реализована возможность отлова делегированных событий. Т. е. сам массив может отловить событие рендеринга элемента, используя имя события ``*@render`` (см. документацию к {@link #typedef-eventNames}).
```js
this.on('*@render', () => {
	alert('Child element is rendered');
});
```

> Отрисованный HTML узел становится песочницей для вставленного элемента, позволяя использовать селектор ``:sandbox`` и другие возможности после рендеринга. Если элемент входит сразу в несколько коллекций, установите ему свойство ``bindRenderedAsSandbox: false``, чтобы отменить это поведение.
```js
class MyModel extends Matreshka.Object {
	bindRenderedAsSandbox = false;
	// ...
});
```

===== stopped there

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
