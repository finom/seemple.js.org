/**
@method Seemple.chain
@module seemple/chain
@importance 2
@since 2.0
@summary Дозволяє викликати універсальні методи ланцюгом
@desc Функція приймає будь-який об'єкт і повертає екземпляр недоступного ззовні класу, який переймає універсальні методи, дозволяючи їх ланцюговий виклик для роботи з переданим об'єктом.

> Універсальні методи - це такі методи, які одночасно є в прототипі {@link Seemple} і мають статичний аналог (наприклад, {@link Seemple#bindNode} і {@link Seemple.bindNode}).

@param {object|function} object - Об'єкт
@returns {object} Екземпляр недоступного ззовні класу

@example
const object = {};
Seemple.chain(object)
    .calc('a', 'b', b => b * 2)
    .set('b', 3)
    .bindNode('c', '.node');

// те ж саме, що і
// Seemple.calc(object, 'a', 'b', b => b * 2)
// Seemple.set(object, 'b', 3)
// Seemple.bindNode(object, 'c', '.node');
*/
