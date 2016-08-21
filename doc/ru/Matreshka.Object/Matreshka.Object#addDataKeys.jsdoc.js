/**
@method Matreshka.Object#addDataKeys
@fires set
@fires modify
@importance 1
@summary Добавляет заданные имена свойств в список имен свойств, отвечающих за данные
@desc Этот метод применяется тогда, когда нужно объявить свойства, отвечающие за данные, но значения этих свойств еще не известны.
@param {string|array} keys - Массив имен свойств либо список аргументов с именами свойств
@returns {matreshkaObject} self
@example
this.addDataKeys(['a', 'b']);
@example
this.addDataKeys('a', 'b');
*/
