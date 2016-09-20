/**
@method Matreshka.off
@module matreshka/off
@importance 3
@since 1.1
@summary Удаляет обработчик события
@desc Этот статичный метод работает так же, как и {@link Matreshka#off} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Matreshka#off}
@example
const object = {};
Matreshka.on(object, 'foo', evt => {
	//...
});

Matreshka.off(object, 'foo');
*/
