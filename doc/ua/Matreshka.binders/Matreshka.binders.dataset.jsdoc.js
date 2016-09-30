/**
@function Matreshka.binders.dataset
@module matreshka/binders/dataset
@importance 2
@since 1.1
@summary Повертає байндер, який змінює властивість [dataset](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/dataset) DOM элемента в залежності від значення властивості об'єкта.
@param {string} property - Властивість dataset
@returns {binder}
@example
this.bindNode('myKey', '.my-node', Matreshka.binders.dataset('myProp'));
this.myKey = 'cool value';
*/
