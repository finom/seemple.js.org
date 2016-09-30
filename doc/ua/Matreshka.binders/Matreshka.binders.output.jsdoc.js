/**
@function Matreshka.binders.output
@module matreshka/binders/output
@importance 3
@since 1.4
@summary Повертає байндер, що зв'язує властивість об'єкта з елементом ``output``. Безпосередньо байндер використовувати не обов'язково, так як він входить в список {@link Matreshka.defaultBinders}.
@returns {binder}
@example
this.bindNode('myKey', '.my-output', Matreshka.binders.output());
*/
