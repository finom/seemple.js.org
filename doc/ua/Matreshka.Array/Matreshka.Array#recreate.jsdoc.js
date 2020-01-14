/**
@method Seemple.Array#recreate
@importance 1
@fires recreate
@fires modify
@fires add
@fires addone
@fires remove
@fires removeone
@summary Перестворює екземпляр {@link Seemple.Array}
@desc Метод дозволяє конвертувати будь-який масив (або об'єкт, подібний масиву) в екземпляр {@link Seemple.Array}. Якщо нічого не передано в якості першого аргументу, екземпляр очищується.
@see {@link Seemple.Array#trackBy}
@param {array} [array] - Масив або масивоподібний об'єкт
@param {eventOptions} [eventOptions] - Об'єкт події
@returns {seempleArray} self
@example
// очищаємо масив і додаємо 5 нових айтемів
this.recreate([1, 2, 3, 4, 5]);

// очищаємо масив
this.recreate();
*/
