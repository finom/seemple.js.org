/**
@function Seemple.binders.input
@importance 3
@since 0.3
@summary Повертає байндер, що зв'язує властивість об'єкта з елементом ``input``. Безпосередньо байндер використовувати не обов'язково, так як він входить в список {@link Seemple.defaultBinders}.
@param {string} [type] - Тип інпута
@returns {binder}
@example
this.bindNode('myKey', '.my-input', Seemple.binders.input('range'));
*/
