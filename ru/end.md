## [Что нового?](#whats-new)
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
=======
## [Переход на новую версию](#how-to-update)
Переход на версию 1.0 с любой предыдущей версии должен произойти относительно безболезненно, хотя и требует вмешательства в старый код.
* Сначала нужно обновиться до переходной версии 0.4, которая включает все исправления и нововведения, для первой версии.
* После обновления вы увидите в консоли исключения с инструкциями, что нужно исправить, например убрать вызов устаревшего метода ``initMK``. Пользуясь инструментами разработчика, отследите источники исключений с помощью stack trace. Так же, можете воспользоваться поиском по JavaScript файлам для отслеживания поиска устаревших методов.
* Потестируйте своё приложение и, если исключения больше не возникают, обновитесь до версии 1.0.