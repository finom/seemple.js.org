/**
@function Matreshka.binders.prop
@module matreshka/binders/prop
@importance 2
@since 0.3
@summary Возвращает байндер, меняющий свойство DOM элемента на значение свойства экземпляра класса
@param {string} property
@returns {binder}
@example
this.bindNode('disabled', '.my-button',
    Matreshka.binders.prop('disabled'));

// устанавливает свойство disabled = true для элемента
this.disabled = true;

// устанавливает свойство disabled = false для элемента
this.disabled = false;
*/
