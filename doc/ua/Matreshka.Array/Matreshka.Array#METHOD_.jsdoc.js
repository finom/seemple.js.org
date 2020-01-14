/**
@method Seemple.Array#METHOD_
@importance 1
@summary Будь-який метод iз ``Array.prototype`` з можливістю передати об'єкт події
@desc Ознайомившись з {@link Seemple.Array#METHOD} стає зрозуміло, що методи не підтримують передачу об'єкта події, так як в точності повторюють синтаксис і кількість аргументів методів вбудованого ``Array``. Синтаксис ``МЕТОД_`` дозволяє передати в обробник події якісь дані або встановити службові прапори, що відповідають за поведінку масиву після виклику методу.

Службові прапори:
- ``silent`` - відключає генерацію подій
- ``dontRender`` - відключає {@link Seemple.Array#itemRenderer рендеринг}
- ``skipItemMediator`` - відключає {@link Seemple.Array#mediateItem медіатори}

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
