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
	"id": "!10-reasons"
)))

## [10 причин попробовать Матрешку](#!10-reasons)
### 1. Чистый JavaScript и HTML

Многие фреймворки пытаются починить веб, создавая собственный язык программирования. Идея Матрешки проста: с вебом всё в порядке. Вся логика, которую пишет программист, находится, как и должна, в JavaScript файлах, а HTML остаётся языком разметки гипертекста. Шутка об HTML программисте должна остаться шуткой.

### 2. Минимум сущностей

Матрешка не требует создания избыточных сущностей. Благодаря простому синтаксису привязок, связь между JavaScript и HTML может быть описана там же, где и логика. Программисту не требуется задумываться сразу о нескольких вещах, размышляя о балансе полномочий объектов. Вопрос где прописать обработчик: во “вьюхе” или в контроллере отпадает сам по себе. Хотя, никто не запрещает разделить данные и контроллер, разместив их в разных JS файлах.

### 3. Работай с данными, забудь о представлении

Попробовав популярный (но уступающий под натиском более современных продуктов) фреймворк Backbone, сталкиваешься с серьезным неудобством: объявляя данные, зависящие от UI и UI, зависящий от данных, вам, как правило, требуется создать два обработчика события. Один ловит изменения данных, второй ловит пользовательские действия. Проблема подкрепляется еще тем, что HTML элементы, как правило, совершенно идентичны в рамках operaприложения: ``input``, ``select``, кастомные виджеты из jQuery UI могут многократно встречаться на странице. Программисту, который реализует еще одну “единицу” приложения (например, форму), приходится пользоваться “копи-пастой”.

С Матрешкой всё намного проще. Вам нужно лишь однажды объявить привязку (в одном месте, а не в двух), затем работать с данными (как с обычными JavaScript объектами), забыв, что у нас вообще есть представление.

### 4. Гибкость

Новичку часто непонятно, как перейти на новую архитектуру. Порой, для того, чтоб добавить сторонний виджет, нужно приложить немало усилий, изучая адаптеры, директивы и т. п…

Задавшись вопросом, как прикрутить тот или иной скрипт (например, какой-нибудь jQuery плагин), верным ответом будет, в том числе, «сделаю как знаю». Вывод какого-нибудь виджета, будь то Google Maps или одна из многочисленных галерей, делается так, как указано в официальной документации к виджету. Не надо больше искать в интернете  директивы (которых может и не быть), плагины и пр.

### 5. Ненавязчивая архитектура

Большинство популярных фреймворков закладывают принципы структурирования кода, ограничивая творчество программиста, как архитектора ПО. Это не всегда плохо, хотя часто задаешься вопросом «а почему нужно делать именно так»?..

Матрешка не заставляет использовать определенную структуру проекта, и не принуждает пользоваться хорошими, но, возможно, не самыми удачными решениями. Вы сами выбираете паттерны проектирования и структурирования приложения. Хоть Матрешка и позиционируется, как фреймворк, но, скорее, это библиотека, уменьшающая объем предстоящей работы.

### 6. Меньше кода

Самая главная задача, которая ставилась при разработке фреймворка — решение максимально большого круга задач (в разумных пределах). Поэтому, результирующий код, как правило, выглядит достаточно компактно, особенно, если пользоваться ECMAScript 2015/7.

### 7. Легко понять, что происходит

Из-за ненавязчивости рекомендаций и отсутствии жесткого регламентирования любой, кто не знаком с фреймворком, но хорошо знает JavaScript, скорее всего, разберется в вашем коде (если вы, конечно, сами хороший программист :). При создании методов, одним из важных приоритетов была очевидность их функциональности.

### 8. Легко начать

Для того, чтоб начать работать с Матрешкой, нужно всего лишь знать назначение трех классов и нескольких методов. Остальное — синтаксических сахар. В документации они помечены красным флажком, чтоб было легче ориентироваться.

### 9. Высокая производительность

На это есть две причины:

1) Благодаря использованию акцессоров в качестве "слушателя" данных Матрешка сильно выигрывает у фреймворков, использующих другие подходы (например, dirty-checking).

2) Матрешка напрямую меняет DOM и, при увеличении количества байндингов, скорость приложения уменьшается по линейному закону. Этот способ взаимодействия с элементами на странице ставится в противоположность решений на основе "посредников" между объектной моделью документа и данными. Во фреймворках, использующих так называемый "virtual DOM", при большом количестве элементов (например, при рендеринге коллекций), скорость падает по экспоненте, отбирая у разработчика возможность работы с большими массивами данных.


### 10. Поддержка синтаксиса ECMAScript 2015

Поддержка JavaScript следующего поколения является одной из самых приоритетных задач. На сегодняшний день, Матрешка, кроме основных возможностей ECMAScript 2015/7, поддерживает классы и циклы ``for..of``. В дальнейшем, при развитии языка ES, новые возможности будут добавляться в первую очередь.


=======(((
	"id": "!whats-new"
)))

## [Что нового?](#!whats-new)
Не забывайте голосовать за новые возможности в [trello](https://trello.com/b/E5KcQESk/matreshka-js-features).

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

Пример работы функции можно посмотреть на [jsbin](http://jsbin.com/mabetap/7/edit?html,js,output).

### Поддерживает ли Матрешка серверный рендеринг?
К сожалению, (возможно, пока) нет. Матрешка использует DOM шаблонизацию, которая требует наличия на сервере библиотеки, реализующей DOM API. Хорошим примером такой библиотеки является [jsdom](https://github.com/tmpvar/jsdom). Проблема в том, что к серверу присоединяется много клиентов, каждый из которых может запросить соверщенно разные страницы, генерирующиеся динамически. DOM шаблонизация работает заметно медленнее, чем HTML шаблонизация, где шаблоном выступает обычный текст, а не многочисленные DOM объеты.

В качестве примера, можно привести серверный рендеринг React компонентов, которые тоже требуют DOM шаблонизатор. Как правило, эта задача решается хитрыми трюками и рекомендациями использовать кеширование шаблонов (что не всегда возможно, а если возможно, может вызвать утечки памяти). Даже используя лучшие практики и хитроумные решения, обычный текстовый HTML шаблонизатор (скажем, [mustache.js](https://github.com/janl/mustache.js)) решит проблему многократно быстрее, а скорость на сервере, как известно, намного важне, чем на клиенте.

Поэтому, на сегодняшний день, единственной рекомендацией к серверному рендерингу является перекладывание задачи генерации HTML строки на любой текстовый шаблонизатор. Оставим узкоспециализированные задачи выполнять инструментам, делающим это лучше всего.
