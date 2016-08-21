/**
@method Matreshka#select
@importance 2
@summary Returns HTML node corresponding to a selector from the sandbox
@desc The method is very similar to {@link Matreshka#selectAll}, but it returns only one element or ``null``

> The method has {@link Matreshka.select static alternative}

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
