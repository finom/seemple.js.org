/**
@function Matreshka.binders.display
@module matreshka/binders/display
@importance 2
@since 0.1
@summary Повертає байндер для одностороннього зв'язування, який змінює видимість DOM елементу (використовуючи ``style.display``), в залежності від значення властивості об'єкта
@param {boolean} [bool=true] - Якщо аргумент дорівнює ``true``, то елемент ховається при неправдивому значенні властивості, якщо дорівнює ``false``, ховається при правдивому значенні
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.display(true));
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.display(false));
*/
