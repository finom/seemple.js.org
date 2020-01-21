/**
@function Seemple.binders.textarea
@importance 3
@since 0.3
@summary Возвращает байндер, связывающий свойство объекта с элементом ``textarea``. Напрямую байндер использовать не обязательно, так как он входит в список {@link Seemple.defaultBinders}.
@returns {binder}
@example
this.bindNode('myKey', '.my-textarea', Seemple.binders.textarea());
*/
