/**
@member {string|function} Matreshka.Array#itemRenderer
@importance 1
@abstract
@since 0.1
@summary HTML string, selector or function which is responsible for rendering DOM nodes of an array on a page.
@param {matreshkaObject} model - An object, which will be rendered (in case you need to use some conditions)
@desc The ``itemRenderer`` overridable property which allows to render corresponded HTML nodes of items of an array without a programmer's participation. On a new item insertion into an array, HTML node is created automatically. This node becomes a sandbox (see. {@link Matreshka#bindNode}) for inserted item and it is inserted into HTML container which is defined in an array.

#### Where is created node inserted?
In order to define HTML container where rendered HTML nodes will be inserted, it is necessary to define a **container**. HTML sandbox should be declared for an array or a special ``container`` key should be bound to the HTML container for that.  Read more detailed information about bindings and sandboxes in {@link Matreshka#bindNode}.
Sandbox usage as a container:
```html
<ul class="my-list"></ul>
```
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	itemRenderer: '<li>',
	Model: MyModel,
	constructor: function() {
		// define a sandbox
		this.bindNode('sandbox', '.my-list');
	}
});
```
Now all newly created ``<li>``  nodes will get into the ``.my-list`` node.

If you do not want to insert HTML nodes straight into the sandbox, you can bind ``container`` property to needed HTML node. This logic is required in case if a sandbox is not limited by collection items alone and it includes other HTML nodes.
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
		// define a sandbox
		this.bindNode('sandbox', '.my-widget');
		// define a container for HTML nodes
		this.bindNode('container', '.my-list');
	}
});
```
In the example above the HTML nodes will be inserted into ``.my-list`` instead of ``.my-widget``.

The ``itemRenderer`` property supports a few variants of defining, but they all must contain or return the only HTML node.

#### HTML string as property value
As you can see from the example above ``itemRenderer`` can be defined as an HTML string.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: '<div class="my-div">Be cool</div>',
	constructor: function() { ... }
});
```

#### A selector as property value
In case if you carry over the templates for the items to the HTML page, ``itemRenderer`` supports the selector as value. When this occurs, {@link Matreshka.Array} will search for HTML node in DOM tree and it will extract ``innerHTML`` of found node. In case if a node is not found, the exception will be thrown.

> HTML string is different from a selector due to the presence of the ``<`` symbol in a string.

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

#### A function as property value
The usage of a function as the ``itemRenderer`` property value gives an additional code flexibility if it is necessary to dynamically generate HTML node for rendering. A function can return:

__HTML string__
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

__A selector__
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

__DOM node__
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	itemRenderer: function() {
		return document.createElement('div');
	}
});
```

#### Parent renderer overriding by the ``render`` property
Sometimes it is convenient to declare a renderer inside a {@link Matreshka.Array#Model model} class as ``Backbone`` does. The ``renderer`` property overrides the ``itemRenderer`` value if it is specified for a child item of a collection.
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	renderer: '<div class="my-div">Be cool</div>',
	constructor: function( data ) { ... }
});

var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: '<frameset>Not cool</frameset>',
	constructor: function() { ... }
});
```
In this case you do not have to designate ``itemRenderer`` at all because ``render`` of a child item adopts all its roles. The syntax remains the same:  HTML string, a selector or a function can be used.

#### The  ``render`` event
After an item has been inserted into an array and its HTML node has already been created but it hasn't been inserted into the container yet, the ``render`` event is fired on inserted item. After its triggering you can declare needed data bindings.

```html
<form class="my-form"></form>
```
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		this.jset(data);

		// wait for the event triggering
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

The code above will create the following HTML tree:

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

And it will bind the checkboxes to the corresponding ``isChecked`` and ``text`` properties. <a href="http://jsbin.com/zetuya/1/" target="_blank">The live example</a>

Remember, the opportunity of catching the delegated events is implemented in Matreshka. The array can catch an event of an item rendering itself, using the ``*@render`` event name (see the documentation of {@link #typedef-eventNames}).
```js
this.on('*@render', function(evt) {
	alert('Child item is rendered');
});
```

> Rendered HTML node becomes a sandbox for inserted item allowing to use the ``:sandbox`` selector and some other possibilities after rendering. If an item enters a few collections at once,  set the ``bindRenderedAsSandbox: false`` property to it so as to cancel this behavior.
```js
var MyModel = MK.Class({
	'extends': MK.Object,
	bindRenderedAsSandbox: false
	// ...
});
```

#### The ``afterrender`` event
After ``render`` event is fired Matreshka starts zero timer ``setTimeout(f, 0)`` which calls ``afterrender`` event. In this way you can get actual information about node position and another data which is available only when DOM node inserted to the ``document``.
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

#### ``onItemRender`` and ``onRender``

To improve the readability of the code and a small gain in performance, version 1.1 presents the new virtual method called {@link Matreshka.Array#onItemRender}, which can be used instead of ``render`` event. As second alternative, the ``onRender`` can be used for a model.

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

#### The template engine
If you have a look at the examples of using {@link Matreshka.Array} and {@link Matreshka.Array#itemRenderer}, you can notice that all logic which is responsible for the two-way and one-way data binding is contained in JavaScript code. It is one of the main Matreshka advantages. But when you develop a very simple collection which does not include complicated logic, lots of bindings, etc, you would like to have a shorter variant of the binding declaration. The template including bindings can be passed to ``itemRenderer`` for that. Starting version 1.1 the template engine is turned on by default.

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
The example above is completely the same as the previous one, but it does not require to create a separate class for the Model as we do not have to catch the ``render`` event and to declare bindings manually. <a href="http://jsbin.com/wabiyi/1/" target="_blank">Live example</a>

The template engine is powered by {@link Matreshka#parseBindings}.

#### The cancellation of rendering.
As is seen from above  if the ``render`` property of the child item is specified, ``Matreshka.Array`` will try to render it. In order to completely cancel rendering for an array, assign ``renderIfPossible: false``.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	renderIfPossible: false,
	// ...
});
```

#### Moving object across few collections
By default, when you add an object to an array the Matreshka will try to render it using ``itemRenderer`` (if it's not rendered yet). It gives a great advantage in cases when you have two or more lists which include the same object. The lists react instantly on any change in the object.

But sometimes you just need to move an object across few collections without re-rendering it again. If you need to move object to another collection including its sandbox use the ``moveSandbox`` flag.

```js
this.push_(item, {
	moveSandbox: true
})
```

#### Reassigning the ``itemRenderer``
Starting version 1.1, when you reassign ``itemRenderer`` a collection rerenders automatically.
```js
this.itemRenderer = '<div class="new-renderer"></div>';
```
This ability allows to load renderer from server.
```js
// jQuery.get example
jQuery.get('templates/template.html', function(data) {
	this.itemRenderer = data;
}.bind(this));

// Fetch API example
fetch('templates/template.html')
	.then(function(resp) {
		return resp.text();
	})
	.then(function(data) {
		this.itemRenderer = data;
	}.bind(this));

// Fetch API + ECMAScript 2015 example
fetch('templates/template.html')
	.then(resp => resp.text())
	.then(data => this.itemRenderer = data);
```

To render the only objects which aren't yet rendered use {@link Matreshka#set} with ``forceRerender: false`` flag.
```js
this.set('itemRenderer', renderer, {forceRerender: false});
```
It's useful when you use server prerendering (look at the {@link Matreshka.Array#restore}) and template needs to be loaded asynchronously.
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

#### Rendering of a collection that contains any kind of object
In the version 1.1, the biggest innovation is native objects support in methods like {@link Matreshka.bindNode}, {@link Matreshka.linkProps}, {@link Matreshka.mediate} and so on. This great opportunity did not spare the collection rendering. That means you no longer need to think about {@link Matreshka.Array#Model} value because array renderer supports any kind of object (including native ones).

```js
var MyArray = MK.Class({
	'extends': MK.Array,
	// Model is not defined
	itemRenderer: ...
	constructor: function() { ... }
	onItemRender: function(item) {
		MK.bindNode(item, 'x', ':sandbox .some-node');
	}
})
```

To make sure that passed items are objects (not null or number etc) you can use native ``Object`` constructor as a model
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	Model: Object,
	itemRenderer: ...,
	constructor: function() { ... }
})
```

One more little example: the rendering of simple list:
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
