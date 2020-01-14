/**
@method Seemple.Object#each
@importance 2
@summary Iterates properties which are responsible for data through ``callback`` function
@desc This method is very similar to ``Array.prototype.forEach``. It allows to iterate over data properties when for..of syntax is not available.
@param {function} callback - A function which is called on every iteration
@param {*} [thisArg] - A context of a function
@returns {seempleObject} self
@example
this
	.setData({ a: 1, b: 2 })
	.addDataKeys('c')
	.each((value, key) => {
		console.log(key, value);
	}, this);
;
// >>> a 1, b 2, c undefined
*/
