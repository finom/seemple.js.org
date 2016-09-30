/**
@function Matreshka.binders.output
@module matreshka/binders/output
@importance 3
@since 0.3
@summary Returns a binder which binds an object property to an ``output`` element value. It is not obligatory to use the binder directly because it is included in the {@link Matreshka.defaultBinders} list.
@returns {binder}
@example
this.bindNode('myKey', '.my-output', Matreshka.binders.output());
*/
