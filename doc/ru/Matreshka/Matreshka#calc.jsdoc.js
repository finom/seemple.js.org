/**
@method Matreshka#calc
@importance 1
@oldlink #!Matreshka-linkProps, #!Matreshka-linkProps(2)
@since 2.0
@summary Создает зависимость значения одного свойства от значений других
@desc Метод ``calc`` создает зависимость значения свойства (аргумент ``target``) от значений других свойств (аргумент ``source``). При изменении ``source``, ``target`` вычисляется автоматически.

> Обратите внимание, что у метода есть {@link Matreshka.calc статичный аналог}, который работает в точности так же, но принимает любой объект в качестве первого аргумента, cдвигая остальные аргументы вправо.
```js
const calc = require('matreshka/calc');
const object = {};
calc(object, target, source, handler, eventOptions);
// вместо this.calc(target, source, handler, eventOptions);
```

Аргумент ``source`` имеет несколько вариаций.

#### Строка

Свойство ``target`` будет зависеть от свойства ``source``.

```js
this.b = 1;
this.calc('a', 'b', b => b * 2);
console.log(this.a); // 2
```

#### Массив строк

Свойство ``target`` будет зависеть от свойств, перечисленных в ``source``.

```js
this.b = 1;
this.c = 2;
this.d = 3;
this.calc('a', ['b', 'c', 'd'], (b, c, d) => b + c + d);
console.log(this.a); // 6
```

#### Объект со свойствами ``object`` и ``key``

В этом случае можно объявить зависимость свойства ``target`` от другого объекта.

```js
const someObject = { b: 1 };
this.calc('a', {
	object: someObject,
	key: 'b'
}, b => b * 2);

console.log(this.a); // 2
```

В качестве свойства ``key`` в объект можно передать массив ключей.

```js
const someObject = {
	b: 1,
	c: 2,
	d: 3
};
this.calc('a', {
	object: someObject,
	key: ['b', 'c', 'd']
}, (b, c, d) => b + c + d);

console.log(this.a); // 6
```

#### Массив объектов со свойствами ``object`` и ``key``

Так можно объявить зависимость свойства от свойств разных объектов.

```js
const someObjectX = {
	b: 1,
	c: 2
};
const someObjectY = {
	d: 3
};
this.calc('a', [{
	object: someObjectX,
	key: ['b', 'c']
}, {
	object: someObjectY,
	key: 'd'
}], (b, c, d) => b + c + d);

console.log(this.a); // 6
```

#### Массив, комбинирующий строки (собственные свойства) и объекты


```js
this.b = 1;
this.c = 2;

const someObject = {
	d: 3,
	e: 4
};

this.calc('a', ['b', 'c', {
	object: someObjectX,
	key: ['d', 'e']
}], (b, c, d, e) => b + c + d + e);

console.log(this.a); // 10
```

Из соображений чистоты кода, комбинировать строки и объекты в массиве ``source`` не рекомендуется. Вместо строк лучше передать объект, у которого свойство ``object`` равно целевому объекту. Пример ниже делает то же самое, что и предыдущий.

```js
this.b = 1;
this.c = 2;

const someObject = {
	d: 3,
	e: 4
};

this.calc('a', [{
	object: this, // целевой объект - это this
	keys: ['b', 'c']
}, {
	object: someObjectX,
	key: ['d', 'e']
}], (b, c, d, e) => b + c + d + e);

console.log(this.a); // 10
```

#### Точка в имени свойства-источника

Если имя ключа содержит точку, метод инициирует зависимость от свойства во вложенном объекте.

```js
this.b = { c: { d: 1 } };
this.e = { f: { g: 2 } };

this.calc('a', ['b.c.d', 'e.f.g'], (d, g) => d + g);

console.log(this.a); // 3
```

То же самое касается и внешних объектов
```js
this.b = { c: { d: 1 } };
const someObject = { e: { f: { g: 2 } } };

this.calc('a', [{
	object: this
	key: 'b.c.d'
}, {
	object: someObject
	key; 'e.f.g'
}], (d, g) => d + g);

console.log(this.a); // 3
```

> Метод защищен от цикличных зависимостей (например a зависит от b, b зависит от c, а c зависит от a) и при ошибке вычислений не блокирует страницу и не бросает исключение о переполнении стека.

Как вы могли заметить, аргументы функции ``handler`` всегда расположены в том же порядке, что и свойства из ``source``.

В случае, если нужно изменить значение свойства-источника и сделать это так, чтоб целевое свойство не было вычислено заново, используйте метод {@link Matreshka#set} с флагом ``skipCalc`` равным ``false``.

```js
this.calc('a', 'b', handler);
this.set('b', newValue, {
    skipCalc: true
});
```

### Важные особенности работы метода и специальные флаги

Четвертым аргументом в метод ``calc`` можно передать объект события ``eventOptions``, содержащий специальные флаги, которые описаны ниже, флаги для метода ``set`` (например, ``silent``), либо кастомные данные, которые передаются в обработчик события ``change:KEY``.

```js
this.on('change:a', evt => {
	console.log(evt.foo); // 'bar'
});

this.calc('a', source, handler, { foo: 'bar' });
```

#### Флаг ``debounceCalc=true``
При вызове метода ``calc`` целевое свойство вычисляется без задержек, но при изменении свойства-источника применяется паттерн debounce. Это значит, что целевое свойство изменится через несколько миллисекунд и только один раз, даже если свойства-источники изменились многократно за короткий промежуток времени.
```js
this.b = 1;
this.c = 2;
this.d = 3;

this.calc('a', ['b', 'c', 'd'], (b, c, d) => b + c + d);

this.on('change:a', () => {
	// обработчик будет вызван один раз несмотря на то,
	// что свойства-источники изменились трижды
	console.log(`a is changed to ${this.a}`); // a is changed to 60
});

this.b = 10;
this.c = 20;
this.d = 30;
console.log(this.a); // 6 вместо 60
```
Для отмены debounce при изменении свойств, т. е. для включения моментального обновления целевого свойства (как было в предыдущих версиях метода), четвертым аргументом метода ``calc`` можно передать флаг ``debounceCalc`` равный ``false``.

```js
this.b = 1;
this.c = 2;
this.d = 3;

this.calc('a', ['b', 'c', 'd'], (b, c, d) => b + c + d, {
	debounceCalc: false
});

this.on('change:a', () => {
	// обработчик будет вызван трижды,
	// каждый раз когда свойства b, c или d меняются

    // a is changed to... 15, 33, 60
	console.log(`a is changed to ${this.a}`);
});

this.b = 10;
this.c = 20;
this.d = 30;
console.log(this.a); // 60
```

#### Флаг ``debounceCalcOnInit=false``

Как говорилось выше, при вызове метода ``calc`` целевое свойство вычисляется сразу, а при изменении свойств-источников - нет. Включить
debounce и при первом вычислении свойства можно передав в качестве свойства объекта события флаг ``debounceCalcOnInit=true``.

```js
this.on('change:a', () => {
	// обработчик будет вызван один раз через небольшой промежуток времени
	console.log(`a is changed to ${this.a}`); // a is changed to 6
});

this.b = 1;
this.c = 2;
this.d = 3;

this.calc('a', ['b', 'c', 'd'], (b, c, d) => b + c + d, {
    debounceCalcOnInit: true
});

console.log(this.a); // undefined
```

На практике ``debounceCalcOnInit`` вряд ли пригодится. Нужно лишь помнить, что есть флаг включающий "полный debounce".

#### Флаг ``setOnInit=true``

Известно, что при вызове метода ``calc`` свойство сразу получает новое значение. Для того, чтоб отменить это поведение и вычислить свойство ``target`` только тогда, когда свойство-источник впервые изменено, используйте флаг ``setOnInit`` равный ``false``.

```js
this.calc('a', 'b', b => b * 2, {
    setOnInit: false
});

console.log(this.a); // undefined

// но если обновить this.b, для свойства a будет вычислено новое значение
this.b = 1;
```

#### Флаг ``exactKey=false``

Как говорилось выше, в качестве имени свойства-источника можно передать строку, содержащую точки. Такое имя будет истолковано как путь к свойству во вложенном объекте. В случае, если имя должно быть использовано как есть, воспользуйтесь флагом ``exactKey`` со значением ``true``.

```js
this['foo.bar.baz'] = 1;
this.calc('a', 'foo.bar.baz', fooBarBaz => fooBarBaz * 2, {
    exactKey: true
});
console.log(this.a); // 2
```

@param {string} target - Имя свойства которое зависит от других свойств
@param {string|array} source - От каких свойств зависит искомое свойство (см. описание выше)
@param {function} [handler=(v)=>v] - Функция, возвращающая новое значение
@param {object} [eventOptions] - Объект, в который можно передать какие-нибудь данные для обработчика события, слушающего изменения ``target`` или специальные флаги (см. описание метода)

@example

this.calc('greeting', 'name', name => `Hello, ${name}!`);

this.name = 'World';

alert(this.greeting); // 'Hello, World!'

@example <caption>Вычисление периметра прямоугольника по двум сторонам (и сторон по периметру)</caption>
this.a = 3;
this.b = 4;

this
    .calc('p', ['a', 'b'], (a, b) => (a + b) * 2)
    .calc('a', ['p', 'b'], (p, b) => p/2 - b)
    .calc('b', ['p', 'a'], (p, a) => p/2 - a);

alert(this.p); // 14

this.on('change:p', () => {
    // "периметр изменен и равен 18"
    console.log(`периметр изменен и равен ${this.p}`);
});

this.a = 5;
*/


