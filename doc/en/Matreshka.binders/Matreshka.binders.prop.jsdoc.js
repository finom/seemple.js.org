/**
@function Seemple.binders.prop
@module seemple/binders/prop
@importance 2
@since 0.3
@summary Returns a binder which changes given property of DOM node depending on an object property value
@desc The property value can be transformed using ``mappingFn`` argument.
@param {string} property - A property name
@param {function} [mappingFn] - Mapping function
@returns {binder}
@example
this.bindNode('disabled', '.my-button',
        Seemple.binders.prop('disabled'));

// sets disabled = true property for the node
this.disabled = true;

// sets disabled = false property for the node
this.disabled = false;
@example <caption>The usage of mapping function</caption>
this.bindNode('myProp', '.my-node'
    Seemple.binders.prop('foo', value => `Hello, ${value}`));
    
// foo property of the element now has value "Hello, World"
this.myProp = 'World';
*/
