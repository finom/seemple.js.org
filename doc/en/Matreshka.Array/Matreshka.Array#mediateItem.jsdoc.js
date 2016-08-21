/**
@method Matreshka.Array#mediateItem
@importance 2
@since 0.1
@see {@link Matreshka.Array#Model}
@see {@link Matreshka#mediate}
@summary Transforms an item value while inserting.
@desc This method is used to define the typing for the inserted items. Note that calling of this method overrides the {@link Matreshka.Array#Model} property.
@example
// all the array items are numbers
this.mediateItem(Number);
@example
this.push(1, 2, 3, 4, 5);

// all the array items are strings
this.mediateItem(function(value) {
	return String(value);
});

this.push(6, 7);

this.unshift(true, {});

// ["true", "[object Object]", "1", "2", "3", "4", "5", "6", "7"]
console.log( mkArray.toJSON() );
@example <caption>The "conditional Model"</caption>
this.mediateItem(function(item) {
	if(item.something) {
		return new FirstModel(item);
	} else {
		return new SecondModel(item);
	}
});
*/
