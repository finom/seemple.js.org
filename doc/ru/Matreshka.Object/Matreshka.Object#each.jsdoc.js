/**
@method Matreshka.Object#each
@importance 2
@summary Перебирает свойства, отвечающие за данные
@desc Метод очень похож на ``Array.prototype.forEach``
@param {function} callback - Функция, которая вызывается на каждой итерации
@param {*} [thisArg] - Контекст функции
@returns {matreshkaObject} self
@example
this.each( function(value, key) {
	...
}, this);
@example
this
	.jset({a: 1, b: 2})
	.addDataKeys('c')
	.each(function(value, key) {
		console.log(key, value);
	}, this);
;
// >>> a 1, b 2, c undefined
*/
