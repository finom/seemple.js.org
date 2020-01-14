/**
@method Seemple.Object#removeDataKeys
@importance 2
@fires remove
@fires modify
@summary Deletes given property names from a list of property names which are responsible for data (but does not delete the properties)
@param {string|array} keys - An array of property names or a list of args
@returns {seempleObject} self
@example
this.removeDataKeys(['a', 'b']);
@example
this.removeDataKeys('a', 'b');
*/
