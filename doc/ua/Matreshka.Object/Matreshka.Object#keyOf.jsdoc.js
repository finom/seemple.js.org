/**
@method Seemple.Object#keyOf
@importance 2
@summary Шукає задане значення властивості серед властивостей, що відповідають за дані, і повертає ім'я властивості, якщо таке значення знайдено
@prop {*} value - значення будь-якого типу, яке слід знайти серед даних
@returns {string|null} перше знайдене ім'я властивості
@example
const mkObject = new Seemple.Object({
	a: 1,
	b: 2
});

mkObject.c = 3;

mkObject.keyOf(1); // 'a'

mkObject.keyOf(2); // 'b'

mkObject.keyOf(3); // null
*/
