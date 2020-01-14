/**
@method Seemple#set
@importance 1
@fires change
@fires change:KEY
@fires beforechange
@fires beforechange:KEY
@summary Встановлює значення властивості, дозволяючи передати об'єкт події в якості третьої аргументу
@desc Список підтримуваних прапорів:
+ ``silent`` - не викликати події ``change`` і ``change:KEY``
+ ``silentHTML`` - не змінювати стан прив'язаних елементів
+ ``force`` - викликати події ``change`` і ``change:KEY`` навіть якщо значення властивості не змінилося
+ ``forceHTML`` - змінити стан прив'язаного елемента, навіть якщо значення властивості не змінилося. Ця опція потрібна, якщо прив'язаний елемент був відмальований після прив'язки (наприклад, в ``select`` були додані теги ``option``)
+ ``skipMediator`` - запобігає трансформацію властивості медіатором (див. {@link Seemple#mediate})
+ ``skipCalc`` - запобігає роботу залежностей, створених за допомогою {@link Seemple#calc}

> У метода є {@link Seemple.set статичний аналог}.

@param {string} key - Ключ
@param {*} value - Значення
@param {eventOptions} [eventOptions] - Об'єкт події
@example
this.on('change: myKey', evt => {
	alert(evt.value);
});

// Те ж саме, що і this['myKey'] = 3
// або this.myKey = 3
// виводить на екран 3
this.set('myKey', 3);
@example <caption>Використання ``eventOptions``</caption>
this.on('change:myKey', evt => {
	alert(evt.value);
});

// alert не спрацює
this.set('myKey', 4, {
	silent: true
});

@example <caption>Передача даних в обробник</caption>
this.on('change:myKey', evt => {
	alert(evt.myCustomFlag);
});

// Виводить на екран 42
this.set('myKey', 4, {
	myCustomFlag: 42
});
*/


/**
@method Seemple#set
@importance 1
@variation 2
@summary Альтернативний синтаксис методу {@link Seemple#set} "ключ-значення"
@param {object} keyValuePairs - Об'єкт, що містить пари ключ-значення
@param {eventOptions} [eventOptions] - Об'єкт події
@example
this.set({
	myKey1: 1,
	myKey2: 2
});
@example <caption>Передача ``eventOptions`` в якості второго аргумента</caption>
this.set({
	myKey: 3
}, {
	myFlag: 'foo'
});
*/
