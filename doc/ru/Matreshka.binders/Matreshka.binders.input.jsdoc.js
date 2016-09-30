/**
@function Matreshka.binders.input
@module matreshka/binders/input
@importance 3
@since 0.3
@summary Возвращает байндер, связывающий свойство объекта с элементом ``input``. Напрямую байндер использовать не обязательно, так как он входит в список {@link Matreshka.defaultBinders}.
@param {string} [type] - Тип инпута
@returns {binder}
@example
this.bindNode('myKey', '.my-input', Matreshka.binders.input('range'));
*/
