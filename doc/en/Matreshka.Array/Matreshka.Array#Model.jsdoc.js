/**
@method Matreshka.Array#Model
@importance 1
@since 0.2
@abstract
@summary The property defines a class of items which will be inserted to a collection
@desc Every time items are added to an array, the built-in handler checks if added item is ``Model`` instance and converts it into the one if the check fails. This behavior is very similar to the ``model`` property from ``Backbone.Collection``. It is recommended to inherit ``Model`` from the {@link Matreshka.Object} or {@link Matreshka.Array} class (in case if it is necessary to get a collection of collections) to get an opportunity of an array conversion into ordinary one by means of the {@link Matreshka.Array#toJSON} method.

Use {@link Matreshka.Array#mediateItem} for more flexible control of an item class (for example, if you need to use one Model for certain items and another one - for others).

@see {@link Matreshka.Array#mediateItem}
@see {@link Matreshka.Array#itemRenderer}

@param {object} data - Data which have been passed to a constructor
@param {matreshkaArray} mkArray - An array where an item has been added to
@param {number} index - Current index of an instance in the parent array

@example
// define Model
var MyModel = MK.Class({
	// it is inherited from MK.Object
	'extends': MK.Object,
	constructor: function(data, parentArray, index) {
		// set passed properties by jset method
		this.jset(data);
		this.doSomething();
	},
	doSomething: function() { ... }
});

// define collection class
var MyArray = MK.Class({
    'extends': MK.Array,
    Model: MyModel
});

// create an instance
var myArray = new MyArray();

// add two items
myArray.push({
    a: 1,
    b: 2
}, {
    a: 3,
    b: 4
})

//  will return [{a: 1, b: 2}, {a: 3, b: 4}]
myArray.toJSON();

@example <caption>``Model`` and the ECMAScript 2015</caption>
class MyArray extends MK.Array {
	get Model() {
		return MyModel;
	}
}

@example <caption>``Model`` and the ECMAScript 7</caption>
class MyArray extends MK.Array {
	Model = MyModel;
	constructor() { ... }
}
*/
