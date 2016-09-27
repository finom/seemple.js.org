/**
@method Matreshka#bindSandbox
@fires bind
@fires bind:sandbox
@importance 3
@since 1.5
@summary Прив'язує пісочницю
@desc При цьому, "одв'язує" попередню, якщо така існує.
> У метода є {@link Matreshka.bindSandbox статичний аналог}.
@param {string|node|$nodes} node - Елемент, який повинен стати пісочницею
@param {eventOptions} [eventOptions] - Об'єкт події
@see {@link Matreshka#bindNode}
@example
this.bindSandbox('.my-element');
*/
