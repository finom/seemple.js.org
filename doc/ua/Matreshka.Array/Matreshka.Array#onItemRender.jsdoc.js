/**
@method Seemple.Array#onItemRender
@importance 2
@abstract
@since 1.1
@summary Функція, яка запускається перед подією ``render``.
@desc Віртуальний метод ``onItemRender`` можна використовувати в якості заміни події ``render``.

При цьому, у вставленого айтема викликається віртуальний метод ``onRender`` з єдиним аргументом - об'єктом події.

@param {object} item - Елемент колекції
@param {object} renderEvent - Об'єкт події ``render``

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
