/**
@method Seemple.Object#addDataKeys
@fires set
@fires modify
@importance 1
@summary Adds given property names to a list of property names which are responsible for data
@desc This method is used when you need to declare keys which are responsible for data but values of corresponding properties are not known yet.
@param {string|array} keys - An array of property names or a list of args
@returns {seempleObject} self
@example
this.addDataKeys(['a', 'b']);
@example
this.addDataKeys('a', 'b');
*/
