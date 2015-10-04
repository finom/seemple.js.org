// Это документация к реализации [TodoMVC](http://todomvc.com), использующей фреймворк [Matreshka.js](http://ru.matreshka.io). Само приложение находится [на этой странице](../../).

// Как и требует спецификация TodoMVC, присваиваем соответствующим переменным коды клавиш.
var ENTER_KEY = 13;
var ESC_KEY = 27;

(function (window) {
	'use strict';
	// Инициализируем приложение
	window.app = new Todos;
	// См. [todos.js](todos.html) и [todo.js](todo.html)
})(window);