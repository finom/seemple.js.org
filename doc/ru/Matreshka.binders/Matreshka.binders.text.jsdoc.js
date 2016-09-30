/**
@function Matreshka.binders.text
@module matreshka/binders/text
@importance 2
@since 1.1
@summary Возвращает байндер, меняющий ``textContent`` (текстовое содержимое) DOM элемента в зависимости от значения свойства объекта.
@desc ``Matreshka.binders.text`` позволяет вывести содержимое свойства как есть.
@returns {binder}
@example
this.bindNode('myKey', '.my-node', Matreshka.binders.text());
*/
