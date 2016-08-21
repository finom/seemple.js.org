/**
@member {string} Matreshka.Array#trackBy
@importance 2
@since 1.2
@abstract
@summary ``trackBy`` property indicates a key of unique IDs for collection items.
@desc In case if a client and a server activelly communicate with each other and collection items have unique IDs, then redrawing entire collection from scratch does not make sense. After the server respond with new collection, much better to check does the old collection contain objects which have the corresponding identifiers. If object ID from new collection matches object ID from old one, old object will be updated and used again. That means a new object (new instance of {@link Matreshka.Array#Model}) will not be created and new DOM node will not be rendered.

``trackBy`` says which property of collection item is an identifier. Using ``trackBy`` you can get great performance enhancement in cases when you render really huge collections.

``trackBy`` works only using {@link Matreshka.Array#recreate} because ``recreate`` is the only method which recreates collection from scratch.

In examples below ``_id`` key is used as identifier (you can use any other key).

```js
var MyArray = MK.Class({
	'extends': MK.Array,
	trackBy: '_id'
	constructor: function() {
		//,,,
	}
});

var arr = new MyArray();

// adds 3 objects to the collection
arr.recreate([
	{_id: 0, name: 'Foo'},
	{_id: 1, name: 'Bar'},
	{_id: 2, name: 'Baz'}
]);

// the next recreate call
// removes an object with _id: 0
// adds an object with _id: 3
// updates an object with _id: 3 (changes name from Bar to BarNew)
// updates an object with _id: 2 (changes name from Baz to BazNew)
// resorts collection
arr.recreate([
	{_id: 1, name: 'BarNew'},
	{_id: 3, name: 'Qux'},
	{_id: 2, name: 'BazNew'}
]);
```

``trackBy`` can have ``"$index"`` value, allowing to update objects by their index in collection.
```js
var MyArray = MK.Class({
	'extends': MK.Array,
	trackBy: '$index'
	constructor: function() {
		//,,,
	}
});

var arr = new MyArray();

// adds 3 objects to the collection
arr.recreate([
	{name: 'Foo'},
	{name: 'Bar'},
	{name: 'Baz'}
]);

// the next recreate call
// updates all 3 items with new "name"
// adds an object with name "Qux"
arr.recreate([
	{name: 'NewFoo'},
	{name: 'NewBar'},
	{name: 'NewBaz'},
	{name: 'Qux'}
]);
```

@see {@link Matreshka.Array#recreate}
*/
