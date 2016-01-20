=======(((
	"id": "!matreshka-magic",
	"data-since": 1.1
)))

## [MatreshkaMagic](#!matreshka-magic)
Некоторые разработчики не нуждаются в богатом функционале Матрешки, но хотят пользоваться потрясающими утилитами, имеющимися во фреймворке. Поэтому, было решено создать новую, компактную библиотеку, которая называется **MatreshkaMagic**. Библиотека не включает в себя классы ({@link Matreshka}, {@link Matreshka.Object}, {@link Matreshka.Array} и функцию {@link Class}), но содержит все статичные методы и свойства класса {@link Matreshka}:

- {@link Matreshka.on}
- {@link Matreshka.once}
- {@link Matreshka.onDebounce}
- {@link Matreshka.mediate}
- {@link Matreshka.setClassFor}
- {@link Matreshka.linkProps}
- {@link Matreshka.off}
- {@link Matreshka.trigger}
- {@link Matreshka.bindNode}
- {@link Matreshka.bindOptionalNode}
- {@link Matreshka.unbindNode}
- {@link Matreshka.selectAll}
- {@link Matreshka.select}
- {@link Matreshka.boundAll}
- {@link Matreshka.$bound}
- {@link Matreshka.bound}
- {@link Matreshka.get}
- {@link Matreshka.set}
- {@link Matreshka.parseBindings}
- {@link Matreshka.remove}
- {@link Matreshka.define}
- {@link Matreshka.defineGetter}
- {@link Matreshka.defineSetter}
- {@link Matreshka.trim}
- {@link Matreshka.toArray}
- {@link Matreshka.extend}
- {@link Matreshka.each}
- {@link Matreshka.randomString}
- {@link Matreshka.binders}
- {@link Matreshka.defaultBinders}
- {@link Matreshka.lookForBinder}
- {@link Matreshka.debounce}
- {@link Matreshka.noop}
- {@link Matreshka.$(static) Matreshka.$}
- {@link Matreshka.$b}
- {@link Matreshka.useAs$}
- {@link Matreshka.version}
- {@link Matreshka.deepFind}
- {@link Matreshka.bindSandbox}

