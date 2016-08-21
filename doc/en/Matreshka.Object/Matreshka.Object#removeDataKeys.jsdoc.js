/**
@method Matreshka.Object#removeDataKeys
@importance 2
@summary Deletes keys from a list of keys which are responsible for data (but does not delete given properties)
@param {string|array} keys - A key or keys which are separated by spaces or an array of keys
@returns {matreshkaObject} self
@example
this.removeDataKeys('a b');
@example
this.removeDataKeys(['a', 'b']);
@example
this.removeDataKeys('a', 'b');
*/
