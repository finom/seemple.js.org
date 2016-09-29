/**
@method Matreshka#parseBindings
@importance 2
@since 1.1
@summary Парсит DOM дерево, объявляя привязки свойств, заключенных в двойные фигурные скобки.
@desc Начиная с версии 1.1, Матрешка включает в себя простой DOM парсер, обрабатывающий синтаксические конструкции, заключенные в двойные фигурные скобки. Метод ``parseBindings`` первым аргументом принимает HTML строку, DOM узел или селектор, соответствующий DOM узлу.

Так как метод является DOM шаблонизатором (а не строковым HTML шаблонизатором), все дочерние DOM узлы переданного элемента остаются в своём прежнем состоянии (например, DOM события не затираются).

#### Поддерживаемый синтаксис.
1. HTML привязка
```html
<!--
Создаст текстовый узел на месте {{user.name}}
и свяжет свойство name из объекта user с этим узлом
JS: this.user = {name: 'Joe'}
-->
<span>Hello, {{user.name}}</span>
```

2. Привязка элементов форм.
```html
<!--
Свяжет свойство "x" экземпляра с текстовым
полем (двусторонняя привязка)
JS: this.x = 'some value';
-->
<input type="text" value="{{x}}">
```
```html
<!--
Для привязки textarea и select нужно использовать атрибут value
-->
<textarea value="{{x}}"></textarea>
<select value="{{x}}">...</select>
```
```html
<!--
Свяжет свойство "x" экземпляра с чекбоксом
(двусторонняя привязка)
JS: this.x = true;
-->
<input type="checkbox" checked="{{x}}">
```

3. Привязка атрибутов.
```html
<!--
Значение атрибута href будет зависеть
от значений свойств "category" и "someObject.page"
(односторонняя привязка)
JS:
	this.category = 'matreshka';
	this.someObject = { page: 42 };
-->
<a href="http://example.com/{{category}}/{{someObject.page}}">A link</a>
<!--
Результат:
<a href="http://example.com/matreshka/42">A link</a>
-->
```

> Если фигурные скобки не устраивают, поменяйте их на что-то другое, используя {@link Matreshka.parserBrackets}

#### Зачем нужен такой метод?
В случае, если вы разрабатываете большую форму со стандартными HTML5 полями, метод поможет сохранить время на объявление многочисленных привязок. Кроме этого, ``parseBindings`` полезен в случае создания очень простой коллекции, не требующей реализации сложной {@link Matreshka.Array#Model модели}.

#### Не противоречит ли это идеологии Матрешки ("вся логика должна быть заключена в JavaScript файле")?
Нет, в парсере не предусмотрено циклов, условных операторов и любой другой логики. Объявление простых привязок это всё, что доступно разработчику, использующему ``parseBindings``.

@param {string|node|$nodes} node - HTML строка, селектор, DOM узел или коллекция DOM узлов
@param {eventOptions} [eventOptions] - Объект события, который будет передан во все вызовы метода {@link Matreshka#bindNode}
@returns {$nodes} Коллекция DOM узлов, переданная в функцию в качестве аргумента
@example <caption>Парсинг заданного узла</caption>
this.parseBindings(node);

@example <caption>Парсинг узла по селектору</caption>
this.parseBindings('.my-node');

@example <caption>Парсинг HTML строки</caption>
const $node = this.parseBindings('<h3>Hello, {{name}}</h3>');
this.name = 'Arthur Philip Dent';
*/
