/**
@function Seemple.binders.html
@module seemple/binders/html
@importance 2
@since 0.1
@summary Возвращает байндер, меняющий ``innerHTML`` DOM элемента в зависимости от значения свойства объекта
@desc Значение свойства можно преобразить с помощью переданной функции ``mappingFn``.
@param {function} [mappingFn] - Отображающая функция
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.html());
// установит innerHTML элемента как "<div>foo</div>"
this.myKey = '<div>foo</div>';
@example <caption>Использование отображающей функции</caption>
this.bindNode('myKey', '.my-element',
    Seemple.binders.html(value => `Hello, ${value}`));
    
// установит innerHTML элемента как "Hello, <div>foo</div>"
this.myKey = '<div>foo</div>';
*/
