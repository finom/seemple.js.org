/**
@function Seemple.binders.input
@module seemple/binders/input
@importance 3
@since 0.3
@summary Возвращает байндер, связывающий свойство объекта с элементом ``input``. Напрямую байндер использовать не обязательно, так как он входит в список {@link Seemple.defaultBinders}.
@param {string} [type] - Тип инпута
@returns {binder}
@example
this.bindNode('myKey', '.my-input', Seemple.binders.input('range'));
*/
