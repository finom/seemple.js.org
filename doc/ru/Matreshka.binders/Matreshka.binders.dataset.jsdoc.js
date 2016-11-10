/**
@function Matreshka.binders.dataset
@module matreshka/binders/dataset
@importance 2
@since 1.1
@summary Возвращает байндер, меняющий заданное свойство объекта [dataset](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/dataset) DOM элемента в зависимости от значения свойства объекта.
@desc Значение свойства можно преобразить с помощью переданной функции ``mappingFn``.
@param {string} property - Свойство dataset
@param {function} [mappingFn] - Отображающая функция
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Matreshka.binders.dataset('myProp'));
this.myKey = 'foo';

@example <caption>Использование отображающей функции</caption>
this.bindNode('myKey', '.my-element',
    Matreshka.binders.dataset('myProp', value => `Hello, ${value}`));
    
this.myKey = 'foo'; // атрибут data-my-prop имеет значение "Hello, foo"
*/
