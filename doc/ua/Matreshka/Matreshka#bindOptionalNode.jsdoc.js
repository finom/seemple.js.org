/**
@method Matreshka#bindOptionalNode
@importance 2
@since 0.3
@summary Работает в точности так же, как и {@link Matreshka#bindNode} но не бросает исключение, если аргумент ``node`` - пустой массив, ``undefined`` или не существует

@desc > У метода есть {@link Matreshka.bindOptionalNode статичный аналог}.

@see {@link Matreshka#bindNode}
@example
this.bindOptionalNode('myKey', '.my-element');
*/
