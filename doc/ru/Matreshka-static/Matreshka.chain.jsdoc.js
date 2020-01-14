/**
@method Seemple.chain
@module seemple/chain
@importance 2
@since 2.0
@summary Позволяет вызывать универсальные методы цепочкой
@desc Функция принимает любой объект и возвращает экземпляр недоступного извне класса, который перенимает универсальные методы, позволяя их цепной вызов для работы с переданным объектом.

> Универсальные методы - это такие методы, которые одновременно есть в прототипе {@link Seemple} и имеют статичный аналог (например, {@link Seemple#bindNode} и {@link Seemple.bindNode}).

@param {object|function} object - Объект
@returns {object} Экземпляр недоступного извне класса

@example
const object = {};
Seemple.chain(object)
    .calc('a', 'b', b => b * 2)
    .set('b', 3)
    .bindNode('c', '.node');

// то же самое, что и
// Seemple.calc(object, 'a', 'b', b => b * 2)
// Seemple.set(object, 'b', 3)
// Seemple.bindNode(object, 'c', '.node');

*/
