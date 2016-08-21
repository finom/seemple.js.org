/**
@method Matreshka.Object#each
@importance 2
@summary Iterates properties which are responsible for data through ``callback`` function.
@desc This method is very similar to ``Array.prototype.forEach``.
@param {function} callback - A function which is called on every iteration
@param {*} [thisArg] - A context of a function
@returns {matreshkaObject} self
@example
this.each(function(value, key) {
	...
}, this );
@example
this
	.jset({a: 1, b: 2})
	.addDataKeys('c')
	.each(function(value, key) {
		console.log(key, value);
	}, this);
;
// >>> a 1, b 2, c undefined
*/
