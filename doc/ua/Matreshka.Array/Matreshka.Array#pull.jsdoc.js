/**
@method Seemple.Array#pull
@importance 2
@since 0.1
@fires pull
@fires remove
@fires removeone
@fires modify
@summary Видаляє елемент за індексом або за значенням
@param {object|number} indexOrValue - Індекс елемента, який потрібно видалити або видаляємий об'єкт
@param {eventOptions} [eventOptions] - Об'єкт події на випадок, якщо потрібно передати в обробник події якісь дані або встановити службові прапори (наприклад, ``silent``)
@returns {*|null} Видалений елемент або ``null``
@example <caption>Передача індексу масиву</caption>
let removed;

this.recreate(['a', 'b', 'c']);

removed = this.pull(1);

console.log(removed); // 'b'

console.log(this.join(',')); // 'a,c'
@example <caption>Передача видаляємого об'єкту</caption>
const object1 = {};
const object2 = {};
const object3 = {};
let removed;

this.push(object1, object2, object3);

removed = this.pull(object2);

console.log(removed === object2); // true

console.log(this.length); // 2
*/
