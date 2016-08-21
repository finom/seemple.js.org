/**
@member {$nodes} Matreshka#$nodes
@importance 3
@since 1.1
@summary An object contains collections (jQuery, Zepto, built-in micro-library instance inherited from ``Array.prototype``) of bound nodes for quick access.
@see {@link Matreshka#bindNode}
@example
this.bindNode('myKey', '.my-node');
this.$nodes.myKey; // the same as $('.my-node')
*/

/**
@member {node} Matreshka#nodes
@importance 3
@since 1.1
@summary The object contains bound elements in the form of separate DOM nodes for quick access.
@desc Pay attention, every object property has got the first node of the bound ones to the corresponding property. Use {@link Matreshka#$nodes} for getting all the nodes bound to a certain property.
@see {@link Matreshka#bindNode}
@example
this.bindNode('myKey', '.my-node');
this.nodes.myKey; // the same as $('.my-node')[0]
*/
