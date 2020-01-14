/**
@method Seemple.Object#removeDataKeys
@fires remove
@fires modify
@importance 2
@summary Видаляє задані імена властивостей зі списку імен властивостей, що відповідають за дані (але не видаляє властивість)
@param {string|array} keys - Масив імен властивостей або список аргументів з іменами властивостей
@returns {seempleObject} self
@example
this.removeDataKeys(['a', 'b']);
@example
this.removeDataKeys('a', 'b');
*/
