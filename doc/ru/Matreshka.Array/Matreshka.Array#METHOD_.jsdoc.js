/**
@method Seemple.Array#METHOD_
@importance 1
@summary Любой метод из ``Array.prototype`` с возможностью передать объект события
@desc Ознакомившись с {@link Seemple.Array#METHOD} становится понятно, что методы не поддерживают передачу объекта события, так как в точности повторяют синтаксис и количество аргументов встроенного ``Array``. Синтаксис ``МЕТОД_`` позволяет передать в обработчик события какие-нибудь данные либо установить служебные флаги, отвечающие за поведение массива после вызова метода.

Список доступных флагов:
- ``silent`` - отключает генерацию событий
- ``dontRender`` - отключает {@link Seemple.Array#itemRenderer рендеринг}
- ``skipItemMediator`` - отключает {@link Seemple.Array#mediateItem медиаторы}

@see {@link Seemple.Array#METHOD}
@example
this.push_(1, 2, 3, {
    silent: true
});

this.pop_({
    silent: true
});
@example
this.on('modify', evt => {
	alert(evt.flag); // 42
});

this.push_(1, 2, 3, {
	flag: 42
});
*/
