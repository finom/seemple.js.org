/**
@method Matreshka.Array#onItemRender
@importance 2
@abstract
@since 1.1
@summary Функция, которая запускается перед событием ``render``.
@desc Для улучшения читаемости кода и небольшого выигрыша в скорости, в версии 1.1 появился виртуальный метод ``onItemRender``, который можно использовать в качестве замены события ``render``.

При этом, у отрисованного элемента вызывается метод ``onRender`` с единственным аргументом - объектом события.

@param {matreshka} item - отрисованный элемент коллекции
@param {matreshka} renderEvt - объект события ``render``

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
		// тоже что-то сделать
	}
});

var app = new MyArray();
*/
