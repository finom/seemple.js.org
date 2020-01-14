/**
@method Seemple#select
@importance 2
@summary Возвращает элемент из песочницы, соответствующий селектору
@desc Метод очень похож на {@link Seemple#selectAll}, но возвращает лишь один элемент или ``null``

> У метода есть {@link Seemple.select статичный аналог}.

@param {string} selector - Селектор
@returns {node|null}
@example
this.bindNode('sandbox', '.app');
this.select('.my-element');
// то же самое, что и
this.nodes.sandbox.querySelector('.my-element');
// и то же самое, что и
$('.app').find('.my-element')[0];
*/
