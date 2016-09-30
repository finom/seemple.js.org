/**
@class Matreshka.Object
@module matreshka/object
@importance 1
@classdesc ``Matreshka.Object`` - класс, который отвечает за данные вида ключ-значение. Его задачей является отделение служебных свойств от данных, которые можно передать на сервер или сохранить в локальном хранилище. Класс наследуется от класса {@link Matreshka} и включает все его свойства и методы.

Представьте себе, что вы создаёте класс, включающий свойства ``"a"``, ``"b"`` и ``"c"``. Допустим ``"a"`` и ``"b"`` - свойства которые должны быть отправлены на сервер, а свойство ``"c"`` лишь отвечает за некоторое состояние приложения (например, содержит сумму ``"a"`` и ``"b"``). Свойство ``"c"`` не нужно серверу. Поэтому нам нужно отделить **свойства отвечающие за данные** от свойств, которые таковыми не являются.

Для того, чтоб отделить такие свойства от остальных, можно воспользоваться методом {@link Matreshka.Object#addDataKeys}.
```js
this.addDataKeys(['a', 'b']);

this.a = 1;
this.b = 2;
this.c = 3;
```

Если вы заранее не знаете, какие свойства являются данными, можно всегда использовать метод {@link Matreshka.Object#setData}, который не только объявляет свойства, отвечающие за данные, но и сразу устанавливает значения.
```js
this.setData({
	a: 1,
	b: 2
});

this.c = 3;
```

После того, как приложение получило информацию о том, что является данными, экземпляр {@link Matreshka.Object} можно сконвертировать в обычный объект методом {@link Matreshka.Object#toJSON} и передать на сервер или сохранить в локальной БД (например, в ``localStorage``).
```js
// вернет объект { a: 1, b: 2 }
this.toJSON();
```

#### События

При добавлении и изменении свойств, отвечающих за данные генерируется события ``set`` и ``modify``, при удалении - ``remove`` и ``modify``. Т. е. любые изменения данных можно слушать с помощью ``modify``.
```js
this.on('modify', () => {
	alert('Object is modified');
});
```
@param {object} [data] - Данные, входящие в новый экземпляр
@inherits Matreshka
@example <caption>Создание экземпляра с двумя свойствами-данными</caption>
// то же самое, что и new MK.Object().setData({ a: 1, b: 2 });
new MK.Object({ a: 1, b: 2 });

@example <caption>Наследование</caption>
class MyClass extends Matreshka.Object {
	constructor(data) {
		super(data).sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Наследование при помощи функции {@link Matreshka.Class}</caption>
const MyClass = Matreshka.Class({
	extends: Matreshka.Object,
	constructor(data) {
		this.setData(data).sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});
@example <caption>Перебор данных, используя цикл for..of</caption>
const mkObject = new Matreshka.Object({ a: 1, b: 2 });
for(let item of mkObject) {
	console.log(item); // 1 .. 2
}
*/
