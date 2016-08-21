/**
@function Matreshka.binders.textarea
@module matreshka/binders/textarea
@importance 3
@since 0.3
@summary Returns a binder which binds instance property to a ``textarea`` element value. It is not obligatory to use the binder directly because it is included in the {@link Matreshka.defaultBinders} list.
@returns {binder}
@example
this.bindNode('myKey', '.my-textarea', Matreshka.binders.textarea());
*/
