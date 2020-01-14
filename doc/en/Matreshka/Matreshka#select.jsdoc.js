/**
@method Seemple#select
@importance 2
@summary Returns HTML node corresponding to a selector from a sandbox
@desc The method is very similar to {@link Seemple#selectAll}, but it returns only one element or ``null``.

> The method has {@link Seemple.select static alternative}

@param {string} selector - A selector
@returns {node|null}
@example
this.bindNode('sandbox', '.app');
this.select('.my-element');
// the same as
this.nodes.sandbox.querySelector('.my-element');
// the same as
$('.app').find('.my-element')[0];
*/
