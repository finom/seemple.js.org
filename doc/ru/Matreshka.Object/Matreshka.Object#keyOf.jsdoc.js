/**
@method Matreshka.Object#keyOf
@importance 2
@summary Ищет заданное значение свойства среди свойств, отвечающих за данные, и возвращает имя первого совпавшего свойства, если такое значение найдено
@prop {*} value - значение любого типа, которое следует найти среди данных
@returns {string|null} имя свойства
@example
const mkObject = new Matreshka.Object({
	a: 1,
	b: 2
});

mkObject.c = 3;

mkObject.keyOf(1); // 'a'

mkObject.keyOf(2); // 'b'

mkObject.keyOf(3); // null
*/
