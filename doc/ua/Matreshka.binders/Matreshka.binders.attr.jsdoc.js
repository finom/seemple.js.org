/**
@function Matreshka.binders.attr
@module matreshka/binders/attr
@importance 2
@since 0.3
@summary Повертає байндер, який змінює атрибут DOM елемента на значення властивості об'єкту
@param {string} attribute
@returns {binder}
@example
this.bindNode('image', 'img.my-image', Matreshka.binders.attr('src'));

this.image = 'http://example.com/cats.jpg';
*/
