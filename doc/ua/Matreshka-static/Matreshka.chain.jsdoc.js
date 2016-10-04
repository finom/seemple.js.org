/**
@method Matreshka.chain
@module matreshka/chain
@importance 2
@since 2.0
@summary Дозволяє викликати універсальні методи ланцюгом
@desc Функція приймає будь-який об'єкт і повертає екземпляр недоступного ззовні класу, який переймає універсальні методи, дозволяючи їх ланцюговий виклик для роботи з переданим об'єктом.

> Універсальні методи - це такі методи, які одночасно є в прототипі {@link Matreshka} і мають статичний аналог (наприклад, {@link Matreshka#bindNode} і {@link Matreshka.bindNode}).

@param {object|function} object - Об'єкт
@returns {object} Екземпляр недоступного ззовні класу

@example
const object = {};
Matreshka.chain(object)
    .calc('a', 'b', b => b * 2)
    .set('b', 3)
    .bindNode('c', '.node');

// те ж саме, що і
// Matreshka.calc(object, 'a', 'b', b => b * 2)
// Matreshka.set(object, 'b', 3)
// Matreshka.bindNode(object, 'c', '.node');
*/
