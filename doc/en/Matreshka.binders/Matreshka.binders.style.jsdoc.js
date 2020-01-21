/**
@function Seemple.binders.style
@importance 2
@since 1.1
@summary Returns a binder which changes given style property of bound DOM node depending on an object property value
@desc The property value can be transformed using ``mappingFn`` argument.
@param {string} property - A property of ``style`` object (camel-cased)
@param {function} [mappingFn] - Mapping function
@returns {binder}
@example
this.bindNode('myKey', '.my-progres',
        Seemple.binders.style('backgroundColor'));
this.myKey = 'red'; // background-color of .my-progress is red now

@example <caption>The usage of mapping function</caption>
this.bindNode('myKey', '.my-element',
  Seemple.binders.style('backgroundImage', value => `url("${value}")`));

this.myKey = 'cats.jpg'; // backgroundImage now equals to "url("cats.jpg")"
*/
