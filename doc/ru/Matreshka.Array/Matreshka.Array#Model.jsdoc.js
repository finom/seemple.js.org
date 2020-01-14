/**
@method Seemple.Array#Model
@importance 1
@since 0.2
@abstract
@summary Свойство определяет класс элементов, которые будет содержать коллекция
@desc При каждом добавлении элементов в массив, встроенный обработчик проверяет, является ли добавленный элемент экземпляром ``Model`` и конвертирует его в таковой, если проверка не пройдена. Рекомендуется наследовать ``Model`` от класса {@link Seemple.Object} или {@link Seemple.Array} (на случай, если требуется получить коллекцию коллекций), чтоб получить возможность конвертации массива в обычный массив методом {@link Seemple.Array#toJSON}.

Для более гибкого контроля класса элементов (например, если для одних элементов нужно использовать одну Модель, а для других - другую), используйте {@link Seemple.Array#mediateItem}.

@see {@link Seemple.Array#mediateItem}
@see {@link Seemple.Array#itemRenderer}

@param {object} data - Данные, переданные в конструктор
@param {seempleArray} mkArray - Массив, в который добавили элемент
@param {number} index - Текущий индекс объекта в родительском массиве


@example
// определяем Модель
class MyModel extends Seemple.Object {
	constructor(data, parentArray, index) {
		super(data);
		this.doSomething();
	}
	doSomething() { ... }
}

// определяем класс для коллекции
class MyArray extends Seemple.Array {
	get Model() {
		return MyModel;
	}
}

// создаем экземпляр класса
const myArray = new MyArray();

// добавляем два элемента
myArray.push({
    a: 1,
    b: 2
}, {
    a: 3,
    b: 4
});

console.log(myArray[0] instanceof MyModel); // true
console.log(myArray[1] instanceof MyModel); // true

// вернет [{ a: 1, b: 2 }, { a: 3, b: 4 }]
myArray.toJSON();
*/
