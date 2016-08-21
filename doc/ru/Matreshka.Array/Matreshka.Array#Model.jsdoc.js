/**
@method Matreshka.Array#Model
@importance 1
@since 0.2
@abstract
@summary Свойство определяет класс элементов, которые будет содержать коллекция
@desc При каждом добавлении элементов в массив, встроенный обработчик проверяет, является ли добавленный элемент экземпляром ``Model`` и конвертирует его в таковой, если проверка не пройдена. Это поведение очень напоминает поведение свойства ``model`` из ``Backbone.Collection``. Рекомендуется наследовать ``Model`` от класса {@link Matreshka.Object} или {@link Matreshka.Array} (на случай, если требуется получить коллекцию коллекций), чтоб получить возможность конвертации массива в обычный массив методом {@link Matreshka.Array#toJSON}.

Для более гибкого контроля класса элементов (например, если для одних элементов нужно использовать одну Модель, а для других - другую), используйте {@link Matreshka.Array#mediateItem}.

@see {@link Matreshka.Array#mediateItem}
@see {@link Matreshka.Array#itemRenderer}

@param {object} data - Данные, переданные в конструктор
@param {matreshkaArray} mkArray - Массив, в который добавили элемент
@param {number} index - Текущий индекс объекта в родительском массиве


@example
// определяем Модель
var MyModel = MK.Class({
	// она наследуется от MK.Object
	'extends': MK.Object,
	constructor: function(data, parentArray, index) {
		// устанавливаем переданные свойства методом jset
		this.jset(data);
		this.doSomething();
	},
	doSomething: function() { ... }
});

// определяем класс для коллекции
var MyArray = MK.Class({
    'extends': MK.Array,
    Model: MyModel
});

// создаем экземпляр класса
var myArray = new MyArray();

// добавляем два элемента
myArray.push({
    a: 1,
    b: 2
}, {
    a: 3,
    b: 4
})

// вернет [{ a: 1, b: 2 }, { a: 3, b: 4 }]
myArray.toJSON();

@example <caption>``Model`` и ECMAScript 2015</caption>
class MyArray extends MK.Array {
	get Model() {
		return MyModel;
	}
	constructor() { ... }
}

@example <caption>``Model`` и ECMAScript 7</caption>
class MyArray extends MK.Array {
	Model = MyModel;
	constructor() { ... }
}
*/
