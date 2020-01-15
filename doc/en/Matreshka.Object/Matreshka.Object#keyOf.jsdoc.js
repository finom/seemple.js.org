/**
@method Seemple.Object#keyOf
@importance 2
@summary Searches for specified property value among others which are responsible for data and returns one key if this value has been found (very similar to ``Array.prototype.indexOf`` function)
@prop {*} value - A value of any type which should be found among data keys
@returns {string|null}
@example
const seempleObject = new Seemple.Object({
	a: 1,
	b: 2
});

seempleObject.c = 3;

seempleObject.keyOf(1); // 'a'

seempleObject.keyOf(2); // 'b'

seempleObject.keyOf(3); // null
*/
