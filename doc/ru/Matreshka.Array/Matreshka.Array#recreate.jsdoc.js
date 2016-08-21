/**
@method Matreshka.Array#recreate
@importance 1
@fires recreate
@fires modify
@fires add
@fires addone
@fires remove
@fires removeone
@summary Пересоздает экземпляр {@link Matreshka.Array}
@desc Метод позволяет конвертировать любой массив (или объект, подобный массиву) в экземпляр {@link Matreshka.Array}. Если ничего не передано в качестве первого аргумента, экземпляр очищается.
@see {@link Matreshka.Array#trackBy}
@param {array} [array] - Массив
@param {eventOptions} [eventOptions] - Объект события
@returns {matreshkaArray} self
@example
// очищаем массив и добавляем 5 новых элементов
this.recreate([1, 2, 3, 4, 5]);

// очищаем массив
this.recreate();
*/
