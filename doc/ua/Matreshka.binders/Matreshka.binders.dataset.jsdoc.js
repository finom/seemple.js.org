/**
@function Seemple.binders.dataset
@module seemple/binders/dataset
@importance 2
@since 1.1
@summary Повертає байндер, який змінює властивість [dataset](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/dataset) DOM элемента в залежності від значення властивості об'єкта.
@desc Значення властивості можна перетворити за допомогою переданої функції ``mappingFn``.
@param {string} property - Властивість dataset
@param {function} [mappingFn] - Відображаюча функція
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.dataset('myProp'));
this.myKey = 'foo';

@example <caption>Використання ``mappingFn``</caption>
this.bindNode('myKey', '.my-element',
    Seemple.binders.dataset('myProp', value => `Hello, ${value}`));
    
this.myKey = 'foo'; // атрибут data-my-prop має значення "Hello, foo"
*/
