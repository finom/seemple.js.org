/**
@function Matreshka.binders.text
@module matreshka/binders/text
@importance 2
@since 1.1
@summary Возвращает байндер, меняющий ``textContent`` (текстовое содержимое) DOM элемента в зависимости от значения свойства объекта.
@desc ``Matreshka.binders.text`` позволяет вывести содержимое свойства как есть. Значение свойства можно преобразить с помощью переданной функции ``mappingFn``.
@param {function} [mappingFn] - Отображающая функция
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.text());
this.myKey = 'foo'; // установит textContent элемента как "foo"
@example <caption>Использование отображающей функции</caption>
this.bindNode('myKey', '.my-element',
    Matreshka.binders.text(value => `Hello, ${value}`));
    
this.myKey = 'foo'; // установит textContent элемента как "Hello, foo"
*/
