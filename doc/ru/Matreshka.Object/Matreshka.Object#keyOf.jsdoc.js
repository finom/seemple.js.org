/**
@method Matreshka.Object#keyOf
@importance 2
@summary Ищет заданное значение свойства среди свойств, отвечающих за данные, и возвращает ключ, если такое значение найдено  (аналог <code>Array.prototype.indexOf</code>)
@prop {*} value - значение любого типа, которое следует найти среди данных
@returns {string|null}
@example
var mkObject = new MK.Object({
	a: 1,
	b: 2
});

mkObject.keyOf(1); // 'a'

mkObject.keyOf(2); // 'b'

mkObject.keyOf(3); // null
*/
