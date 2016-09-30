/**
@function Matreshka.binders.prop
@module matreshka/binders/prop
@importance 2
@since 0.3
@summary Повертає байндер, який змінює властивість DOM елемента на значення властивості об'єкта
@param {string} property
@returns {binder}
@example
this.bindNode('disabled', '.my-button',
    Matreshka.binders.prop('disabled'));

// встановлює властивість disabled = true для елемента
this.disabled = true;

// встановлює властивість disabled = false для елемента
this.disabled = false;
*/
