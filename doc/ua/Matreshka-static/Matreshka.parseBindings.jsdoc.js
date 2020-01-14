/**
@method Seemple.parseBindings
@module seemple/parsebindings
@importance 3
@since 1.1
@summary Парсить DOM дерево, оголошуючи прив'язки властивостей, взятих в подвійні фігурні дужки
@desc Цей статичний метод працює так само, як і {@link Seemple#parseBindings} та всі його варіації, але приймає в якості першого аргументу будь-який JavaScript об'єкт.
@returns {$nodes} Колекція оброблених DOM вузлів, передана в функцію як аргумент
@see {@link Seemple#parseBindings}
@example
const object = {};
const $node = Seemple.parseBindings(object, `<h3>
        Hello, {{name}}
    </h3>`);
object.name = 'World';
*/
