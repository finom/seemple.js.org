/**
@method Matreshka.Array#Model
@importance 1
@since 0.2
@abstract
@summary The property defines a class of items which will be inserted to a collection
@desc Every time items are added to an array, the built-in handler checks if added item is ``Model`` instance and converts it into the one if the check fails. It is recommended to inherit ``Model`` from the {@link Matreshka.Object} or {@link Matreshka.Array} class (in case if it is necessary to get a collection of collections) to get an opportunity of an array conversion into ordinary one by {@link Matreshka.Array#toJSON} method.

Use {@link Matreshka.Array#mediateItem} for more flexible control of an item class (for example, if you need to use one class for certain items and another one - for others).

@see {@link Matreshka.Array#mediateItem}
@see {@link Matreshka.Array#itemRenderer}

@param {object} data - Data which have been passed to a constructor
@param {matreshkaArray} mkArray - An array where an item has been added to
@param {number} index - Current index of an instance in the parent array

@example
// define a model
class MyModel extends Matreshka.Object {
	constructor(data, parentArray, index) {
		super(data);
		this.doSomething();
	}
	doSomething() { ... }
}

// define collection class
class MyArray extends Matreshka.Array {
	get Model() {
		return MyModel;
	}
}

const myArray = new MyArray();

// add two items
myArray.push({
    a: 1,
    b: 2
}, {
    a: 3,
    b: 4
});

console.log(myArray[0] instanceof MyModel); // true
console.log(myArray[1] instanceof MyModel); // true

// returns [{ a: 1, b: 2 }, { a: 3, b: 4 }]
myArray.toJSON();
*/
