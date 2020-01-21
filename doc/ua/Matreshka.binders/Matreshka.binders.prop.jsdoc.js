/**
@function Seemple.binders.prop
@importance 2
@since 0.3
@summary Повертає байндер, який змінює властивість DOM елемента на значення властивості об'єкта
@desc Значення властивості можна перетворити за допомогою переданої функції ``mappingFn``.
@param {string} property - Ім'я властивості
@param {function} [mappingFn] - Відображаюча функція
@returns {binder}
@example
this.bindNode('disabled', '.my-button',
    Seemple.binders.prop('disabled'));

// встановлює властивість disabled = true для елемента
this.disabled = true;

// встановлює властивість disabled = false для елемента
this.disabled = false;
@example <caption>Використання ``mappingFn``</caption>
this.bindNode('myProp', '.my-node'
    Seemple.binders.prop('foo', value => `Hello, ${value}`));

this.myProp = 'World'; // властивість елемента foo має значення "Hello, World"
*/
