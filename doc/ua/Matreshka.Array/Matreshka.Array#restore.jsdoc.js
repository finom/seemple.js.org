/**
@method Matreshka.Array#restore
@importance 2
@since 1.3
@fires recreate
@fires modify
@fires add
@fires addone
@summary Відтворює {@link Matreshka.Array} з HTML вузлів на сторінці.
@desc У разі, якщо колекція заздалегідь відмальована на сторінці (наприклад, за допомогою сервера), метод може відтворити колекцію з HTML вузлів.

```html
<!-- One, Two, Three заздалегідь відмальовані -->
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
class MyModel extends Matreshka.Object {
	constructor(data) {
		super(data);
		this.addDataKeys('value');
	}
	onRender() {
		this.bindNode('value', ':sandbox', Matreshka.binders.html())
	}
});

class MyCollection extends Matreshka.Array {
	get itemRenderer() {
		return ':sandbox .renderer';
	}
	constructor() {
		this
			.bindNode('sandbox', '.collection-node')
			.restore(':sandbox li');
	}
});

const myCollection = new MyCollection();
myCollection.push({
	value: 'Four'
});

console.log(myCollection.toJSON());
// [{value: 'One'}, {value: 'Two'}, {value: 'Three'}, {value: 'Four'}]
```

Якщо аргумент ``selector`` не заданий, то колекція буде відтворена з елементів, що входять в контейнер (``"container"`` або ``"sandbox"``).

При відтворенні, на кожному елементі масиву генерується подія ``render`` і викликаються методи ``onRender`` і ``onItemRender`` (див {@link Matreshka.Array#onItemRender документацію}), як і при {@link Matreshka.Array#itemRenderer звичайному рендерингу}.

@param {selector} [selector] - Селектор
@param {eventOptions} [eventOptions] - Об'єкт події
@returns {matreshkaArray} self
*/
