/**
@function Matreshka.binders.attr
@module matreshka/binders/attr
@importance 2
@since 0.3
@summary Возвращает байндер, меняющий атрибут DOM элемента на значение свойства объекта
@param {string} attribute
@returns {binder}
@example
this.bindNode('image', 'img.my-image', Matreshka.binders.attr('src'));

this.image = 'http://example.com/cats.jpg';
*/
