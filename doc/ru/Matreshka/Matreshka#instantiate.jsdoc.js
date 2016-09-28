/**
@method Matreshka#instantiate
@oldlink #!Matreshka-setClassFor
@importance 2
@since 1.1
@summary Создаёт фиксированный экземпляр класса
@desc
> Обратите внимание, что у метода есть {@link Matreshka.instantiate статичный аналог}.

Метод создаёт и фиксирует экземпляр класса в качестве значения заданного свойства. При попытке переопределить свойство, вместо самого переопределения, экземпляр обновляется. Таким образом достигается целостность приложения, сделанном на базе Matreshka.

> Метод является надстройкой над {@link Matreshka#mediate} и переопределяет медиатор.

Экземпляр класса создается во время запуска метода ``instantiate``. Первым аргументом конструктора класса становится текущее значение свойства. В конструкторе класса необходимо предусмотреть то, что в него попадет либо ``undefined`` (если свойство не содержало до этого никаких данных), либо объект, с которым нужно что-то сделать (например, расширить экземпляр класса свойствами объекта).

> На деле это выглядит просто: вы создаете обычный класс, который почти всегда принимает какие-нибудь данные, которые нужно обработать (например, использовать их в методе {@link Matreshka.Object#setData}).

При попытке присвоить свойству другое значение, внутренний механизм метода ``instantiate``, вместо присваивания, делает следующее:
- Если указана функция ``updateCallback``, метод запускает его с двумя аргументами: текущим значением свойства и данными, которые код пытается присвоить.
- Если заданный класс унаследован от {@link Matreshka.Object}, экземпляр обновляется новыми данными, используя метод {@link Matreshka.Object#setData} с флагом ``replaceData=true``.
- Если заданный класс унаследован от {@link Matreshka.Array}, экземпляр обновляется новыми данными, используя метод {@link Matreshka.Array#recreate}.
- Если не указана функция ``updateCallback`` и если класс не унаследован от {@link Matreshka.Object} или {@link Matreshka.Array}, экземпляр расширяется свойствами объекта, который код пытается присвоить.

> Особенностью метода является отсутствие ограничений на источник класса. В качестве класса может выступать любая функция-конструктор. которая инициализируется с помощью оператора ``new``, а не только наследники {@link Matreshka}.

@param {string|array} key - Имя свойства или массив имен свойств
@param {function} class - Класс, чей экземпляр становится значением свойства
@param {function} [updateCallback] - Функция, вызывающаяся при каждой попытке присвоить новые данные свойству, позволяющая кастомизировать логику обновления экземпляра класса новыми данными. Функция принимает два аргумента: текущее значение свойства (экземпляр класса) и данные, которые пытаются присвоить.

@returns {object} self

@example
class MyClass {
    // ...
}

// ...

this.instantiate('x', MyClass);

// пытаемся присвоить свойству другое значение
this.x = { a: 42 };

// this.x по-прежнему экземпляр класса MyClass
alert(this.x instanceof MyClass); // true
alert(this.x.a); // 42
@example <caption>Использование ``updateCallback``.</caption>
this.instantiate('x', MyClass, (instance, data) => {
	updateSomeHow(instance, data);
});
@example <caption>Получение родителя и имени свойства. Кроме данных (первый аргумент), в конструктор создаваемого класса, передается ссылка на объект, вызвавший ``instantiate`` и имя созданного свойства</caption>
class MyClass extends Matreshka {
	constructor(data, parent, key) {
		// parent - это экземпляр MyParentClass,
        // который создал свойство
		// key - имя свойства ("х")
	}
}

const MyParentClass etends Matreshka {
    constructor() {
        this.instantiate('x', MyClass);
    }
}

@example <caption>Нестандартный способ использования ``updateCallback`` для игнорирования любых изменений свойства.</caption>
this.instantiate('x', SubClass, () => {});
@example <caption>В случае, если ваш класс не подерживает использование оператора ``new``, вместо ``instantiate`` воспользуйтесь методом {@link Matreshka#mediate}.</caption>
this.mediate('x', (data, currentValue) => {
	return currentValue instanceof SomeClass
		? Object.assign(currentValue, data)
		: SomeLib.initInstance(SomeClass, data);
});
@example <caption>Абстрактный пример с данными большой вложенности (для краткости используется синтаксис class instance fields)</caption>
// app.js
class App extends Matreshka {
	constructor(appData) {
		this.appData = appData;
		this.instantiate('appData', AppData);
	}
}

// app-data.js
class AppData extends Matreshka.Object {
	constructor(data) {
		super(data)
			.instantiate({
				friends: Friends,
				settins: Settings
			});
	}
}

// friend.js
class Friend extends Matreshka.Object {
	constructor(data) {
		super(data);
	}
}

// friends.js
class Friends extends Matreshka.Array {
	Model = Friend;
	trackBy = 'id';
	constructor(data) {
		super(...data);
	}
}

// settings.js
class Settings extends Matreshka.Object {
	constructor(data) {
		super(data)
			.instantiate('credentials', Credentials);
	}
}

// credentials.js
class Credentials extends Matreshka.Object {
	constructor(data) {
		super(data);
	}
}

// app-init.js
var app = new App({
	settings: {
		name: 'Vasiliy Vasiliev',
		credentials: {
			email: 'vasia.vasia@gmail.com'
		}
	},
	friends: [{
		name: 'Yulia Zuyeva',
		id: 1
	}, {
		name: 'Konstantin Konstantinopolsky',
		id: 2
	}, {
		name: 'nagibator3000',
		id: 3
	}]
});

// данные можно сериализовать и передать на сервер
JSON.stringify(app.appData);

// потом просто присвоить новые данные свойству appData
// при этом, структура классов не изменится
app.appData = {
	settings: {
		name: 'Petr Petrov',
		credentials: {
			email: 'petr.petrov@gmail.com'
		}
	},
	friends: [{
		name: 'Yulechka Zuyeva',
		id: 1
	}, {
		name: 'Konstantin Konstantinopolsky',
		id: 2
	}]
};
*/


/**
@method Matreshka#instantiate
@oldlink #!Matreshka-setClassFor(2)
@importance 2
@variation 2
@since 1.1
@summary Альтернативный синтаксис метода {@link Matreshka#instantiate}, принимающий в качестве аргумента объект "ключ-класс"
@param {object} keyClassPairs - Объект со свойствами ключ-класс
@param {function} [updateCallback] - Функция, вызывающаяся при каждой попытке присвоить новые данные свойству.

@returns {object} self

@example
this.instantiate({
	x: Class1,
	y: Class2,
	z: Class3
}, (instance, data) => {
	instance.doSomethingWith(data);
});
*/
