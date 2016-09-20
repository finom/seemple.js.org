/**
@method Matreshka#unbindNode
@importance 2
@fires unbind
@fires unbind:KEY
@summary Разрывает связь между свойством и HTML элементом
@desc Используя этот метод, можно удалить недавно добавленную, но уже не нужную связь между свойством и элементом.
@param {string|null} key - Ключ или список ключей, разделенных пробелами. Если вместо ключа передать null, удалятся все привязки для данного экземпляра
@param {string|node|$nodes} [node] - HTML элемент, с которым свойство больше не хочет иметь дела
@param {eventOptions} [eventOptions] -  Объект события, в который можно передать какие-нибудь данные для обработчика или ключ ``"silent"``, который отключает генерацию событий ``"unbind"`` и ``"unbind:KEY"``
@returns {matreshka} self
@example
this.bindNode('myKey', '.my-element');

// меняет значение свойства и состояние HTML элемента
this.myKey = true;

this.unbindNode('myKey', '.my-element');

// теперь меняется только значение свойства
this.myKey = false;
*/


/**
@method Matreshka#unbindNode
@importance 2
@variation 2
@summary Альтернативный синтаксис ``unbindNode``, позволяющий передать объект с байндингами. См. {@link Matreshka#bindNode(2)}
@param {object} bindings (см. пример)
@param {eventOptions} [eventOptions] (см. выше)
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
@summary  Альтернативный синтаксис, позволяющий удалить неограниченное количество байндингов одним вызовом метода.

@desc Вариация метода позволяет передать масссив объектов, содержащих информацию об одном байндинге каждый. Элемент массива должен содержать следующие свойства:
- ``key`` - имя свойства
- ``node`` - элемент, для которого был объявле байндинг с ``key`` (не обязательно)

Эта вариация метода удобна тем, что её синтаксис совпадает с одной из вариаций метода {@link Matreshka#bindNode}, позволяя присвоить  байндинги переменной для быстрого удаления.

@param {array} batch - Массив байндингов
@param {eventOptions} [eventOptions]  (см. выше)

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

// больше не нужны эти привязки
this.unbindNode(temporaryBindings);
*/
