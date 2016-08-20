/**
@method Matreshka#set
@importance 1
@fires change
@fires change:KEY
@fires beforechange
@fires beforechange:KEY
@summary Устанавливает значение свойства, позволяя передать объект события в качестве третьего аргумента
@desc Список поддерживаемых флагов:
+ ``silent`` - не вызывать события ``change`` и ``change:KEY``
+ ``silentHTML`` - не менять состояние привязанных элементов
+ ``force`` - вызвать события ``change`` и ``change:KEY`` даже если значение свойства не изменилось
+ ``forceHTML`` - изменить состояние привязанного элемента, даже если значение свойства не изменилось. Эта опция нужна, если привязанный элемент был отрисован после привязки (например, в ``select`` были добавлены теги ``option``)
+ ``skipMediator`` - предотвращает трансформацию свойства медиатором (см. {@link Matreshka#mediate})
+ ``skipCalc`` - предотвращает работу зависимостей, созданных с помощью {@link Matreshka#calc}

> У метода есть {@link Matreshka.set статичный аналог}.

@param {string} key - Ключ
@param {*} value - Значение
@param {eventOptions} [eventOptions] - Объект события
@example
this.on('change:myKey', evt => {
	alert(evt.value);
});

// то же самое, что и this['myKey'] = 3
// или this.myKey = 3
// выводит на экран 3
this.set('myKey', 3);
@example <caption>Используя ``eventOptions``</caption>
this.on('change:myKey', evt => {
	alert(evt.value);
});

// alert не срабатывает
this.set('myKey', 4, {
	silent: true
});

@example <caption>Передача произвольных данных в обработчик</caption>
this.on('change:myKey', evt => {
	alert(evt.myCustomFlag);
});

// выводит на экран 42
this.set('myKey', 4, {
	myCustomFlag: 42
});
*/


/**
@method Matreshka#set
@importance 1
@variation 2
@summary Альтернативный синтаксис метода {@link Matreshka#set} "ключ-значение"
@param {object} keyValuePairs - Объект, содержащий пары ключ-значение
@param {eventOptions} [eventOptions] - Объект события
@example
this.set({
	myKey1: 1,
	myKey2: 2
});
@example <caption>Передача ``eventOptions`` в качестве второго аргумента</caption>
this.set({
	myKey: 3
}, {
	myFlag: 'foo'
});
*/
