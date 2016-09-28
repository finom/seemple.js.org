/**
@method Matreshka#instantiate
@oldlink #!Matreshka-setClassFor
@importance 2
@since 1.1
@summary Створює фіксований екземпляр класу
@desc
> Зверніть увагу, що у метода є {@link Matreshka.instantiate статичний аналог}.

Метод створює і фіксує екземпляр класу в якості значення заданогї властивості. При спробі перевизначити властивість, замість самого перевизначення, екземпляр оновлюється. Таким чином досягається цілісність програми, зробленої на базі Matreshka.js.

> Метод є надбудовою над {@link Matreshka#mediate} і перевизначає медіатор.

Екземпляр класу створюється під час запуску методу ``instantiate``. Першим аргументом конструктора класу стає поточне значення властивості. У конструкторі класу необхідно передбачити те, що в нього потрапить або ``undefined`` (якщо властивість не містила до цього ніяких даних), або об'єкт, з яким треба щось зробити (наприклад, розширити екземпляр класу властивостями об'єкта).

> На ділі це виглядає просто: ви створюєте звичайний клас, який майже завжди приймає якісь дані, які потрібно обробити (наприклад, використовувати їх в методі {@link Matreshka.Object#setData}).

При спробі привласнити властивості інше значення, внутрішній механізм методу ``instantiate``, замість присвоювання, робить наступне:
- Якщо вказана функція ``updateCallback``, метод запускає його з двома аргументами: поточним значенням властивості і даними, які код намагається привласнити.
- Якщо заданий клас успадкований від {@link Matreshka.Object}, екземпляр оновлюється новими даними, використовуючи метод {@link Matreshka.Object#setData} з прапором ``replaceData=true``.
- Якщо заданий клас успадкований від {@link Matreshka.Array}, екземпляр оновлюється новими даними, використовуючи метод {@link Matreshka.Array#recreate}.
- Якщо не вказана функція ``updateCallback`` і якщо класі не успадкований від {@link Matreshka.Object} або {@link Matreshka.Array}, екземпляр розширюється властивостями об'єкта, який код намагається привласнити.

> Особливістю методу є відсутність обмежень на джерело класу. Класом може виступати будь-яка функція-конструктор. яка ініціалізується за допомогою оператора `` new``, а не тільки спадкоємці {@link Matreshka}.

@param {string|array} key - Ім'я властивості або масив імен властивостей
@param {function} class - Клас, чий екземпляр стає значенням властивості
@param {function} [updateCallback] - Функція, викликається при кожній спробі присвоїти чергові дані властивості, що дозволяє кастомізувати логіку поновлення екземпляра класу новими даними. Функція приймає два аргументи: поточне значення властивості (екземпляр класу) і дані, які намагаються привласнити.

@returns {object} self

@example
class MyClass {
    // ...
}

// ...

this.instantiate('x', MyClass);

// намагаємося привласнити властивості інше значення
this.x = { a: 42 };

// this.x як і раніше екземпляр класу MyClass
alert(this.x instanceof MyClass); // true
alert(this.x.a); // 42
@example <caption>Використання ``updateCallback``.</caption>
this.instantiate('x', MyClass, (instance, data) => {
	updateSomeHow(instance, data);
});
@example <caption>Отримання батьківского об'єкту та імені властивості. Крім даних (перший аргумент), в конструктор створюваного класу, передається посилання на об'єкт, що викликав ``instantiate`` та ім'я створеної властивості</caption>
class MyClass extends Matreshka {
	constructor(data, parent, key) {
		// parent - це екземпляр MyParentClass,
        // який створив властивість
		// key - им'я властивості ("х")
	}
}

const MyParentClass etends Matreshka {
    constructor() {
        this.instantiate('x', MyClass);
    }
}

@example <caption>Нестандартний спосіб використання ``updateCallback`` для ігнорування будь-яких змін властивості</caption>
this.instantiate('x', SubClass, () => {});
@example <caption>У разі, якщо ваш клас не підтримує використання оператора ``new``, замість ``instantiate`` скористайтеся методом {@link Matreshka#mediate}.</caption>
this.mediate('x', (data, currentValue) => {
	return currentValue instanceof SomeClass
		? Object.assign(currentValue, data)
		: SomeLib.initInstance(SomeClass, data);
});
@example <caption>Абстрактний приклад з даними великий вкладеності (для лаконічності використовується синтаксис class instance fields)</caption>
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

// дані можна серіалізувати та передати на сервер
JSON.stringify(app.appData);

// потім просто присвоїти чергові дані властивості appData
// при цьому, структура класів не зміниться
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
@summary Альтернативный синтаксис методу {@link Matreshka#instantiate}, який дозволяє приймати об'єкт ключ-клас в якості аргументу
@param {object} keyClassPairs - Об'єкт з властивостями ключ-клас
@param {function} [updateCallback] - Функція, яка викликається при кожній спробі присвоїти нові данні властивості.

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
