/**
@function Matreshka.binders.html
@module matreshka/binders/html
@importance 2
@since 0.1
@summary Возвращает байндер, меняющий ``innerHTML`` DOM элемента в зависимости от значения свойства экземпляра класса
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.html());
*/
