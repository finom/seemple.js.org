/**
@method Seemple.Object#addDataKeys
@fires set
@fires modify
@importance 1
@summary Додає задані імена властивостей в список імен властивостей, що відповідають за дані
@desc Цей метод застосовується тоді, коли потрібно оголосити властивості, що відповідають за дані, але значення цих властивостей ще не відомі.
@param {string|array} keys - Масив імен властивостей або список аргументів з іменами властивостей
@returns {seempleObject} self
@example
this.addDataKeys(['a', 'b']);
@example
this.addDataKeys('a', 'b');
*/
