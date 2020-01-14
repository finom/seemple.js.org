/**
@member {$nodes} Seemple#$nodes
@importance 3
@since 1.1
@summary Объект содержит коллекции (jQuery, Zepto, инстанс встроенной микро-библиотеки, унаследованной от ``Array.prototype``) привязанных элементов для быстрого доступа.
@see {@link Seemple#bindNode}
@example
this.bindNode('myKey', '.my-node');
this.$nodes.myKey; // то же самое, что и $('.my-node')
*/

/**
@member {node} Seemple#nodes
@importance 3
@since 1.1
@summary Объект содержит привязанные элементы для быстрого доступа, в виде отдельных DOM узлов.
@desc Обратите внимание, каждое свойство объекта содержит первый узел из связанных с соотвутствующим свойством. Для получения всех узлов, связанных с определенным свойством, используйте {@link Seemple#$nodes}.
@see {@link Seemple#bindNode}
@example
this.bindNode('myKey', '.my-node');
this.nodes.myKey; // то же самое, что и $('.my-node')[0]
*/
