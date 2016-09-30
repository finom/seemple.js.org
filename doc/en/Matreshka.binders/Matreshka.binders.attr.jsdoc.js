/**
@function Matreshka.binders.attr
@module matreshka/binders/attr
@importance 2
@since 0.3
@summary Returns a binder which changes an attribute of DOM node depending on an object property value
@param {string} attribute
@returns {binder}
@example
this.bindNode('image', 'img.my-image', Matreshka.binders.attr('src'));

this.image = 'http://example.com/cats.jpg';
*/
