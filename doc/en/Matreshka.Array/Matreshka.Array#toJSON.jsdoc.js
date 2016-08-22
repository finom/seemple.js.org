/**
@method Matreshka.Array#toJSON
@importance 1
@summary Converts {@link Matreshka.Array} instance into native array
@desc The method works recursively, calling ``toJSON`` for all items which have such method. To cancel this behavior pass ``false`` as the only argument.
@param {boolean} [recursive=true]
@returns {array}
@example
const mkArray = new Matreshka.Array([1, 2, new MatreshkaArray(3, 4)]);

// returns [1, 2, [3, 4]]
console.log(mkArray.toJSON());

// returns [1, 2, MatreshkaArray]
console.log(mkArray.toJSON(false));
*/
