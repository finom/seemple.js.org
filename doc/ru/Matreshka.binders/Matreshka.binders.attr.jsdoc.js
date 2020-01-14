/**
@function Seemple.binders.attr
@module seemple/binders/attr
@importance 2
@since 0.3
@summary Возвращает байндер, меняющий атрибут DOM элемента на значение свойства объекта
@desc Значение свойства можно преобразить с помощью переданной функции ``mappingFn``.
@param {string} attribute - Имя атрибута
@param {function} [mappingFn] - Отображающая функция
@returns {binder}
@example
this.bindNode('image', 'img.my-image', Seemple.binders.attr('src'));

this.image = 'http://example.com/cats.jpg';

@example <caption>Использование отображающей функции</caption>
this.bindNode('myKey', '.my-node',
    Seemple.binders.attr('foo', value => `Hello, ${value}`));

this.myKey = 'World'; // атрибут foo имеет значение "Hello, World"
*/
