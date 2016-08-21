/**
@function Matreshka.binders.progress
@module matreshka/binders/progress
@importance 3
@since 1.1
@summary Возвращает байндер, связывающий свойство с экземпляра с элементом ``progress``. Напрямую байндер использовать не обязательно, так как он входит в список {@link Matreshka.defaultBinders}.
@returns {binder}
@example
this.bindNode('myKey', '.my-progress', Matreshka.binders.progress());
*/
