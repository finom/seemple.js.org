/**
@method Seemple.Array#recreate
@importance 1
@fires recreate
@fires modify
@fires add
@fires addone
@fires remove
@fires removeone
@summary Recreates the {@link Seemple.Array} instance
@desc The method allows to convert any array or array-like into the {@link Seemple.Array} instance. If nothing has been passed as the first argument, the instance is cleansed.
@param {array} [array] - An array or array-like object
@param {eventOptions} [eventOptions] - An event object
@returns {seempleArray} self
@see {@link Seemple.Array#trackBy}
@example
// cleanse the array and add 5 new items
this.recreate([1, 2, 3, 4, 5]);

// cleanse the array
this.recreate();
*/
