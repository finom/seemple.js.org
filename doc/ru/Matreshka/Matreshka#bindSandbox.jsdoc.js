/**
@method Matreshka#bindSandbox
@fires bind
@fires bind:sandbox
@importance 3
@since 1.5
@summary Привязывает песочницу
@desc При этом, "отвязывает" предыдущую, если таковая существует.
> У метода есть {@link Matreshka.bindSandbox статичный аналог}.
@param {string|node|$nodes} node - Элемент, который должен стать песочницей
@param {eventOptions} [eventOptions] -  Объект события
@see {@link Matreshka#bindNode}
@example
this.bindSandbox('.my-element');
*/
