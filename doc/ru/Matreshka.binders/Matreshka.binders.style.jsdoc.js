/**
@function Matreshka.binders.style
@module matreshka/binders/style
@importance 2
@since 1.1
@summary Возвращает байндер, меняющий заданное свойство стиля DOM элемента в зависимости от значения свойства объекта.
@param {string} property - Свойство ``style`` (camel-cased)
@returns {binder}
@example
this.bindNode('myKey', '.my-node',
    Matreshka.binders.style('backgroundColor'));
this.myKey = 'red'; // цвет фона .my-node стал красным
*/
