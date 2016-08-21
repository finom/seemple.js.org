/**
@method Matreshka.Object#jset
@importance 1
@fires change
@fires change:KEY
@fires modify
@summary Устанавливает свойство и добавляет ключ в список ключей, отвечающих за данные
@desc Этот метод делает две вещи:

1\. Устанавливает заданное значение заданному свойству.

2\. Добавляет ключ свойства в список данных, что делает свойство доступным для использования в методах {@link Matreshka.Object#each}, {@link Matreshka.Object#keys}, {@link Matreshka.Object#toJSON}).

В остальном, метод работает так же, как и {@link Matreshka#set}.

@see {@link Matreshka#set}

@param {string} key - Ключ
@param {*} value - Значение
@param {eventOptions} [evtOpts] - Объект события

@returns {matreshkaObject} self

@example
this.jset('a', 1).jset('b', 2);

@example
this.jset('a', 1).jset('b', 2);

// присваиваем свойству 'c' тройку,
// но не добавляем ключ в список ключей, отвечающих за данные
this.set('c', 3);

this.each(function(value, key) {
	console.log(key, value);
});

// выводит 'a' 1 и 'b' 2

console.log(this.keys()); // выводит ['a', 'b']

console.log(this.toJSON()); // выводит {a: 1, b: 2}

@example <caption>После использования  метода {@link Matreshka.Object#jset} со свойством можно работать, как с обычным свойством</caption>
this.jset('a', 1).jset('b', 2);
this.set('a', 3);
this.b = 4;
*/

/**
@method Matreshka.Object#jset
@importance 1
@variation 2
@summary Альтернативный синтаксис метода {@link Matreshka.Object#jset}, который использует объект ключ-значение для установки нескольких свойств сразу
@param {object} keyValuePairs - Объект ключ-значение
@param {eventOptions} evtOpts - Объект события

@returns {matreshkaObject} self

@example
this.jset({
	a: 1,
	b: 2
});
@example <caption>Использование объекта события</caption>
this.jset({
	a: 1,
	b: 2
}, {silent: true});
*/