/**
@method Matreshka#calc
@importance 3
@variation batch
@since 2.0
@summary Дополнительная возможность метода {@link Matreshka#calc}, позволяющая объявить несколько вычислимых свойств одним вызовом

@desc Первый аргумент - объект, ключи которого - имена свойств, которые нужно вычислять, а значения - объекты, содержащие:

- ``source`` - свойства, от которых зависит целевое  свойство;
- ``handler`` - как именно будет вычислено свойство (по умолчанию равен ``(value) => value``);
- ``event`` - объект события (не обязательно).

Второй аргумент - общий объект события, расширяющий ``event`` для каждого искомого свойства (свойства из ``event`` приоритетнее).

``source`` может принимать любой вид {@link Matreshka#calc описаный выше} (строка, массив строк, объект со свойствами ``key`` и ``object``, массив объектов).

@param {array} batch - Объект содержащий информацию о вычислимых свойствах
@param {array} [commonEventOptions] - Общие свойства для объектов события

@example

this.calc({
	x: {
    	source: ['a', 'b'],
    	handler: (a, b) => a + b
	},
	y: {
	    source: {
	        object: someObject,
	        key: 'c'
	    },
	    event: {
	        setOnInit: false
	    }
	},
	z: {
	    source: [{
	        object: this,
	        key: 'x'
	    }, {
	        object: someObject,
	        key: 'd'
	    }],
	    handler: (x, d) => x + d
	}
}, {
    debounceCalc: false
});
*/
