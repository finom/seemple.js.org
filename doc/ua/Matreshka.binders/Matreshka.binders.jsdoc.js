/**
@namespace Matreshka.binders
@module matreshka/binders
@importance 1
@desc Простір імен для байндерів. З коробки містить байндери загального призначення (для зв'язування атрибутів і ін.). Цей об'єкт можна розширювати власними властивостями, щоб не засмічувати глобальний простір імен.

Візьміть до уваги невелику угоду: кожна властивість з неймспейсу ``Matreshka.binders`` має бути оформлено у вигляді функції (такі функції іноді називають "binder creator"), що повертає байндер-об'єкт.

> У цій документації властивості з ``Matreshka.binders`` використовуються безпосередньо, але для поліпшення читабельності коду, рекомендується виносити їх в окремі змінні.

```js
const html = Matreshka.binders.html;

// ...
this.bindNode('x', node, html());
```
Або імпортувати в якості CJS модуля:
```js
// імпорт відразу декількох байндерів
import { html, text, prop } from 'matreshka/binders';

// імпорт байндерів окремо
import html from 'matreshka/binders/html';
```

@see {@link Matreshka#bindNode}
@see {@link Matreshka.defaultBinders}

@example
Matreshka.binders.myCoolBinder = (var1, var2) => {
	return {
		on: 'click',
		getValue() { ... },
		setValue() { ... },
		initialize() { ... },
		destroy() { ... }
	};
};

this.bindNode('myKey', '.my-element',
	Matreshka.binders.myCoolBinder('Hello', 'World'));
*/
