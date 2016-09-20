/**
@method Matreshka.Object#setData
@synonym Matreshka.Object#jset
@importance 1
@fires change
@fires change:KEY
@fires modify
@fires set
@summary Устанавливает значение свойству и добавляет его имя в список имен, отвечающих за данные
@desc Этот метод делает две вещи:

1. Устанавливает заданное значение заданному свойству.

2. Добавляет ключ свойства в список данных, что делает свойство доступным для использования в методах {@link Matreshka.Object#each}, {@link Matreshka.Object#keys}, {@link Matreshka.Object#toJSON}).

> Если передать флаг ``replaceData``, утановленный как ``true`` объект события, то остальные свойства будут удалены из списка свойств, отвечающих за данные.

В остальном, метод работает так же, как и {@link Matreshka#set}.

@see {@link Matreshka#set}

@param {string} key - Ключ
@param {*} value - Значение
@param {eventOptions} [eventOptions] - Объект события

@returns {matreshkaObject} self

@example
this.setData('a', 1).setData('b', 2);

// присваиваем свойству 'c' тройку,
// но не добавляем ключ 'c' в список ключей, отвечающих за данные
this.set('c', 3);

this.each((value, key) => {
	console.log(key, value);
});

// выводит 'a' 1 и 'b' 2

console.log(this.keys()); // выводит ['a', 'b']

console.log(this.toJSON()); // выводит { a: 1, b: 2 }

@example <caption>После использования  метода ``setData`` со свойством можно работать, как с обычным свойством</caption>
this.setData('a', 1).setData('b', 2);
this.set('a', 3);
this.b = 4;

@example <caption>Использование альтернативного имени метода: ``jset``</caption>
this.jset('a', 1);
*/

/**
@method Matreshka.Object#setData
@importance 1
@variation 2
@summary Альтернативный синтаксис метода {@link Matreshka.Object#setData}, который использует объект ключ-значение для установки нескольких свойств сразу
@param {object} keyValuePairs - Объект ключ-значение
@param {eventOptions} evtOpts - Объект события

@returns {matreshkaObject} self

@example
this.setData({
	a: 1,
	b: 2
});
@example <caption>Если передать флаг ``replaceData``, утановленный как ``true`` в объект события, то свойства, которые не входят в переданный объект, будут удалены из списка свойств, отвечающих за данные</caption>
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
