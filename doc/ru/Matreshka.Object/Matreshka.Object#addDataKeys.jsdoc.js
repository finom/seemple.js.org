/**
@method Matreshka.Object#addDataKeys
@importance 1
@summary Добавляет ключи в список ключей, отвечающих за данные
@desc Этот метод применяется тогда, когда нужно объявить ключи, отвечающие за данные, но значения соответствующих свойств еще не известны.
@param {string|array} keys - Ключ, или ключи разделенные пробелами, или массив ключей
@returns {matreshkaObject} self
@example
this.addDataKeys('a b');
@example
this.addDataKeys(['a', 'b']);
@example
this.addDataKeys('a', 'b');
@example <caption>Пример с {@link Matreshka.Object#each}</caption>
this.addDataKeys('a b');

this.each(function(value, key) {
	console.log(key, value);
});
// выводит 'a' undefined and 'b' undefined
*/
