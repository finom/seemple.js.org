/**
@method Matreshka#remove
@importance 3
@fires delete
@fires delete:KEY
@summary Удаляет свойство

@desk > У метода есть {@link Matreshka.remove статичный аналог}.

@param {string} key - Имя свойства или массив имен свойств, которые следует удалить
@param {eventOptions} [eventOptions] - Объект события
@returns {matreshka} self
@example
this.remove('myKey');
this.remove(['myKey1', 'myKey2']);
@example <caption>Использование ``eventOptions``</caption>
this.remove('myKey', {
	silent: true
});
*/
