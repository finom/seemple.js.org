/**
@method Matreshka.Array#pull
@importance 2
@since 0.1
@fires pull
@fires remove
@fires removeone
@fires modify
@summary Removes an item with specified index from an array and returns this item.
@param {string|number|*} index - An item index (a number or a string) which has to be removed or the deletee itself (which is neither a number nor a string)
@param {eventOptions} [evtOptions] - An event object in case if it is necessary to pass some data to event handlers or to set the ``silent`` flag which prevents events triggering.
@returns {*|null} A deletee or ``null``
@example <caption>Passing of an index</caption>
var removed;

this.recreate(['a', 'b', 'c']);

removed = this.pull(1);

alert(removed); // 'b'

alert(this.toString()); // 'a,c'
@example <caption>Passing of a deletee object</caption>
var object1 = {},
	object2 = {},
	object3 = {},
	removed;

this.push(object1, object2, object3);

removed = this.pull(object2);

alert(removed === object2); // true

alert(this.length); // 2
*/
