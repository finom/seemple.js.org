/**
@method Matreshka#remove
@importance 3
@fires delete
@fires delete:KEY
@summary Видаляє властивість

@desk > У метода є {@link Matreshka.remove статичний аналог}.

@param {string} key - Им'я властивості або масив имен властивостей, які треба видалити
@param {eventOptions} [eventOptions] - Об'ект події
@returns {matreshka} self
@example
this.remove('myKey');
this.remove(['myKey1', 'myKey2']);
@example <caption>Використання ``eventOptions``</caption>
this.remove('myKey', {
	silent: true
});
*/
