/**
@method Seemple.bindSandbox
@module seemple/bindsandbox
@importance 3
@since 1.1
@summary Связывает свойство ``sandbox`` с элементом и отвязывает предыдущий элемент, если таковой существует

@desc Этот статичный метод работает так же, как и {@link Seemple#bindSandbox} и все его вариации, но принимает в качестве первого аргумента любой JavaScript объект.
@returns {object} Первый аргумент
@see {@link Seemple#bindSandbox}
@example
const object = {};
Seemple.bindSandbox(object, '.my-node');
*/
