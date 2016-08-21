/**
@method Matreshka.Array#restore
@importance 2
@since 1.3
@fires recreate
@fires modify
@fires add
@fires addone
@summary Воссоздаёт {@link Matreshka.Array} из HTML узлов на странице.
@desc В случае, если коллекция заранее отрисована на странице (например, с помощью сервера), метод может воссоздать коллекцию из отрендеренных HTML узлов.

```html
<!-- One, Two, Three заранее отрисованы -->
<ul class="collection-node">
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
	<script type="text/html" class="renderer">
		<li></li>
	</script>
</ul>
```

```js
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		this.addDataKeys('value');
		this.set(data);
	},
	onRender: function() {
		this.bindNode('value', ':sandbox', MK.binders.html())
	}
});

var MyCollection = MK.Class({
	'extends': MK.Array,
	itemRenderer: ':sandbox .renderer',
	constructor: function() {
		this
			.bindNode('sandbox', '.collection-node')
			.restore(':sandbox li');
	}
});

var myCollection = new MyCollection();
myCollection.push({
	value: 'Four'
});

console.log(myCollection.toJSON());
// [{value: 'One'}, {value: 'Two'}, {value: 'Three'}, {value: 'Four'}]
```

Если аргумент ``selector`` не задан, то коллекция будет воссоздана из элементов, входящих в контейнер (``"container"`` или ``"sandbox"``).

При воссоздании, на каждом элементе массива генерируется событие ``render`` и вызываются методы ``onRender`` и ``onItemRender`` (см {@link Matreshka.Array#onItemRender документацию}), как и при {@link Matreshka.Array#itemRenderer обычном рендеринге}.

@param {selector} [selector] - Селектор
@param {eventOptions} [eventOptions] - Объект события
@returns {matreshkaArray} self
@example
this.restore();
*/
