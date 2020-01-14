/**
@method Seemple.Array#pull
@importance 2
@since 0.1
@fires pull
@fires remove
@fires removeone
@fires modify
@summary Removes an item with specified index from an array or an item itself
@param {object|number} indexOrValue - An item index (a number) which has to be removed or the deletee itself (an object)
@param {eventOptions} [eventOptions] - An event object in case if it is needed to pass some data to event handlers or to set some service flags (eg. ``silent``)
@returns {*|null} A deletee or ``null``
@example <caption>Passing of an index</caption>
let removed;

this.recreate(['a', 'b', 'c']);

removed = this.pull(1);

console.log(removed); // 'b'

console.log(this.join(',')); // 'a,c'
@example <caption>Passing of a deletee object</caption>
const object1 = {};
const object2 = {};
const object3 = {};
let removed;

this.push(object1, object2, object3);

removed = this.pull(object2);

console.log(removed === object2); // true

console.log(this.length); // 2
*/
