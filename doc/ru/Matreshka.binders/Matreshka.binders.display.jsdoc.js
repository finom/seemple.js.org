/**
@function Matreshka.binders.display
@module matreshka/binders/display
@importance 2
@since 0.1
@summary Возвращает байндер для одностороннего связывания, меняющий видимость DOM элемента (используя ``style.display``), в зависимости от значения свойства объекта
@param {boolean} [bool=true] - Если аргумент равен ``true``, то элемент прячется при ложном значении свойства, если равен ``false``, прячется при правдивом значении
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.display(true));
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.display(false));
*/
