/**
@method Matreshka.Array#onItemRender
@importance 2
@abstract
@since 1.1
@summary A function which is launched before ``"render"`` event.
@desc To improve the readability of code and to get a little speed gain, in 1.1 version ``onItemRender`` virtual method has presented which can be used as a substitute for ``"render"`` event.

At the same time ``onRender`` method is called in a rendered element with the only argument - an event object.

@param {matreshka} item - A rendered node of a collection
@param {matreshka} renderEvt - ``"render"`` event object

@example
var MyModel = MK.Class({
	'extends': MK.Object,
	constructor: function(data) {
		this.jset(data);
	},
	onRender: function(renderEvt) {
		this.bindNode('isChecked', ':sandbox .my-checkbox');
		this.bindNode('text', ':sandbox .text', MK.binders.html());
	}
});

var MyArray = MK.Class({
	'extends': MK.Array,
	Model: MyModel,
	itemRenderer: '<li>',
	constructor: function() {
		this.bindNode('sandbox', '.my-form');
	},
	onItemRender: function(item, renderEvt) {
		// also do something
	}
});

var app = new MyArray();
*/
