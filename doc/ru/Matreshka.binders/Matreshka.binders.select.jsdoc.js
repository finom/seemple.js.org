/**
@function Matreshka.binders.select
@module matreshka/binders/select
@importance 3
@since 0.3
@summary Возвращает байндер, связывающий свойство объекта с элементом ``select``. Напрямую байндер использовать не обязательно, так как он входит в список {@link Matreshka.defaultBinders}.
@param {boolean} [multiple=false] - Является ли селект ``multiple``
@returns {binder}
@example
this.bindNode('myKey', '.my-select', Matreshka.binders.select(true));
*/
