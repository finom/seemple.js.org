/**
@method Seemple#selectAll
@synonym Seemple#$
@importance 2
@summary Возвращает элементы из песочницы, соответствующие селектору
@desc После создания песочницы методом {@link Seemple#bindNode}, можно получать и использовать элементы, находящиеся в ней. Кроме этого, метод поддерживает  селектор ``:bound(KEY)``.

> У метода есть {@link Seemple.selectAll статичный аналог}.

@param {string} selector - Cелектор
@returns {$nodes}
@example
this.bindNode('sandbox', '.app');
nodes = this.selectAll('.my-element');
// то же самое, что и
nodes = this.$('.my-element'); // $ - ссылка на метод selectAll
// то же самое, что и
nodes = this.$nodes.sandbox.find('.my-element');
// и то же самое, что и
nodes = $('.app').find('.my-element');

@example <caption>Селектор ``:bound(KEY)``</caption>
this.bindNode('myKey', '.my-element');
nodes = this.selectAll(':bound(myKey) .my-another-element');
// то же самое, что и
nodes = this.$nodes.myKey.find('.my-another-element');
// и то же самое, что и
nodes = $('.my-element').find('.my-another-element');
*/
