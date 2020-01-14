/**
@function Seemple.binders.style
@module seemple/binders/style
@importance 2
@since 1.1
@summary Повертає байндер, який змінює задану властивість стилю DOM елемента в залежності від значення властивості об'єкта
@desc Значення властивості можна перетворити за допомогою переданої функції ``mappingFn``.
@param {string} property - Властивість ``style`` (camel-cased)
@param {function} [mappingFn] - Відображаюча функція
@returns {binder}
@example
this.bindNode('myKey', '.my-node',
    Seemple.binders.style('backgroundColor'));
this.myKey = 'red'; // колір фону .my-node став червоним

@example <caption>Використання ``mappingFn``</caption>
this.bindNode('myKey', '.my-element',
  Seemple.binders.style('backgroundImage', value => `url("${value}")`));
  
this.myKey = 'cats.jpg'; // backgroundImage дорівнює "url("cats.jpg")"
*/
