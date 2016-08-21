/**
@function Matreshka.binders.style
@module matreshka/binders/style
@importance 2
@since 1.1
@summary Returns a binder which changes given style property of bound DOM node depending on instance property value.
@param {string} property - A property of ``style`` object (camel-cased)
@returns {binder}
@example
this.bindNode('myKey', '.my-progres',
        Matreshka.binders.style('backgroundColor'));
this.myKey = 'red'; // background-color of .my-progress is red now
*/
