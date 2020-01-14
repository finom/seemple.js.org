/**
@method Seemple.Array#pull
@importance 2
@since 0.1
@fires pull
@fires remove
@fires removeone
@fires modify
@summary Удаляет элемент по индексу или по значению
@param {object|number} indexOrValue - Индекс элемента, который нужно удалить (число) либо удаляемый элемент (объект)
@param {eventOptions} [eventOptions] - Объект события на случай, если нужно передать в обработчик события какие-нибудь данные или установить служебные флаги (например, ``silent``)
@returns {*|null} Удаленный элемент или ``null``
@example <caption>Передача индекса массива</caption>
let removed;

this.recreate(['a', 'b', 'c']);

removed = this.pull(1);

console.log(removed); // 'b'

console.log(this.join(',')); // 'a,c'
@example <caption>Передача удаляемого элемента</caption>
const object1 = {};
const object2 = {};
const object3 = {};
let removed;

this.push(object1, object2, object3);

removed = this.pull(object2);

console.log(removed === object2); // true

console.log(this.length); // 2
*/
