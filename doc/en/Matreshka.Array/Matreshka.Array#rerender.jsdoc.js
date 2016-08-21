/**
@method Matreshka.Array#rerender
@importance 3
@since 0.3
@summary Rerenders DOM nodes of items which are included into an instance.
@desc This method renders array items in an array container. If a node which is associated to an array item has already been created, the method reinserts it into the container or sandbox of the array instead of rerendering it all over again.

The method can be useful in case when items have been added to the array before declaring a sandbox or a container.

Starting with the 1.1 version, in order to make an array rerender itself regardless of the presence of the rendered nodes (for example, you use handlebars in itemRenderer), pass an object with ``forceRerender`` property which equals true to the method.

@param {object} [options] - An object with flags (there is an only ``forceRerender`` flag for the time being)
@returns {matreshkaArray} self
@example
this.rerender({
	forceRerender: true
});
*/
