/**
@method Matreshka.Object#each
@importance 2
@summary Перебирає властивості, що відповідають за дані
@desc Метод дуже схожий на ``Array.prototype.forEach`` і є альтернативою циклу for..of.
@param {function} callback - Функція, яка викликається на кожній ітерації
@param {*} [thisArg] - Контекст функції
@returns {matreshkaObject} self
@example
this
	.setData({ a: 1, b: 2 })
	.addDataKeys('c')
	.each((value, key) => {
		console.log(key, value);
	});
;
// >>> a 1, b 2, c undefined
*/
