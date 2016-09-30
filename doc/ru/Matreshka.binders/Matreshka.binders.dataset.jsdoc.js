/**
@function Matreshka.binders.dataset
@module matreshka/binders/dataset
@importance 2
@since 1.1
@summary Возвращает байндер, меняющий заданное свойство объекта [dataset](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/dataset) DOM элемента в зависимости от значения свойства объекта.
@param {string} property - Свойство dataset
@returns {binder}
@example
this.bindNode('myKey', '.my-node', Matreshka.binders.dataset('myProp'));
this.myKey = 'cool value';
*/
