/**
@method Seemple.Array#mediateItem
@importance 2
@since 0.1
@see {@link Seemple.Array#Model}
@see {@link Seemple#mediate}
@summary Трансформує значення елементів масиву
@desc Цей метод служить для того, щоб перехопити і трансформувати додані в масив елементи. Зверніть увагу, метод перевизначає властивість {@link Seemple.Array#Model}.
@param {function} mediator - Функція, що повертає трансформований елемент масиву
@example
// всі елементи масиву - цілі числа
this.mediateItem(item => parseInt(item) || 0);
@example
this.push(1, 2, 3, 4, 5);

// всі елементи масиву - строки
this.mediateItem(String);

this.push(6, 7);

this.unshift(true, {});

// ["true", "[object Object]", "1", "2", "3", "4", "5", "6", "7"]
console.log(mkArray.toJSON());
@example
this.mediateItem(item => {
	if(item.something) {
		return new FirstModel(item);
	} else {
		return new SecondModel(item);
	}
});
*/
