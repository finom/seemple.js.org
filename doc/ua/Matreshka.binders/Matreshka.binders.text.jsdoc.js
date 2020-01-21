/**
@function Seemple.binders.text
@importance 2
@since 1.1
@summary Повертає байндер, який змінює ``textContent`` (текстовий вміст) DOM елемента в залежності від значення властивості об'єкта.
@desc ``Seemple.binders.text`` дозволяє вивести вміст властивості як є. Значення властивості можна перетворити за допомогою переданої функції ``mappingFn``.
@param {function} [mappingFn] - Відображаюча функція
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.text());
this.myKey = 'foo'; // встановить textContent элемента як "foo"
@example <caption>Використання ``mappingFn``</caption>
this.bindNode('myKey', '.my-element',
    Seemple.binders.text(value => `Hello, ${value}`));

this.myKey = 'foo'; // встановить textContent элемента як "Hello, foo"
*/
