/**
@method Seemple.Array#onItemRender
@importance 2
@abstract
@since 1.1
@summary A function which is called before ``"render"`` event
@desc The virtual method can be used instead of ``"render"`` event handler.

At the same time ``onRender`` method is called in a rendered item with the only argument - an event object.

@param {object} item - A rendered node of a collection
@param {object} renderEvent - ``"render"`` event object

@example
class MyModel extends Seemple.Object {
	constructor(data) {
		super(data);
	}
	onRender(renderEvt) {
		this.bindNode('isChecked', ':sandbox .my-checkbox');
		this.bindNode('text', ':sandbox .text', Seemple.binders.html());
	}
});

class MyArray extends Seemple.Array {
	get Model() {
		return MyModel;
	}
	itemRenderer() {
		return '<li>'
	}
	constructor() {
		this.bindNode('sandbox', '.my-form');
	}
	onItemRender(item, renderEvt) {
		// ...
	}
});

const app = new MyArray();
*/
