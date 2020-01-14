/**
@function Seemple.binders.existence
@module seemple/binders/existence
@importance 2
@since 2.3
@summary Возвращает байндер для одностороннего связывания, переключающий наличие элемента в DOM дереве, в зависимости от значения свойства объекта
@desc Байндер работает так же, как и {@link Seemple.binders.display}, но вместо изменения видимости элемента, изменяется наличие элемента на странице. Байндер полезен для:

- Крупных приложений: в зависимости от состояния роутера показать ту или иную страницу;
- Для реализации бесконечного скроллинга;
- Для других задач, где нужно спрятать элемент, но его наличие в DOM дереве не обязательно.

@param {boolean} [bool=true] - Если аргумент равен ``true``, то элемент исчезает при ложном значении свойства, если равен ``false``, исчезает при правдивом значении
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.existence(true));
@example
this.bindNode('myKey', '.my-element', Seemple.binders.existence(false));
*/
