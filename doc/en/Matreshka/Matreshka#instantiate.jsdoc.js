/**
@method Seemple#instantiate
@oldlink #!Seemple-setClassFor
@importance 2
@since 1.1
@summary Creates fixed class instance
@desc
> Note that the method has {@link Seemple.instantiate static alternative}.

The method creates and fixes an instance of a class as given property value. When you try to override the property, instead of actual overriding, the instance is updated. Thus, we achieve integrity of an application, made on with Seemple.js.

> The method is an addon over {@link Seemple#mediate} and it overrides a mediator.

Class instance is being created during the call of ``instantiate`` method. The current property value becomes the first argument of the class constructor. Provisions should be made so that either undefined (if a property hasn't contained any data before), or an object you should do something with (for example, to extend class instance by object properties) will get into the class constructor.

> It looks easy in practice: you create an ordinary class which almost always receives some data to be handled (for example, to use it at {@link Seemple.Object#setData} method).

While attempting to assign another value (an object or an array) to the property, the inner mechanism of ``instantiate`` method performs the following instead of the actual assignment:
- If ``updateCallback`` function is given, the method calls it with two arguments: current property value and the data which code is trying to assign.
- If given class is inherited from {@link Seemple.Object}, the instance is updated with new data using {@link Seemple.Object#setData} method.
- If given class is inherited from {@link Seemple.Array}, the instance is updated with new data using {@link Seemple.Array#recreate} method.
- If ``updateCallback`` function isn't given and the class isn’t inherited from {@link Seemple.Object} or {@link Seemple.Array}, the instance is extended by object properties which is trying to to be assigned.

> A feature of this method is an absence of limitations on the class source. Any function-constructor that can be initialized using ``new`` operator and not only {@link Seemple}'s successors can act as a class.

@param {string|array} key - A key or an array of keys
@param {function} class - A class whose instance becomes the property value
@param {function} [updateCallback] - A function which is called at every attempt of assigning new data to the property, allowing to customize logic of class instance updating with new data. The function receives two arguments: the current property value (class instance) and data which are attempted to assign.

@returns {object} self

@example
class MyClass {
	// ...
}

// ...

this.instantiate('x', MyClass);

// trying to assign another value to x property
this.x = { a: 42 };

// this.x is still MyClass instance
alert(this.x instanceof MyClass); // true
alert(this.x.a); // 42
@example <caption>The use of ``updateCallback``.</caption>
this.instantiate('x', MyClass, (instance, data) => {
	updateSomeHow(instance, data);
});
@example <caption>Getting a parent and property name. Besides data (the first argument), two arguments are passed to class constructor: a reference to an instance which has called ``instantiate`` and a name of a property.</caption>
class MyClass extends Seemple {
	constructor(data, parent, key) {
		// parent is MyParentClass instance
        // which is created x property
		// key equals to "x"
	}
}

class MyParentClass extends Seemple {
	constructor() {
		super().instantiate('x', MyClass);
	}
});

@example <caption>A non-standard way of using ``updateCallback`` for ignoring any changes of a property.</caption>
this.instantiate('x', MyClass, () => {});

@example <caption>In case if your class doesn't support the use of ``new`` operator, use {@link Seemple#mediate} method instead of ``instantiate``.</caption>
this.mediate('x', (data, currentValue) => {
	return currentValue instanceof SomeClass
		? Object.assign(currentValue, data)
		: SomeLib.initInstance(SomeClass, data);
});
@example <caption>An abstract example with nested data (for brevity, "class instance fields" syntax is used)</caption>
// app.js
class App extends Seemple {
	constructor(appData) {
		this.appData = appData;
		this.instantiate('appData', AppData);
	}
}

// app-data.js
class AppData extends Seemple.Object {
	constructor(data) {
		super(data)
			.inatantiate({
				friends: Friends,
				settins: Settings
			});
	}
}

// friend.js
class Friend extends Seemple.Object {
	constructor(data) {
		super(data);
	}
}

// friends.js
class Friends extends Seemple.Array {
	get Model() { return Friend; }
	trackBy = 'id';
	constructor(data) {
		super(...data);
	}
}

// settings.js
class Settings extends Seemple.Object {
	constructor(data) {
		super(data)
			.instantiate('credentials', Credentials);
	}
}

// credentials.js
class Credentials extends Seemple.Object {
	constructor(data) {
		super(data);
	}
}

// app-init.js
var app = new App({
	settings: {
		name: 'Vasiliy Vasiliev',
		credentials: {
			email: 'vasia.vasia@gmail.com'
		}
	},
	friends: [{
		name: 'Yulia Zuyeva',
		id: 1
	}, {
		name: 'Konstantin Konstantinopolsky',
		id: 2
	}, {
		name: 'nagibator3000',
		id: 3
	}]
});

// data can be serialized and passed to a server
JSON.stringify(app.appData);

// next just to assign new data to appData property
// yet the object structure won’t be changed
app.appData = {
	settings: {
		name: 'Petr Petrov',
		credentials: {
			email: 'petr.petrov@gmail.com'
		}
	},
	friends: [{
		name: 'Yulechka Zuyeva',
		id: 1
	}, {
		name: 'Konstantin Konstantinopolsky',
		id: 2
	}]
};
*/


/**
@method Seemple#instantiate
@oldlink #!Seemple-setClassFor(2)
@importance 2
@variation 2
@since 1.1
@summary Additional syntax for {@link Seemple#instantiate}, which accepts key-class object as the first argument.
@param {object} keyClassPairs - key-class object
@param {function} [updateCallback] - A function which is called at every attempt of assigning new data to a property

@returns {object} self

@example
this.instantiate({
	x: Class1,
	y: Class2,
	z: Class3
}, (instance, data) => {
	instance.doSomethingWith(data);
});
*/
