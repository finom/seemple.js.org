/**
@function Seemple.binders.prop
@module seemple/binders/prop
@importance 2
@since 0.3
@summary Возвращает байндер, меняющий свойство DOM элемента на значение свойства объекта
@desc Значение свойства можно преобразить с помощью переданной функции ``mappingFn``.
@param {string} property - Имя свойства
@param {function} [mappingFn] - Отображающая функция
@returns {binder}
@example
this.bindNode('disabled', '.my-button',
    Seemple.binders.prop('disabled'));

// устанавливает свойство disabled = true для элемента
this.disabled = true;

// устанавливает свойство disabled = false для элемента
this.disabled = false;
@example <caption>Использование отображающей функции</caption>
this.bindNode('myProp', '.my-node'
    Seemple.binders.prop('foo', value => `Hello, ${value}`));

this.myProp = 'World'; // свойство елемента foo имеет значение "Hello, World"
*/
