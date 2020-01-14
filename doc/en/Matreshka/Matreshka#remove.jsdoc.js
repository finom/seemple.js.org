/**
@method Seemple#remove
@importance 3
@fires delete
@fires delete:KEY
@summary Deletes a property

@desk > The method has {@link Seemple.remove static alternative}

@param {string} key - A property name or an array of names to remove
@param {eventOptions} [eventOptions] - An event options
@returns {object} self
@example
this.remove('myKey');
this.remove(['myKey1', 'myKey2']);
@example <caption>Using  ``eventOptions``</caption>
this.remove('myKey', {
	silent: true
});
*/
