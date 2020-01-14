/**
@method Seemple.chain
@module seemple/chain
@importance 2
@since 2.0
@summary Allows chained calls of universal methods

@desc The function accepts any object and returns an instance of externally inaccessible class which adopts universal methods allowing them to be called in a chain to change given object.

> Universal method is a method which exist at {@link Seemple} prototype and have a static alternative (e. g. {@link Seemple#bindNode} and {@link Seemple.bindNode})

@param {object|function} object - An object
@returns {object} An instance of the class which adopts universal methods

@example
const object = {};
Seemple.chain(object)
    .calc('a', 'b', b => b * 2)
    .set('b', 3)
    .bindNode('c', '.node');

// the same as
// Seemple.calc(object, 'a', 'b', b => b * 2)
// Seemple.set(object, 'b', 3)
// Seemple.bindNode(object, 'c', '.node');

*/
