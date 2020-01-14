/**
@method Seemple.Array#orderBy
@importance 2
@fires sort
@since 1.6
@summary Сортує масив за значеннями властивостей об'єктів, які в нього входять
@desc Цей метод працює майже так само, як і метод [orderBy з lodash](https://lodash.com/docs#orderBy). Він приймає ключ або масив ключів першим аргументом, порядок (asc/desc) або масив порядків - другим.

@param {string|array} keys - Ключ властивості або масив декількох ключів, за якими колекція буде відсортована
@param {string|array} [orders=asc] - Порядок або масив порядків, відповідних до масиву ключів
@returns {seempleArray} self
@example
this.recreate([
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 42 },
    { 'user': 'barney', 'age': 36 }
]);

// сортує за значенням властивості 'user' по зростанню і значенням властивості 'age' по спаданню
this.orderBy(['user', 'age'], ['asc', 'desc']);
// → [{"user":"barney","age":36},{"user":"barney","age":34},{"user":"fred","age":48},{"user":"fred","age":42}]
*/
