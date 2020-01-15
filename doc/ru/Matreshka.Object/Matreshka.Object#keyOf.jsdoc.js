/**
@method Seemple.Object#keyOf
@importance 2
@summary Ищет заданное значение свойства среди свойств, отвечающих за данные, и возвращает имя первого совпавшего свойства, если такое значение найдено
@prop {*} value - значение любого типа, которое следует найти среди данных
@returns {string|null} имя свойства
@example
const seempleObject = new Seemple.Object({
	a: 1,
	b: 2
});

seempleObject.c = 3;

seempleObject.keyOf(1); // 'a'

seempleObject.keyOf(2); // 'b'

seempleObject.keyOf(3); // null
*/
