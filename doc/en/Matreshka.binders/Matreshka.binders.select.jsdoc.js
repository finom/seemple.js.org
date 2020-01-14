/**
@function Seemple.binders.select
@module seemple/binders/select
@importance 3
@since 0.3
@summary Returns a binder which binds an object property to a ``select`` element value. It is not obligatory to use the binder directly because it is included in the {@link Seemple.defaultBinders} list.
@param {boolean} [multiple=false] - If select is ``multiple``
@returns {binder}
@example
this.bindNode('myKey', '.my-select', Seemple.binders.select(true));
*/
