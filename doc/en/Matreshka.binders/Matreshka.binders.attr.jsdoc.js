/**
@function Seemple.binders.attr
@module seemple/binders/attr
@importance 2
@since 0.3
@summary Returns a binder which changes an attribute of DOM node depending on an object property value
@desc The value can be transformed using ``mappingFn`` argument.
@param {string} attribute - Attribute name
@param {function} [mappingFn] - Mapping function
@returns {binder}
@example
this.bindNode('image', 'img.my-image', Seemple.binders.attr('src'));

this.image = 'http://example.com/cats.jpg';

@example <caption>The usage of mapping function</caption>
this.bindNode('myKey', '.my-node',
    Seemple.binders.attr('foo', value => `Hello, ${value}`));

this.myKey = 'World'; // the foo attr now has value "Hello, World"
*/
