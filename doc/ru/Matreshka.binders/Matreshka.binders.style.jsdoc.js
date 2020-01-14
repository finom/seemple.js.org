/**
@function Seemple.binders.style
@module seemple/binders/style
@importance 2
@since 1.1
@summary Возвращает байндер, меняющий заданное свойство стиля DOM элемента в зависимости от значения свойства объекта.
@desc Значение свойства можно преобразить с помощью переданной функции ``mappingFn``.
@param {string} property - Свойство ``style`` (camel-cased)
@param {function} [mappingFn] - Отображающая функция
@returns {binder}
@example
this.bindNode('myKey', '.my-element',
    Seemple.binders.style('backgroundColor'));
this.myKey = 'red'; // цвет фона .my-element стал красным

@example <caption>Использование отображающей функции</caption>
this.bindNode('myKey', '.my-element',
  Seemple.binders.style('backgroundImage', value => `url("${value}")`));
  
this.myKey = 'cats.jpg'; // backgroundImage теперь равен "url("cats.jpg")"
*/
