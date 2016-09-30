/**
@function Matreshka.binders.select
@module matreshka/binders/select
@importance 3
@since 0.3
@summary Повертає байндер, що зв'язує властивість об'єкта з елементом ``select``. Безпосередньо байндер використовувати не обов'язково, так як він входить в список {@link Matreshka.defaultBinders}.
@param {boolean} [multiple=false] - Чи є селект ``multiple``
@returns {binder}
@example
this.bindNode('myKey', '.my-select', Matreshka.binders.select(true));
*/
