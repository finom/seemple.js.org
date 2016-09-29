/**
@method Matreshka#parseBindings
@importance 2
@since 1.1
@summary Парсить DOM дерево, оголошуючи прив'язки властивостей, взятих в подвійні фігурні дужки.
@desc Починаючи з версії 1.1, Matreshka.js включає в себе простий DOM парсер, що обробляє синтаксичні конструкції, укладені в подвійні фігурні дужки. Метод ``parseBindings`` першим аргументом приймає HTML строку, DOM вузол або селектор, відповідний DOM вузлу.

Так як метод є DOM шаблонізатором (а не строковим HTML шаблонізатором), всі дочірні DOM вузли переданого елемента залишаються в своєму колишньому стані (наприклад, DOM події не затираються).

#### Підтримуваний синтаксис.
1. HTML прив'язка
```html
<!--
Створить текстовий вузол на місці {{user.name}}
і зв'яже властивість name з об'єкта user з цим вузлом
JS: this.user = {name: 'Joe'}
-->
<span>Hello, {{user.name}}</span>
```

2. Прив'язка елементів форм.
```html
<!--
Зв'яже властивість "x" об'єкту з текстовим
полем (двостороння прив'язка)
JS: this.x = 'some value';
-->
<input type="text" value="{{x}}">
```
```html
<!--
Для прив'язки textarea і select потрібно використовувати атрибут value
-->
<textarea value="{{x}}"></textarea>
<select value="{{x}}">...</select>
```
```html
<!--
Зв'яже властивість "x" об'єкту з чекбоксом
(двостороння прив'язка)
JS: this.x = true;
-->
<input type="checkbox" checked="{{x}}">
```

3. Прив'язка атрибутів.
```html
<!--
Значення атрибута href буде залежати
від значень властивостей "category" і "someObject.page"
(одностороння прив'язка)
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

> Якщо фігурні дужки не влаштовують, поміняйте їх на щось інше, використовуючи  {@link Matreshka.parserBrackets}

#### Навіщо потрібен такий метод?
У разі, якщо ви розробляєте велику форму зі стандартними HTML5 полями, метод допоможе зберегти час на оголошення численних прив'язок. Крім цього, ``parseBindings`` корисний у разі створення дуже простих колекцій, які не потребують реалізації складної {@link Matreshka.Array#Model моделі}.

#### Чи не суперечить це ідеології Matreshka.js ("вся логіка повинна бути укладена в JavaScript файлі")?
Ні, в парсером не передбачено циклів, умовних операторів і будь-якої іншої логіки. Оголошення простих прив'язок це все, що робить ``parseBindings``.

@param {string|node|$nodes} node - HTML строка, селектор, DOM вузол або колекція DOM вузлів HTML
@param {eventOptions} [eventOptions] - Об'єкт події, який буде переданий у всі внутрішні виклики методу {@link Matreshka#bindNode}
@returns {$nodes} Колекція DOM вузлів, передана в функцію як аргумент
@example <caption>Парсинг заданого вузла</caption>
this.parseBindings(node);

@example <caption>Парсинг вузла по селектору</caption>
this.parseBindings('.my-node');

@example <caption>Парсинг HTML строки</caption>
const $node = this.parseBindings('<h3>Hello, {{name}}</h3>');
this.name = 'Arthur Philip Dent';
*/
