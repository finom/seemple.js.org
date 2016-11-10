/**
@function Matreshka.binders.html
@module matreshka/binders/html
@importance 2
@since 0.1
@summary Повертає байндер, який змінює ``innerHTML`` DOM елемента в залежності від значення властивості об'єкта
@desc Значення властивості можна перетворити за допомогою переданої функції ``mappingFn``.
@param {function} [mappingFn] - Відображаюча функція
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.html());
// встановить innerHTML элемента як "<div>foo</div>"
this.myKey = '<div>foo</div>';
@example <caption>Використання ``mappingFn``</caption>
this.bindNode('myKey', '.my-element',
    Matreshka.binders.html(value => `Hello, ${value}`));
    
// встановить innerHTML элемента як "Hello, <div>foo</div>"
this.myKey = '<div>foo</div>';
*/
