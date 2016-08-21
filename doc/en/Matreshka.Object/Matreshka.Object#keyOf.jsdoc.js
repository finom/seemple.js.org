/**
@method Matreshka.Object#keyOf
@importance 2
@summary Searches for specified property value among others which are responsible for data and returns a key if this value has been found (very similar to ``Array.prototype.indexOf`` function)
@prop {*} value - A value of any type which should be found among data keys
@returns {string|null}
@example
var mkObject = new MK.Object({
	a: 1,
	b: 2
});

mkObject.keyOf(1); // 'a'

mkObject.keyOf(2); // 'b'

mkObject.keyOf(3); // null
*/
