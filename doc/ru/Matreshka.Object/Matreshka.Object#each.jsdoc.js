/**
@method Seemple.Object#each
@importance 2
@summary Перебирает свойства, отвечающие за данные
@desc Метод очень похож на ``Array.prototype.forEach`` и является альтернативой циклу for..of.
@param {function} callback - Функция, которая вызывается на каждой итерации
@param {*} [thisArg] - Контекст функции
@returns {seempleObject} self
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
