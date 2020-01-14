/**
@class Seemple.Object
@module seemple/object
@importance 1
@classdesc ``Seemple.Object`` - клас, який відповідає за дані вида ключ-значення. Його завданням є відділення службових властивостей від даних, які можна передати на сервер або зберегти в локальному сховищі. Клас успадковується від класу {@link Seemple} і включає всі його властивості та методи.

Уявіть собі, що ви створюєте клас, що включає властивості ``"a"``, ``"b"`` і ``"c"``. Припустимо ``"a"`` і ``"b"`` - це властивості які повинні бути відправлені на сервер, а властивість ``"c"`` лише відповідає за деякий стан програми (наприклад, містить суму ``"a"`` і ``"b"``). Властивість ``"c"`` не повинна бути відправлена на сервер. Тому нам потрібно відокремити **властивості, які відповідають за дані**.

Для того, щоб відокремити такі властивості від інших, можна скористатися методом {@link Seemple.Object#addDataKeys}.
```js
this.addDataKeys(['a', 'b']);

this.a = 1;
this.b = 2;
this.c = 3;
```

Якщо ви заздалегідь не знаєте, які властивості є даними, можна завжди використовувати метод {@link Seemple.Object#setData}, який не тільки оголошує властивості, що відповідають за дані, але і відразу встановлює значення.
```js
this.setData({
	a: 1,
	b: 2
});

this.c = 3;
```

Після того, як додаток отримав інформацію про те, що є даними, екземпляр {@link Seemple.Object} можна конвертувати в звичайний об'єкт методом {@link Seemple.Object#toJSON} і передати на сервер або зберегти в локальній БД (наприклад, в ``localStorage``).
```js
// поверне об'єкт { a: 1, b: 2 }
this.toJSON();
```

#### Події

При додаванні і зміні властивостей, що відповідають за дані генеруються події ``set`` і ``modify``, при видаленні - ``remove`` і ``modify``. Тобто будь-які зміни даних можна слухати за допомогою ``modify``.
```js
this.on('modify', () => {
	alert('Object is modified');
});
```
@param {object} [data] - Дані, що входять в новий екземпляр
@inherits Seemple
@example <caption>Створення екземпляра з двома властивостями-даними</caption>
// те ж саме, що і new MK.Object().setData({ a: 1, b: 2 });
new MK.Object({ a: 1, b: 2 });

@example <caption>Спадкування</caption>
class MyClass extends Seemple.Object {
	constructor(data) {
		super(data).sayHello();
	}
	sayHello() {
		alert("Hello World!");
	}
}
@example <caption>Спадкування за допомогою функції {@link Seemple.Class}</caption>
const MyClass = Seemple.Class({
	extends: Seemple.Object,
	constructor(data) {
		this.setData(data).sayHello();
	},
	sayHello() {
		alert("Hello World!");
	}
});
@example <caption>Перебір даних, використовуючи цикл for..of</caption>
const mkObject = new Seemple.Object({ a: 1, b: 2 });
for(let item of mkObject) {
	console.log(item); // 1 .. 2
}
*/
