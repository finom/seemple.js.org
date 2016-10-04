/**
@method Matreshka.chain
@module matreshka/chain
@importance 2
@since 2.0
@summary Allows chained calls of universal methods

@desc The function accepts any object and returns an instance of externally inaccessible class which adopts universal methods allowing them to be called in a chain to change given object.

> Universal method is a method which exist at {@link Matreshka} prototype and have a static alternative (e. g. {@link Matreshka#bindNode} and {@link Matreshka.bindNode})

@param {object|function} object - An object
@returns {object} An instance of the class which adopts universal methods

@example
const object = {};
Matreshka.chain(object)
    .calc('a', 'b', b => b * 2)
    .set('b', 3)
    .bindNode('c', '.node');

// the same as
// Matreshka.calc(object, 'a', 'b', b => b * 2)
// Matreshka.set(object, 'b', 3)
// Matreshka.bindNode(object, 'c', '.node');

*/
