/**
@method Seemple.Array#recreate
@importance 1
@fires recreate
@fires modify
@fires add
@fires addone
@fires remove
@fires removeone
@summary Пересоздает экземпляр {@link Seemple.Array}
@desc Метод позволяет конвертировать любой массив (или объект, подобный массиву) в экземпляр {@link Seemple.Array}. Если ничего не передано в качестве первого аргумента, экземпляр очищается.
@see {@link Seemple.Array#trackBy}
@param {array} [array] - Массив или массивоподобный объект
@param {eventOptions} [eventOptions] - Объект события
@returns {seempleArray} self
@example
// очищаем массив и добавляем 5 новых элементов
this.recreate([1, 2, 3, 4, 5]);

// очищаем массив
this.recreate();
*/