Библиотека находится в папке ``/magic/`` репозитория на [github](https://github.com/finom/matreshka). Подключив скрипт с помощью тега ``script``, программисту доступна глобальная переменная ``MatreshkaMagic`` и её краткий вариант ``magic``. Переменная - это обычный объект с методами.

```html
<script src="magic/matreshka-magic.min.js"></script>
```
```js
var object = {};
magic.bindNode(object, 'x', '.my-node');
magic.linkProps(object, 'y', 'x z', function(x, z) {
	return x + z;
});
magic.mediate(object, 'z', Number);
// и т. д.
```

При использовании AMD или CJS, глобальные переменные не создаются:
```js
require(['magic/matreshka-magic.min'], function(magic) {
	//...
});
```

```js
var magic = require('magic/matreshka-magic.min');
```

На момент написания этой документации, файл **matreshka-magic.min.js** занимает чуть меньше 30КБ в несжатом виде против 46КБ **matreshka.min.js**. Если на каком-то этапе потребуется подключить весь фреймворк в проект, нужно лишь изменить пути к файлу скрипта и поменять имена переменных с ``magic`` или ``MatreshkaMagic`` на ``MK`` или ``Matreshka`` (второе обязательно только в том случае, если вы не используете AMD или CJS в проекте).

Обратите внимание. Фреймворк Матрешка работает в Internet Explorer 8 благодаря хакам, возвращающим из конструктора объект ``XDomainRequest``, вместо "чистого" JavaScript объекта. Так как MatreshkaMagic позволяет работать исключительно с произвольными объектами, поддeржка IE8 для MatreshkaMagic невозможна. Это значит, библиотека работает везде, включая IE9+.



=======(((
	"id": "!whats-new"
)))

## [Что нового?](#!whats-new)
Не забывайте голосовать за новые возможности в [trello](https://trello.com/b/E5KcQESk/matreshka-js-features).

### [Матрешка 1.5.2](https://github.com/finom/matreshka/releases/tag/v1.5.2)
- ``parseBindings`` некорректно обрабатывал байндинги к радиокнопкам.
- Обновлены зависимости. Теперь в тестах используется Babel 6.

### [Матрешка 1.5.1](https://github.com/finom/matreshka/releases/tag/v1.5.1)
- Исправлен баг: в ``MK.Object`` отсутствует ``Symbol.iterator``.

### [Матрешка 1.5.0](https://github.com/finom/matreshka/releases/tag/v1.5.0)
* Аргумент ``setOnInit`` заменен на объект ``eventOptions`` в методе {@link Matreshka#linkProps} (старый вариант по-прежнему будет работать). Смотрите обновленную документацию к методу.
	* Добавлена поддержка возможности передачи специальных флагов или данных для обработчика изменения свойства, контроллируемого {@link Matreshka#linkProps}.
	* Добавлен флаг ``debounce``, оптимизирующий многократные изменения свойств, от которых зависит целевое свойство
	* Добавлен флаг ``setOnInit``
* Расширен список флагов для {@link Matreshka.bindNode}.
	* Добавлен флаг ``debounce``, оптимизирующий обращения к DOM
	* Исправлена проблема [#26](https://github.com/matreshkajs/matreshka/issues/26) за счет флага ``deep: false``, который включает игнорирование точек в имени свойства.
* Добавлен метод {@link Matreshka.deepFind}.
* Добавлен метод {@link Matreshka#bindSandbox}
* Теперь можно менять скобки {@link Matreshka#parseBindings парсера}, используя объект {@link Matreshka.parserBrackets}.
* При удалении ключей, отвеающих за данные в {@link Matreshka.Object} генерируются события ``remove`` и ``modify``.
* Balalaika переименована в bQuery по причине того, что 90% библиотеки переписано с нуля под нужды Матрешки.
* Многократное увеличение производительности метода {@link Matreshka.Array#METHOD splice} при рендеринге.
* Если в качестве {@link Matreshka.Array#Model} передать что-то отличное от ``function`` или ``null``, генерируется исключение.
* Исправлен баг: конструктор класса, переданный в {@link Matreshka.Array#Model} в некоторых случаях получал неверный индекс.


### [Матрешка 1.4.1](https://github.com/finom/matreshka/releases/tag/v1.4.1)
* В функцию {@link Class} вторым аргументом можно передать объект со статичными свойствами и методами
* {@link Matreshka.Array#Model} получает индекс в качестве третьего аргумента
* Классы, использующиеся в {@link Matreshka#setClassFor} получают ключ в качестве третьего аргумента
* {@link Matreshka#bound} И {@link Matreshka#$bound} поддерживают путь к ключу (например, ``a.b.c.d``)
* {@link Matreshka.binders.file} генерирует понятную ошибку, если ``FileReader`` не поддерживается браузером
* Улучшена производительность Балалайки
* Исправлен баг: ``Matreshka.Array`` не мог принудительно перерисовывать кастомные объекты
* Исправлен баг: ``Matreshka.Array`` не позволял перемещать песочницу между коллекциями
* Теперь можно удалять делегированные DOM события методом {@link Matreshka#off}
* Не использовать кастомную логику делегированных событий, если подключена jQuery
* Вся логика, отвечающая за делегированные DOM события перемещена в Балалайку
* Исправлены баги небраузерного окружения (некоторые фичи Матрешки можно использовать в nodejs)


### [Матрешка 1.4.0](https://github.com/finom/matreshka/releases/tag/v1.4.0)
* Стандартный байндер для тега ``output`` {@link Matreshka.binders.output}
* Байндер ``visibility`` переименован в {@link Matreshka.binders.display} во избежания путаницы с CSS свойством ``visibility`` (старое название будет по-прежнему работать	)
* При установке {@link Matreshka.Array#itemRenderer} доступен флаг ``forceRerender: false``
* Событие ``afterrender``, которое срабатывает после небольшой задержки, следующей за вставкой элемента в контейнер (см. {@link Matreshka.Array#itemRenderer})
* {@link Matreshka#trigger} теперь умеет генерировать нативные DOM события (``"click::x(.selector)"``), которые можно отловить ``addEventListener``
* Поддержка Opera 11.6+ (было 12+) и Firefox 8+ (было 15+)
* Ускорен метод {@link Matreshka.Array#pull}
* Исправлена проблема удаления DOM событий, используя метод {@link Matreshka#off}
* Исправлена [небольшая проблема](https://github.com/matreshkajs/matreshka/issues/19) в методе {@link Matreshka#mediate}
* Исправлена проблема работы {@link Matreshka.binders.dataset} в Internet Explorer
* Все байндеры покрыты тестами
* Другие небольшие исправления


### [Матрешка 1.3.3](https://github.com/finom/matreshka/releases/tag/v1.3.3)
* Исправлен баг рендеринга коллекций и вызова события ``modify`` при использовании методов ``reverse`` и ``sort``

### [Матрешка 1.3.2](https://github.com/finom/matreshka/releases/tag/v1.3.2)
* Устранена проблема "Cannot find module 'matreshka'" при использовании Browserify.

### [Матрешка 1.3.1](https://github.com/finom/matreshka/releases/tag/v1.3.1)
* Исправлена проблема импорта AMD модуля при использовании SystemJS Builder.

### [Матрешка 1.3.0](https://github.com/finom/matreshka/releases/tag/v1.3.0)
* Новый метод  {@link Matreshka.Array#restore}
* Некоторые байндеры из {@link Matreshka.binders} переименованы (старые названия будут по-прежнему работать)
	* ``innerHTML`` -> {@link Matreshka.binders.html html}
	* ``innerText`` -> {@link Matreshka.binders.text text}
	* ``property`` -> {@link Matreshka.binders.prop prop}
	* ``attribute`` -> {@link Matreshka.binders.attr attr}
* Байндеры ``html`` и ``text`` поддерживают двустороннее связывание при использовании атрибута ``"contenteditable"``.
* Новые события ``"removeevent"`` и ``"removeevent:NAME"``, вызывающиеся при удалении события.
* {@link Matreshka.Array#itemRenderer} не обязательно должен быть валидным HTML элементом. Теперь, если HTML строка содержит несколько узлов (HTML или текстовых), она оборачивается в ``span``.
* Балалайка поддерживает любые объекты, а не только DOM узлы.
* Изменения в способе подключения исходника Матрешки при помощи AMD.

### [Матрешка 1.2.0](https://github.com/finom/matreshka/releases/tag/v1.2.0)
* Добавлено виртуальное свойство {@link Matreshka.Array#trackBy}
* Исправлена ошибка в {@link Matreshka.to}
* Кастомные селекторы при глубоком связывании работали некорректно

### [Матрешка 1.1.2](https://github.com/finom/matreshka/releases/tag/v1.1.2)
* Улучшена производительность кастомных селекторов (``:bound(KEY)`` и ``:sandbox``)
* Восстановлен {@link Matreshka#parseBindings}

### [Матрешка 1.1.1](https://github.com/finom/matreshka/releases/tag/v1.1.1)
* Поддержка Матрешкой Opera Mini за счет включения ``oMatchesSelector`` для Балалайки

### [Матрешка 1.1.0](https://github.com/finom/matreshka/releases/tag/v1.1.0)
* Упрощенная проверка версии Internet Explorer: используется ``documentMode`` вместо useragent.
* Улучшена производительность {@link Matreshka#parseBindings} и исправлена ошибка для старых WebKit.
* "Глубокие ссылки" для метода {@link Matreshka#linkProps}.

### [Матрешка 1.1.0 RC3](https://github.com/finom/matreshka/releases/tag/v1.1.0-rc3)
* Исправлена ошибка в ``setClassFor``, возникающая в Internet Explorer 8.
* Небольшая оптимизация метода ``off``.
* Восстановлен байндер ``innerText``.

### [Матрешка 1.1.0 RC2](https://github.com/finom/matreshka/releases/tag/v1.1.0-rc2)
* Исправлены некоторые ошибки, возникающие в Internet Explorer 8.
* Небольшая оптимизация метода ``on``.
* Убраны неиспользующиеся псевдо-приватные методы.

### [Матрешка 1.1.0 RC](https://github.com/finom/matreshka/releases/tag/v1.1.0-rc)
#### Новые методы и свойства

* Статичные методы, работающие с любым объектом (полный список методов можно увидеть [здесь](#!matreshka-magic))
* Свойства [Matreshka#nodes](#!Matreshka-nodes) и [Matreshka#$nodes](#!Matreshka-$nodes)
* Метод [Matreshka#setClassFor](#!Matreshka-setClassFor)
* Статичный метод  [Matreshka.to](#!Matreshka.to)
* Метод [Matreshka.trim](#!Matreshka.trim)
* Метод [Matreshka.toArray](#!Matreshka.toArray)
* Простой шаблонизатор [Matreshka#parseBindings](#!Matreshka-parseBindings).
* Новые байндеры
	* [progress](#!Matreshka.binders.progress)
	* [innerText](#!Matreshka.binders.innerText)
	* [style](#!Matreshka.binders.style)
	* [dataset](#!Matreshka.binders.dataset)
	* [file](#!Matreshka.binders.file)
* Статичные методы  [Matreshka.Array.of](#!Matreshka.Array.of) и [Matreshka.Array.from](#!Matreshka.Array.from)
* Новый виртуальный метод [Matreshka.Array#onItemRender](#!Matreshka.Array-onItemRender) и его альтернатива ``onRender`` для элементов, входящих в массив.

#### Расширение функционала Матрешки

* "Глубокое связывание", позволяющее связать элемент со свойством, находящемся где-то в глубине дерева объектов.
```js
this.bindNode('a.b.c.d', '.my-node');
```
* Изменение синтаксиса делегированных событий и реализация совместимости со старыми приложениями.
```js
this.on('a.b.*.*.e@someevent', f);
```
* Дополнительный синтаксис  [Matreshka#bindNode](#!Matreshka-bindNode)
```js
this.bindNode({
	x: '.my-x-node',
	y: ['.my-y-node', MK.binders.className()],
	z: ['.my-z-node', {
		setValue: function(v) {...}
	}]
})
```
* Новые вариации методов [Matreshka#on](#!Matreshka-on), [Matreshka#once](#!Matreshka-once), [Matreshka#onDebounce](#!Matreshka-onDebounce), позволяющие передать объект событие-обработчик.
* Улучшенный багрепорт в случае, если нода не найдена при использовании [Matreshka#bindNode](#!Matreshka-bindNode). В тексте ошибки теперь видно селектор, а не только ключ.
* ``getValue`` для старых байндеров (для получения значения ноды в момент привязки).
	* [innerHTML](#!Matreshka.binders.innerHTML)
	* [className](#!Matreshka.binders.className)
	* [property](#!Matreshka.binders.property)
	* [attribute](#!Matreshka.binders.attribute)


* Флаг ``forceRerender`` для [Matreshka.Array#rerender](#!Matreshka.Array-rerender).
* Рендеринг любых объектов в [Matreshka.Array](#!Matreshka.Array).
* Включение шаблонизатора для  [Matreshka.Array#renderer](#!Matreshka.Array-renderer) по умолчанию.
* Возможность создавать DOM дерево произвольной вложенности с помощью функции [$b.create](#!$b).
* Возврат ``this`` из всех конструкторов для красивого цепочечного вызова после ``super`` в ECMAScript 2015.
```js
class X extends Matreshka.Array {
	constructor(data) {
		super(...data).bindNode(/*...*/);
	}
}
```

#### События

* Новые события: ``beforechange`` и ``beforechange:KEY``, вызывающиеся перед изменением свойства.
* Новые события: ``addevent`` и ``addevent:NAME`` для отслеживания добавления новых событий.

#### Исправления

* [Matreshka.Object#jset](#!Matreshka.Object#jset) не генерирует исключение, если передан ``null``.
* Исправлена ошибка зацикливания [Matreshka#linkProps](#!Matreshka-linkProps) в некоторых специфичных случаях.
* Исправлен кейс, когда флаг ``forceHTML`` не срабатывал в методе [Matreshka.#set](#!Matreshka-set)
* Исправлен баг в методе [Matreshka.Array#concat](#!Matreshka.Array-METHOD).
* Исправление небольшого бага для старых WebKit браузеров при использовании шаблонизатора.
* Исправлен баг в MacOS, появляющися при использовании [Matreshka#mediate](#!Matreshka-mediate).
* Рендерить массивы, даже если в модифицирующий метод передан ``silent: true``.
* Мелкие исправления.

#### Другие новости

* Объекты, использующиеся Матрешкой получают свойство ``Symbol(matreshka)`` вместо ``__events``, ``__special`` и ``__id``.
* Добавлены автоматические тесты (на текущий момент, 145 штук).
* Исходный код разбит на мелкие кусочки.
* Многократное увеличение производительности фреймворка. В некоторых местах производительность улучшена в 40 (!) раз.
* Библиотека [MatreshkaMagic](#!matreshka-magic).


### [Матрешка 1.0.7](https://github.com/finom/matreshka/releases/tag/v1.0.7)
* Устранена ошибка в MacOS, возникающая при использовании {@link Matreshka#mediate}

### [Матрешка 1.0.6](https://github.com/finom/matreshka/releases/tag/v1.0.6)
* Устранена проблема работы AMD в минифицированной версии

### [Матрешка 1.0.5](https://github.com/finom/matreshka/releases/tag/v1.0.5)
* Исправлен баг: не работает байндинг при автозаполнении, когда текст вводится руками, а браузер выдаёт подсказки
* Теперь ловится событие ``input`` вместо ``paste`` + ``change`` в байндерах ``input`` и ``textarea`` (кроме IE8)
* ``setValue`` теперь вызывается при нестрогом неравенстве (вместо строгого). Этим исправлением убрана проблема перепрыгивания курсора в конец строки при использовании {@link Matreshka#mediate}.
* {@link Matreshka.version} обновляется автоматически при сборке
* Исправлен баг: отвязанные элементы можно было получить из ``$bound``/``bound``, ``select``/``$``
* Небольшой рефакторинг

### [Матрешка 1.0.4](https://github.com/finom/matreshka/releases/tag/v1.0.4)
* Исправлена ошибка рендеринга, связанная с удалением элементов {@link Matreshka.Array}.

### [Матрешка 1.0.3](https://github.com/finom/matreshka/releases/tag/v1.0.3)
* Исправлена ошибка {@link Matreshka.binders.select}, возникающая при использовании аргумента ``multiple``
* Серьезная оптимизация скорости большинства методов {@link Matreshka.Array}
* Исправлены неочевидные ошибки рендеринга {@link Matreshka.Array}

### [Матрешка 1.0.2](https://github.com/finom/matreshka/releases/tag/v1.0.2)
* Исправлены ошибки {@link Matreshka.Array} для Internet Explorer 8
* Небольшая оптимизация методов {@link Matreshka.Array}

### [Матрешка 1.0.1](https://github.com/finom/matreshka/releases/tag/v1.0.1)
* Серьезная оптимизация скорости всех методов {@link Matreshka.Array}

### [Матрешка 1.0](https://github.com/finom/matreshka/releases/tag/v1.0.0)
* Убраны предупреждения об использовании устаревших методов и событий, очищен код
* Несколько небольших исправлений

### [Матрешка 0.4.1](https://github.com/finom/matreshka/releases/tag/v0.4.1)
* Устранена проблема со сборкой

### [Матрешка 0.4](https://github.com/finom/matreshka/releases/tag/v0.4.0)
* Исправлена небольшая ошибка при работе с Babel
* Все файлы проекта теперь используют строгий режим
* Новое свойство {@link Matreshka#sandbox}
* Новое свойство {@link Matreshka#$sandbox}
* Ключ ``value`` объекта события
* Ключ ``element`` объекта события переименован в ``node``
* Ключ ``elements`` объекта события переименован в ``$nodes``
* Ключ ``fromElement`` объекта события переименован в ``fromNode``
* Ключ ``originaEvent`` для объекта события, содержащее оригинальное DOM событие в случае использования jQuery
* Опция ``moveSandbox`` для ``MK.Array``
* Другие небольшие исправления

### [Матрешка 0.3](https://github.com/finom/matreshka/releases/tag/v0.3.0)
**Новые возможности**
* Метод {@link Matreshka.randomString}
* Метод {@link Matreshka#onDebounce}
* Метод {@link Matreshka#bindOptionalNode}
* Метод {@link Matreshka#delay}
* Методы ``Matreshka.Array``, позволяющие передать объект события (``push_``, ``sort_``, ``splice_``...). См. {@link Matreshka.Array#METHOD_}
* Свойство {@link Matreshka.version}
* Новый односторонний байндер {@link Matreshka.binders.visibility}
* Свойство ``on`` у привязчика может быть функцией
* Добавлен флаг ``skipMediator`` для методов ``Matreshka.Array``
* Переопределение {@link Matreshka.Array#itemRenderer} свойством ``renderer`` дочернего элемента
* Свойство {@link Matreshka.Array#renderIfPossible}
* Функция {@link Matreshka.lookForBinder} теперь статичный метод класса {@link Matreshka}
* Для привязки песочницы теперь используется ключ ``sandbox`` вместо ``__this__``
* События ``addone`` и ``removeone`` для {@link Matreshka.Array}
* {@link Matreshka.Array#push} и {@link Matreshka.Array#unshift} теперь возвращают длину массива вместо себя (как и в нативном массиве)
* Реализованы привязчики для всех HTML5 элементов формы
* Новые служебные флаги для метода  {@link Matreshka#set}: ``silentHTML``, ``skipLinks``
* {@link Matreshka.Array#itemRenderer} теперь поддерживает строку, как значение
* Добавлен ключ ``self`` для всех событий ``Matreshka.Array``
* Можно менять {@link Matreshka.Array#Model} динамически
* Вызывать событие ``change``, если при привязке Матрешка меняет значение свойства на состояние элемента (если свойство не определено и не передан флаг ``assignDefaultValue: false``)
* Новые селекторы: ``:sandbox`` и ``:bound(KEY)``
* Поддержка свойства ``attributes`` для функции ``Balalaika.create``
* Экспериментальный шаблонизатор для {@link Matreshka.Array#itemRenderer} если {@link Matreshka.Array#useBindingsParser} установлен, как ``true``
* Перенесены все привязчики в объект {@link Matreshka.binders}
* {@link Matreshka.Array#pull} теперь поддерживает объект в качестве аргумента
* Короткая запись для делегированных событий DOM внутри песочницы (click::(.selector) вместо click::sandbox(.selector))
* Поддержка цикла ``for..of`` для {@link Matreshka.Array} и {@link Matreshka.Object}
* Свойство ``domEvent`` содержащее объект события для событий DOM
* Делегированные DOM события (``this.on( 'click::something(.x > .y)' )``)

**Устаревшие методы и события**
* Все методы, имя которых начинается с ``silent`` (``silentPush``, ``silentSplice``, ``silentSort`` ...) удалены. Для этих целей теперь используются методы с нижним подчеркиванием в конце имени и флагом ``silent`` (например, ``this.push_(1,2,3, {silent: true})``)
* Метод ``Matreshka#initMK`` удален, теперь используется ленивая инициализация
* Метод ``Matreshka#defineNotEnum`` удален по причине отсутствия в нем потребности
* Matreshka.Array#initializeSmartArray -> {@link Matreshka.Array#rerender}
* Matreshka#setMediator -> {@link Matreshka#mediate}
* Matreshka#bindElement -> {@link Matreshka#bindNode}
* Matreshka#unbindElement -> {@link Matreshka#unbindNode}
* Matreshka#addDependency -> {@link Matreshka#linkProps}
* Matreshka.Array#setItemMediator -> {@link Matreshka.Array#mediateItem}
* Matreshka.Object#addJSONKeys -> {@link Matreshka.Object#addDataKeys}
* Matreshka.Object#removeJSONKeys -> {@link Matreshka.Object#removeDataKeys}
* Matreshka.procrastinate -> {@link Matreshka.debounce}
* Удалено событие ``itemrender`` из Matreshka.Array. Можно использовать ``@render`` вместо него


**Исправленные баги**
* Фиксы в {@link $b Балалайке} для старых браузеров WebKit, например, iOS 5 Safari
* Обработчик DOM события вызывался несколько раз
* {@link Matreshka#off} теперь возвращает себя
* Исправлен баг в {@link Matreshka#defineGetter}
* Исправлен баг в {@link Matreshka.Array#concat}
* Исправлен баг в {@link Matreshka#once}
* Исправлен баг в {@link Matreshka.Array#itemMediator}
* Исправлен баг в механизме рендеринга {@link Matreshka.Array}
* Небольшие исправления в {@link Matreshka#bindNode}
* Небольшие исправления для стандартных байндеров
* Делегированные события не работали для {@link Matreshka.Object}
* Всегда возвращать ``null`` из {@link Matreshka#bound} если элемент не найден
* Исправлен неочевидный баг в {@link Matreshka#set}, возникающий при использовании {@link Matreshka.Array#mediateItem} и {@link Matreshka.Array#linkProps} вместе
* Использовать событие ``delete`` вместо ``remove``
* ``binder.setValue`` вызывался даже если значение свойства не было изменено
* Привязанные HTML элементы не обновлялись после вызова {@link Matreshka#mediate}
* Фиксы для Internet Explorer 8
* Matreshka.lookForBinder теперь возвращает ``undefined`` если байндер не найден
* Генерировать события модификации Matreshka.Array только когда коллекция изменилась


**Изменения в коде**
* Оптимизирована генерация событий
* Созданы методы _on и _off для внутреннего использования и улучшения производительности
* Создан приватный метод Matreshka#_initMK
* Оптимизирован код {@link Matreshka.Object}
* Убран полифил Number.isNaN


=======(((
	"id": "!faq"
)))

## [FAQ](#!faq)
### Имеется ли в Матрешке обертка над ``XMLHttpRequest`` (AJAX)?
Нет. Во-первых есть много прекрасных библиотек, реализующих коммуникации с сервером: некогда популярный [jQuery.ajax](http://api.jquery.com/jquery.ajax/), потрясающая библиотека [qwest](https://github.com/pyrsmk/qwest), основанная на ["промисах"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) и многие другие.

Во-вторых, в качестве альтернативы ``XMLHttpRequest``, все браузеры, возможно, очень скоро получат нативную поддержку [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). ``fetch`` имеет более простое и чистое API, основанное на "промисах", позволяющее избежать катастрофического количества callback'ов и необходимости помнить API ``XMLHttpRequest``. Пока ``fetch`` поддерживается не всем браузерами, можно воспользоваться [популярным полифилом](https://github.com/github/fetch).

> "Промисы" и асинхронные функции из спецификации ECMAScript 7 дают возможность писать великолепной красоты JavaScript код:

```js
async function getData() {
	let resp = await fetch(someUrl);
	let data = await resp.text();

	console.log(data);
}

getData();
```


### Есть ли в Матрешке роутинг?
Нет. Как и в случае с AJAX, в интернете есть полно замечательных библитек, реализующих роутинг, например [director](https://github.com/flatiron/director).

### Как работает Матрешка?
Матрешка использует акцессоры (accessors), в частности, сеттеры (setters) для реализации двустороннего связывания данных и отлова событий изменения свойств. Эта технология существует достаточно давно (Internet Explorer 8 был первым браузером, который включал поддержку ``Object.defineProperty``). Одной из главных особенностей сеттеров, является молниеносная скорость, сравнимая со скоростью работы с обычными свойствами. В производительности акцессоры выигрывают у других решений: ``Object.observe`` и, особенно, dirty-checking.

В качестве примера того, как работает двустороннее связывание (в частности, функция [bindNode](#!Matreshka-bindNode)), взгляните на этот код:
```js
window.bindNode = function bindNode(object, key, node, binder) {
    var value = object[key];
    Object.defineProperty(object, key, {
        get: function() {
            return value;
        },
        set: function(v) {
            binder.setValue.call(node, v);
        }
    });

    node.addEventListener(binder.on, function() {
        value = binder.getValue.call(node);
    });
};
```
Как видите, ничего сложного (для упрощения, функция не поддерживает связь многие-ко-многим).

Пример работы функции можно посмотреть на [jsbin](//jsbin.com/mabetap/7/edit?html,js,output).

### Поддерживает ли Матрешка серверный рендеринг?
К сожалению, (возможно, пока) нет. Матрешка использует DOM шаблонизацию, которая требует наличия на сервере библиотеки, реализующей DOM API. Хорошим примером такой библиотеки является [jsdom](https://github.com/tmpvar/jsdom). Проблема в том, что к серверу присоединяется много клиентов, каждый из которых может запросить соверщенно разные страницы, генерирующиеся динамически. DOM шаблонизация работает заметно медленнее, чем HTML шаблонизация, где шаблоном выступает обычный текст, а не многочисленные DOM объеты.

В качестве примера, можно привести серверный рендеринг React компонентов, которые тоже требуют DOM шаблонизатор. Как правило, эта задача решается хитрыми трюками и рекомендациями использовать кеширование шаблонов (что не всегда возможно, а если возможно, может вызвать утечки памяти). Даже используя лучшие практики и хитроумные решения, обычный текстовый HTML шаблонизатор (скажем, [mustache.js](https://github.com/janl/mustache.js)) решит проблему многократно быстрее, а скорость на сервере, как известно, намного важне, чем на клиенте.

Поэтому, на сегодняшний день, единственной рекомендацией к серверному рендерингу является перекладывание задачи генерации HTML строки на любой текстовый шаблонизатор. Оставим узкоспециализированные задачи выполнять инструментам, делающим это лучше всего.
