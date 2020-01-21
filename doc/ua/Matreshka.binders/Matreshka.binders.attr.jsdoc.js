/**
@function Seemple.binders.attr
@importance 2
@since 0.3
@summary Повертає байндер, який змінює атрибут DOM елемента на значення властивості об'єкту
@desc Значення властивості можна перетворити за допомогою переданої функції ``mappingFn``.
@param {string} attribute - Ім'я атрибута
@param {function} [mappingFn] - Відображаюча функція
@returns {binder}
@example
this.bindNode('image', 'img.my-image', Seemple.binders.attr('src'));

this.image = 'http://example.com/cats.jpg';

@example <caption>Використання ``mappingFn``</caption>
this.bindNode('myKey', '.my-node',
    Seemple.binders.attr('foo', value => `Hello, ${value}`));

this.myKey = 'World'; // атрибут foo має значення "Hello, World"
*/
