/**
@method Seemple.Array#restore
@importance 2
@since 1.3
@fires recreate
@fires modify
@fires add
@fires addone
@summary Restores {@link Seemple.Array} instance from existing HTML nodes on a page.
@desc In case if a collection is pre-rendered on the page (e. g. via webserver), the method can restore the collection from existing HTML nodes.

```html
<!-- One, Two, Three are prerendered -->
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
class MyModel extends Seemple.Object {
	constructor(data) {
		super(data);
		this.addDataKeys('value');
	}
	onRender() {
		this.bindNode('value', ':sandbox', Seemple.binders.html())
	}
});

class MyCollection extends Seemple.Array {
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

If ``selector`` arg isn't passed then the collection will be restored from child nodes that placed in a container (``"container"`` or ``"sandbox"``).

The method fires  ``"render"`` event and calls ``onRender`` and ``onItemRender`` functions (look at the {@link Seemple.Array#onItemRender docs}) for every newly added item similar to {@link Seemple.Array#itemRenderer usual rendering}.

@param {selector} [selector] - A selector
@param {eventOptions} [eventOptions] - An event options
@returns {seempleArray} self
*/
