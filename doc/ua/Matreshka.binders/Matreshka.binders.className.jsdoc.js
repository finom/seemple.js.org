/**
@function Seemple.binders.className
@importance 2
@since 0.1
@summary Повертає байндер, який перемикає ім'я класу DOM елемента в залежності від значення властивості об'єкта. Якщо значення властивості нестрого дорівнює ``true``, ім'я класу додається, в іншому випадку - забирається. Логіку можна змінити, передавши ``false`` другим аргументом, і, таким чином, ім'я класу буде додаватися, коли значення властивості нестрого дорівнює ``false`` і навпаки.
@param {string} className
@param {boolean} [bool=true]
@returns {binder}
@example
this.bindNode('myKey', '.my-element',
        Seemple.binders.className('blah'));

this.myKey = true; // додає клас 'blah'

this.myKey = false; // вбирає клас 'blah'
@example
this.bindNode('myKey', '.my-element',
        Seemple.binders.className('blah', false));

this.myKey = false; // додає клас 'blah'

this.myKey = true; // вбирає клас 'blah'
*/
