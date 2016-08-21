/**
@member {boolean} Matreshka.Array#renderIfPossible
@importance 3
@summary The ``renderIfPossible`` property cancels the array rendering if it equals ``false``
@see {@link Matreshka.Array#itemRenderer}
@example
var MyArray = MK.Class({
    'extends': MK.Array,
	itemRenderer: '<li>'
    renderIfPossible: false,
    // ...
});
*/
