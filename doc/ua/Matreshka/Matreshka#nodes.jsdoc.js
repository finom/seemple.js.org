/**
@member {$nodes} Matreshka#$nodes
@importance 3
@since 1.1
@summary Об'єкт містить колекції (jQuery, Zepto, інстанси вбудованої мікро-бібліотеки, успадкованої від ``Array.prototype``) прив'язаних елементів для швидкого доступу.
@see {@link Matreshka#bindNode}
@example
this.bindNode('myKey', '.my-node');
this.$nodes.myKey; // Те ж саме, що і $('.my-node')
*/

/**
@member {node} Matreshka#nodes
@importance 3
@since 1.1
@summary Об'єкт містить прив'язані елементи для швидкого доступу, у вигляді окремих DOM вузлів.
@desc Зверніть увагу, кожна властивість об'єкта містить перший вузол з пов'язаних з соотвутствующий властивістю. Для отримання всіх вузлів, пов'язаних з певною властивістю, використовуйте {@link Matreshka#$nodes}.
@see {@link Matreshka#bindNode}
@example
this.bindNode('myKey', '.my-node');
this.nodes.myKey; // Те ж саме, що і $('.my-node')[0]
*/
