/**
@method Matreshka.Array#orderBy
@importance 2
@since 1.6
@summary Сортирует массив по значениям свойств объектов, которые в него входят
@desc Этот статичный метод работает почти так же, как и метод [orderBy из lodash](https://lodash.com/docs#orderBy). Он принимает ключ или массив ключей - первым аргументом, порядок (asc/desc) или массив порядков - вторым.

@param {string|string[]} keys - Ключ свойства или массив нескольких ключей, по которым коллекция будет отсортирована
@param {string|string[]} [orders=asc] - Порядок или массив порядков, соответствующих массиву ключей
@returns {matreshkaArray} self
@example
this.recreate([
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 36 }
]);

// сортирует по значениям свойств `user` по возрастанию и значениям свойств `age` по убыванию
this.orderBy(['user', 'age'], ['asc', 'desc']);
// → [{"user":"barney","age":36},{"user":"barney","age":34},{"user":"fred","age":48},{"user":"fred","age":42}]
*/
