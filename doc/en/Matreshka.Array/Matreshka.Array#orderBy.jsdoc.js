/**
@method Matreshka.Array#orderBy
@importance 2
@fires sort
@since 1.6
@summary Sorts by properties of array items
@desc This method works almost like [orderBy from lodash](https://lodash.com/docs#orderBy). It accepts a key or a list of keys as the first arg and an order (asc/desc) or a list of orders as the second arg.

@param {string|array} keys - A key or a list of keys
@param {string|array} [orders=asc] - An order or a list of orders corresponding to the list of keys
@returns {matreshkaArray} self

@example <caption>A little example taken from lodash documentation</caption>
this.recreate([
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 42 },
    { 'user': 'barney', 'age': 36 }
]);

// sort by 'user' in ascending order and by 'age' in descending order
this.orderBy(['user', 'age'], ['asc', 'desc']);
// → [{"user":"barney","age":36},{"user":"barney","age":34},{"user":"fred","age":48},{"user":"fred","age":42}]
*/
