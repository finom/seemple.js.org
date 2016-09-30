/**
@function Matreshka.binders.text
@module matreshka/binders/text
@importance 2
@since 1.1
@summary Повертає байндер, який змінює ``textContent`` (текстовий вміст) DOM елемента в залежності від значення властивості об'єкта.
@desc ``Matreshka.binders.text`` дозволяє вивести вміст властивості як є.
@returns {binder}
@example
this.bindNode('myKey', '.my-node', Matreshka.binders.text());
*/
