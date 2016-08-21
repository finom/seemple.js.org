/**
@method Matreshka.Array#restore
@importance 2
@since 1.3
@fires recreate
@fires modify
@fires add
@fires addone
@summary Restores {@link Matreshka.Array} instance from existing HTML nodes on a page.
@desc In case if a collection is pre-rendered on the page (eg via webserver), the method can restore collection from existing HTML nodes.

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

If ``selector`` arg isn't passed then the collection will be restored from child nodes that placed in a container (``"container"`` or ``"sandbox"``).

The method fires  ``"render"`` event and calls ``onRender`` and ``onItemRender`` functions (look at the {@link Matreshka.Array#onItemRender docs}) for every newly added item (similar to {@link Matreshka.Array#itemRenderer usual rendering}).

@param {selector} [selector] - A selector
@param {eventOptions} [eventOptions] - Event object
@returns {matreshkaArray} self
@example
this.restore();
*/
