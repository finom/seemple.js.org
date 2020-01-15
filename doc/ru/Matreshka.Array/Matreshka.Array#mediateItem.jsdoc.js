/**
@method Seemple.Array#mediateItem
@importance 2
@since 0.1
@see {@link Seemple.Array#Model}
@see {@link Seemple#mediate}
@summary Трансформирует значение элементов массива
@desc Этот метод служит для того, чтоб перехватить и трансформировать добавленные в массив элементы. Обратите внимание, метод переопределяет свойство {@link Seemple.Array#Model}.
@param {function} mediator - Функция, возвращающая трансформированный элемент массива
@example
// все элементы массива - целые числа
this.mediateItem(item => parseInt(item) || 0);
@example
this.push(1, 2, 3, 4, 5);

// все элементы массива - строки
this.mediateItem(String);

this.push(6, 7);

this.unshift(true, {});

// ["true", "[object Object]", "1", "2", "3", "4", "5", "6", "7"]
console.log(seempleArray.toJSON());
@example
this.mediateItem(item => {
	if(item.something) {
		return new FirstModel(item);
	} else {
		return new SecondModel(item);
	}
});
*/
