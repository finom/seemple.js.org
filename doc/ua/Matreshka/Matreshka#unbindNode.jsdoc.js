/**
@method Matreshka#unbindNode
@importance 2
@fires unbind
@fires unbind:KEY
@summary Розриває зв'язок між властивістю і HTML елементом
@desc Використовуючи цей метод, можна видалити доданий раніше, але вже не потрібний зв'язок між властивістю і елементом.
@param {string|null} key - Ключ або список ключів, розділених пробілами. Якщо замість ключа передати null, будуть видалені всі прив'язки для даного об'єкта.
@param {string|node|$nodes} [node] - HTML елемент, з яким властивість більше не хоче мати справи
@param {eventOptions} [eventOptions] - Об'єкт події, в який можна передати якісь дані для обробника або ключ ``"silent"``, який відключає генерацію подій ``"unbind"`` і ``"unbind:KEY"``
@returns {matreshka} self
@example
this.bindNode('myKey', '.my-element');

// Змінює значення властивості і стан HTML елемента
this.myKey = true;

this.unbindNode('myKey', '.my-element');

// Тепер змінюється лише значення властивості
this.myKey = false;
*/


/**
@method Matreshka#unbindNode
@importance 2
@variation 2
@summary Альтернативний синтаксис ``unbindNode``, що дозволяє передати об'єкт з байндінгамі. Див. {@link Matreshka#bindNode(2)}
@param {object} bindings (див. приклад)
@param {eventOptions} [eventOptions] (див. вище)
@returns {matreshka} self
@example
this.unbindNode({
	foo: '.aaa'
	bar: {
		node: '.bbb'
	},
	baz: [{
		node: '.ccc'
	}, {
		node: '.ddd'
	}]
});
*/


/**
@method Matreshka#unbindNode
@importance 2
@variation 3
@summary Альтернативний синтаксис, що дозволяє видалити необмежену кількість байндінгів одним викликом методу.

@desc Варіація методу дозволяє передати масссів об'єктів, що містять інформацію про байндінги. Елемент масиву повинен містити наступні властивості:
- ``key`` - ім'я властивості
- ``node`` - елемент, для якого був об'явлений байндінг з ``key`` (не обов'язково)

Ця варіація методу зручна тим, що її синтаксис збігається з однією з варіацій методу {@link Matreshka#bindNode}, дозволяючи привласнити байндінгі змінної для швидкого видалення.

@param {array} batch - Массив байндингів
@param {eventOptions} [eventOptions]  (див. вище)

@example
const temporaryBindings = [{
	key: 'a',
	node: '.my-node',
	binder: {
		setValue(v) {
			doSomething(v);
		}
	}
}, {
	key: 'b',
	node: document.querySelectorAll('.bar')
	event: {
		foo: 'bar'
	}
}, {
	key: 'c.d.e',
	node: jQuery('.baz'),
	binder: Matreshka.binders.html(),
	event: {
		silent: true,
		exactKey: true
	}
}]

this.bindNode(temporaryBindings);

// більше не потрібні ці прив'язки
this.unbindNode(temporaryBindings);
*/
