/**
@function Matreshka.binders.html
@module matreshka/binders/html
@importance 2
@since 0.1
@summary Returns a binder which changes ``innerHTML`` of bound DOM node depending on an object property value
@desc The property value can be transformed using ``mappingFn`` argument.
@param {function} [mappingFn] - Mapping function
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.html());
// sets innerHTML="<div>foo</div>"
this.myKey = '<div>foo</div>';
@example <caption>The usage of mapping function</caption>
this.bindNode('myKey', '.my-element',
    Matreshka.binders.html(value => `Hello, ${value}`));
    
// sets innerHTML="Hello, <div>foo</div>"
this.myKey = '<div>foo</div>';
*/
