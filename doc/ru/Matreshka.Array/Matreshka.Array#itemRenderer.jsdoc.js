/**
@member {string|function} Matreshka.Array#itemRenderer
@importance 1
@abstract
@since 0.1
@summary HTML строка, селектор или функция, отвечающая за отрисовку элементов массива на странице
@param {object} item - объект, который будет рендериться (на случай необходимости определения условий для рендеринга разных элементов в разных случаях)
@desc Свойство ``itemRenderer`` - это переопределяемое (виртуальное) свойство, которое позволяет рендерить элементы массива без дополнительного кода. При вставке нового элемента в массив, автоматически создается HTML узел. Этот узел становится песочницей (см. {@link Matreshka#bindNode}) (это поведение можно отменить, см. ниже) для вставленного элемента и встраивается в HTML контейнер, определенный в массиве.

> Для краткости, в примерах к этой статье, будет использоваться синтаксис class fields.

#### Куда вставляется созданный элемент?
Для того, чтобы определить место, в которое будут вставляться отрисованные HTML узлы, нужно определить **контейнер**. Для этого следует объявить HTML песочницу для массива либо связать специальный ключ ``container`` с HTML контейнером. Подробнее о привязках и песочнице см. {@link Matreshka#bindNode}.
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
	itemRenderer = '<div class="my-div">foo</div>';
	constructor() { ... }
}
```
#### Селектор в качестве значения свойства
На случай, если вы выносите шаблоны для элементов на HTML страницу, ``itemRenderer`` поддерживает селектор в качестве значения. В этом случае, {@link Matreshka.Array} будет искать HTML элемент в DOM дереве и извлечет ``innerHTML`` найденого элемента. В случае, если элемент не найден, бросается исключение.

> HTML текст от селектора отличается наличием  символа ``<`` в строке.

```html
<script type="text/html" id="my-template">
	<div class="my-div">foo</div>
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

__HTML строку__
```js
class MyArray extends Matreshka.Array {
	itemRenderer() {
		return '<div class="my-div">foo</div>';
	}
}
```

__Селектор__
```js
class MyArray extends Matreshka.Array {
	itemRenderer: function() {
		return '#my-template';
	}
}
```

__DOM узел__
```js
class MyArray extends Matreshka.Array {
	itemRenderer() {
		return document.createElement('div');
	}
}
```

#### Перекрытие родительского рендерера свойством ``render``
Иногда удобно объявлять рендерер внутри класса {@link Matreshka.Array#Model}, а не на уровне коллекции. Свойство ``renderer`` перекрывает значение ``itemRenderer``, если оно задано для элемента коллекции.
```js
class MyModel extends Matreshka.Object {
	renderer = '<div class="my-div">foo</div>';
}

class MyArray extends Matreshka.Array {
	Model = MyModel,
	itemRenderer = '<frameset>bar</frameset>';
	constructor() { ... }
}
```
В этом случае, можно вовсе не указывать ``itemRenderer``, так как ``render`` дочернего элемента перенимает все его возможности. Синтаксис остаётся такими же: можно использовать HTML, селектор или функцию.

#### Событие ``render`` и ``afterrender``
После того, как объект вставлен в массив, а его HTML узел уже создан, но еще не вставлен в контейнер, генерируется событие ``render`` на вставленном элементе. После его генерации можно объявить привязки свойств к HTML узлам, содержащимся внутри этого элемента.

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

#### ``onItemRender`` и ``onRender``
Для улучшения читаемости кода в одной из предыдущих версий появился виртуальный метод {@link Matreshka.Array#onItemRender}, который можно использовать вместо события ``render``. В качестве альтернативы, у "моделей" вызывается метод ``onRender``, так же позволяющий сделать код более "плоским" и избавиться от вложенных функций.

```js
class MyModel extends Matreshka.Object {
	constructor(data) {
		super(data);
	}
	onRender(evt) {
		this.bindNode('isChecked', ':sandbox .my-checkbox');
		this.bindNode('text', ':sandbox .text',
				Matreshka.binders.html());
	}
}

class MyArray extends Matreshka.Array {
	Model = MyModel;
	itemRenderer = '...';
	constructor() {
		//...
	},
	onItemRender(item, evt) {
		//...
	}
}

const app = new MyArray();
```



#### Шаблонизатор
Взглянув на примеры использования {@link Matreshka.Array} и {@link Matreshka.Array#itemRenderer} можно обратить внимание на то, что вся логика, отвечающая за двустороннюю и одностороннюю привязку данных заключена в JavaScript коде. Но когда разрабатываешь очень простую коллекцию, не включающую в себя сложную логику, массу привязок и пр. хотелось бы иметь более краткий вариант объявления привязок. Для этого, в ``itemRenderer`` может быть передан шаблон, включающий привязки, заключенные в фигурные скобки (см. {@link Matreshka#parseBindings}).

```js
class MyArray extends Matreshka.Array {
	itemRenderer: `<label>
		<input type="checkbox" checked="{{isChecked}}">{{text}}
	</label>`
	// ...
}

var app = new MyArray();
```

#### Отмена рендеринга
Как видно выше, если у дочернего элемента задано свойство ``render``, ``Matreshka.Array`` попробует его отрисовать. Для того, чтоб полностью отменить рендеринг для массива, присвойте свойству массива ``renderIfPossible`` значение ``false``.
```js
class MyArray extends Matreshka.Array {
	renderIfPossible = false;
	// ...
}
```

#### Перемещение объекта из одного массива в другой
По умолчанию, при вставке объекта в массив Матрешка попытается его отрисовать, используя ``itemRenderer``. Это даёт преимущество в случаях, когда у вас на странице есть два или более списка, включающих в себя один и тот же объект. При изменении этого объекта, все списки моментально реагируют на изменение, обновляя DOM.

Но иногда стоит задача перемещения объекта между коллекциями, не перерисовывая его заново. Для перемещения объекта из одного массива в другой, включая его песочницу, используйте флаг ``moveSandbox``.
```js
this.push_(item, {
	moveSandbox: true
});
```

#### Переопределение ``itemRenderer``
При переустановке свойства ``itemRenderer``, коллекция автоматически перерисовывается.
```js
this.itemRenderer = '<div>';
```
Эта возможность полезна в том случае, когда разработчик желает загрузить шаблон с сервера.
```js
fetch('templates/template.html')
	.then(resp => resp.text())
	.then(data => {
		this.itemRenderer = data;
	});
```

Для отрисовки только тех объектов, которые еще не были отрисованы, воспользуйтесь методом {@link Matreshka#set} с флагом ``forceRerender`` со значением  ``false``
```js
this.set('itemRenderer', renderer, {
	forceRerender: false
});
```
Такая необходимость может возникнуть тогда, когда вы используете серверный пререндеринг (см. {@link Matreshka.Array#restore}), а шаблон подгружается динамически.
```js
class MyArray extends Matreshka.Array {
	constructor() {
		super()
			.bindNode('sandbox', '.some-node')
			.restore();

		fetch('templates/template.html')
			.then(resp => resp.text())
			.then(data => {
				this.set('itemRenderer', data, {
					forceRerender: false
				});
			});
	}
}
```

#### Рендеринг коллекции, состоящей из обычных объектов

Объект, входящий в коллекцию, не обязательно должен быть экземпляром ``Matreshka``, можно рендерить любой объект. Байндинги для таких объектов можно объявить используя статичный метод {@link Matreshka.bindNode}.

```js
class MyArray extends Matreshka.Array {
	// Model не определена
	itemRenderer: ...
	onItemRender(item) {
		Matreshka.bindNode(item, 'x', ':sandbox .some-node');
	}
})
```

Еще небольшой пример: рендеринг простого списка.
```js
class MyArray extends Matreshka.Array {
	itemRenderer = '<li>{{value}}</li>';
	constructor() {
		super().bindNode('sandbox', '.my-list');
	}
});

const arr = new MyArray();
arr.push({ value: 'Item 1' }, { value: 'Item 2' });
```

@see {@link Matreshka#bindNode}
@see {@link Matreshka.Array#Model}
*/
