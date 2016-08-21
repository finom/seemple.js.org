/**
@method Matreshka.Array#METHOD_
@importance 1
@summary Любой метод из ``Array.prototype`` с возможностью передать объект события
@desc Ознакомившись с {@link Matreshka.Array#METHOD} становится понятно, что методы не поддерживают передачу объекта события, так как в точности повторяют синтаксис и количество аргументов встроенного ``Array``. Синтаксис ``МЕТОД_`` позволяет передать в обработчик события какие-нибудь данные либо установить служебные флаги, отвечающие за поведение массива после вызова метода.

Список доступных флагов:
+ ``silent: true`` - отключает генерацию событий
+ ``dontRender: true`` - отключает {@link Matreshka.Array#itemRenderer рендеринг}
+ ``skipMediator: true`` - отключает {@link Matreshka.Array#mediateItem медиаторы}


@see {@link Matreshka.Array#METHOD}
@example
this.push_(1, 2, 3, {
    silent: true
});

this.pop_({
    silent: true
});
@example
this.on('modify', function(evt) {
	alert(evt.flag); // 42
});

this.push_(1, 2, 3, {
	flag: 42
});
*/
