/**
@method Seemple.Object#setData
@synonym Seemple.Object#jset
@importance 1
@fires change
@fires change:KEY
@fires modify
@fires set
@summary Встановлює значення властивості і додає його ім'я в список імен властивостей, що відповідають за дані
@desc Цей метод робить дві речі:

1. Встановлює значення заданої властивості.

2. Додає ключ властивості в список даних, що робить властивість доступною для використання в методах {@link Seemple.Object#each}, {@link Seemple.Object#keys}, {@link Seemple.Object#toJSON}) та інших.

> Якщо передати прапор ``replaceData``, встановлений як ``true``, в об'єкт події, то інші властивості будуть вилучені зі списку властивостей, що відповідають за дані.

В іншому, метод працює так само, як і {@link Seemple#set}.
@see {@link Seemple#set}

@param {string} key - Ключ
@param {*} value - Значення
@param {eventOptions} [eventOptions] - Об'єкт події

@returns {seempleObject} self

@example
this.setData('a', 1).setData('b', 2);

// Присвоювання властивості 'c' трійку,
// але не додаємо ключ 'c' в список ключів, що відповідають за дані
this.set('c', 3);

this.each((value, key) => {
	console.log(key, value);
});

// виводить 'a' 1 і 'b' 2

console.log(this.keys()); // виводить ['a', 'b']

console.log(this.toJSON()); // виводить { a: 1, b: 2 }

@example <caption>Після використання методу ``setData`` з властивістю можна працювати, як із звичайною властивістю</caption>
this.setData('a', 1).setData('b', 2);
this.set('a', 3);
this.b = 4;

@example <caption>Використання альтернативного імені методу: ``jset``</caption>
this.jset('a', 1);
*/

/**
@method Seemple.Object#setData
@importance 1
@variation 2
@summary Альтернативний синтаксис методу {@link Seemple.Object#setData}, який приймає об'єкт ключ-значення для встановлення декількох властивостей одночасно
@param {object} keyValuePairs - Об'єкт ключ-значення
@param {eventOptions} evtOpts - Об'єкт події

@returns {seempleObject} self

@example
this.setData({
	a: 1,
	b: 2
});
@example <caption>Якщо передати прапор ``replaceData``, встановлений як ``true`` в об'єкт події, то властивості, які не входять до переданого об'єкту, будуть вилучені зі списку властивостей, що відповідають за дані</caption>
this
	.addDataKeys(['a', 'b', 'c'])
	.setData({
		a: 1,
		b: 2
	}, {
		replaceData: true
	});

console.log(this.keys()); // ['a', 'b']

*/
