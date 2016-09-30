/**
@function Matreshka.binders.style
@module matreshka/binders/style
@importance 2
@since 1.1
@summary Повертає байндер, який змінює задану властивість стилю DOM елемента в залежності від значення властивості об'єкта.
@param {string} property - Властивість ``style`` (camel-cased)
@returns {binder}
@example
this.bindNode('myKey', '.my-node',
    Matreshka.binders.style('backgroundColor'));
this.myKey = 'red'; // колір фону .my-node став червоним
*/
