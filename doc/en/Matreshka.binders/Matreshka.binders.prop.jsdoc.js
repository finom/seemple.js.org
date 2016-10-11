/**
@function Matreshka.binders.prop
@module matreshka/binders/prop
@importance 2
@since 0.3
@summary Returns a binder which changes given property of DOM node depending on an object property value
@param {string} property
@returns {binder}
@example
this.bindNode('disabled', '.my-button',
        Matreshka.binders.prop('disabled'));

// sets disabled = true property for the node
this.disabled = true;

// sets disabled = false property for the node
this.disabled = false;
*/
