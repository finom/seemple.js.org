/**
@method Matreshka.chain
@module matreshka/chain
@importance 2
@since 2.0
@summary Позволяет вызывать универсальные методы цепочкой
@desc Функция принимает любой объект и возвращает экземпляр недоступного извне класса, который перенимает универсальные методы, позволяя их цепной вызов для работы с переданным объектом.

> Универсальные методы - это такие методы, которые одновременно есть в прототипе {@link Matreshka} и имеют статичный аналог (например, {@link Matreshka#bindNode} и {@link Matreshka.bindNode}).

@param {object|function} object - Объект
@returns {object} Экземпляр недоступного извне класса

@example
const object = {};
Matreshka.chain(object)
    .calc('a', 'b', b => b * 2)
    .set('b', 3)
    .bindNode('c', '.node');

// то же самое, что и
// Matreshka.calc(object, 'a', 'b', b => b * 2)
// Matreshka.set(object, 'b', 3)
// Matreshka.bindNode(object, 'c', '.node');

*/
