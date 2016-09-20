/**
@method Matreshka.Object#removeDataKeys
@fires remove
@fires modify
@importance 2
@summary Удаляет заданные имена свойств из списка имен свойств, отвечающих за данные (но не удаляет само свойство)
@param {string|array} keys - Массив имен свойств либо список аргументов с именами свойств
@returns {matreshkaObject} self
@example
this.removeDataKeys(['a', 'b']);
@example
this.removeDataKeys('a', 'b');
*/
