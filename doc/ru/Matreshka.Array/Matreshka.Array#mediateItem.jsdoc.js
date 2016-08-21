/**
@method Matreshka.Array#mediateItem
@importance 2
@since 0.1
@see {@link Matreshka.Array#Model}
@see {@link Matreshka#mediate}
@summary Трансформирует значение элемента при вставке
@desc Этот метод служит для того, чтоб установить типизацию для вставляемых элементов. Обратите внимание, метод переопределяет свойство {@link Matreshka.Array#Model}.
@example
// все элементы массива - числа
this.mediateItem(Number);
@example
this.push(1, 2, 3, 4, 5);

// все элементы массива - строки
this.mediateItem(function(value) {
	return String(value);
});

this.push(6, 7);

this.unshift(true, {});

// ["true", "[object Object]", "1", "2", "3", "4", "5", "6", "7"]
console.log(mkArray.toJSON());
@example <caption>Условная Модель</caption>
this.mediateItem(function(item) {
	if(item.something) {
		return new FirstModel(item);
	} else {
		return new SecondModel(item);
	}
});
*/
