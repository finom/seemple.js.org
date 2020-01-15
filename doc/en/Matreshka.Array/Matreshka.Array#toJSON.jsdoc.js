/**
@method Seemple.Array#toJSON
@importance 1
@summary Converts {@link Seemple.Array} instance into native array
@desc The method works recursively, calling ``toJSON`` for all items which have such method. To cancel this behavior pass ``false`` as the only argument.
@param {boolean} [recursive=true]
@returns {array}
@example
const seempleArray = new Seemple.Array([1, 2, new SeempleArray(3, 4)]);

// returns [1, 2, [3, 4]]
console.log(seempleArray.toJSON());

// returns [1, 2, SeempleArray]
console.log(seempleArray.toJSON(false));
*/
