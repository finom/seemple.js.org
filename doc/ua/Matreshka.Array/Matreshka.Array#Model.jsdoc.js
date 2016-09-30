/**
@method Matreshka.Array#Model
@importance 1
@since 0.2
@abstract
@summary Властивість визначає клас елементів, які буде містити колекція
@desc При кожному додаванні елементів в масив, вбудований обробник перевіряє, чи є доданий елемент екземпляром ``Model`` і конвертує його в такий, якщо перевірка не пройдена. Рекомендується наслідувати ``Model`` від класу {@link Matreshka.Object} або {@link Matreshka.Array} (на випадок, якщо потрібно отримати колекцію колекцій), щоб отримати можливість конвертації масиву в звичайний масив методом {@link Matreshka.Array#toJSON}.

Для більш гнучкого контролю класу елементів (наприклад, якщо для одних елементів потрібно використовувати одну "модель", а для інших - іншу), використовуйте {@link Matreshka.Array#mediateItem}.

@see {@link Matreshka.Array#mediateItem}
@see {@link Matreshka.Array#itemRenderer}

@param {object} data - Дані, передані в конструктор
@param {matreshkaArray} mkArray - Масив, в який додали елемент
@param {number} index - Поточний індекс об'єкта в батьківському масиві

@example
// визначаємо "модель"
class MyModel extends Matreshka.Object {
	constructor(data, parentArray, index) {
		super(data);
		this.doSomething();
	}
	doSomething() { ... }
}

// визначаємо клас для колекції
class MyArray extends Matreshka.Array {
	get Model() {
		return MyModel;
	}
}

// створюємо екземпляр класу
const myArray = new MyArray();

// додаємо два елементи
myArray.push({
    a: 1,
    b: 2
}, {
    a: 3,
    b: 4
});

console.log(myArray[0] instanceof MyModel); // true
console.log(myArray[1] instanceof MyModel); // true

// поверне [{ a: 1, b: 2 }, { a: 3, b: 4 }]
myArray.toJSON();
*/
