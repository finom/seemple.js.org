/**
@function Seemple.binders.className
@importance 2
@since 0.1
@summary Возвращает байндер, который переключает имя класса DOM элемента в зависимости от значения свойства объекта. Если значение свойства нестрого равно ``true``, имя класса добавляется, в противном случае - убирается. Логику можно изменить, передав ``false`` вторым аргументом, и, таким образом, имя класса будет добавляться, когда значение свойства нестрого равно ``false`` и наоборот.
@param {string} className
@param {boolean} [bool=true]
@returns {binder}
@example
this.bindNode('myKey', '.my-element',
        Seemple.binders.className('blah'));

this.myKey = true; // добавляет класс 'blah'

this.myKey = false; // убирает класс 'blah'
@example
this.bindNode('myKey', '.my-element',
        Seemple.binders.className('blah', false));

this.myKey = false; // добавляет класс 'blah'

this.myKey = true; // убирает класс 'blah'
*/
