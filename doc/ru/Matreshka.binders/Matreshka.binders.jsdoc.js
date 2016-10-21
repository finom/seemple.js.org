/**
@namespace Matreshka.binders
@module matreshka/binders
@importance 1
@desc Пространство имен для байндеров. Из коробки содержит байндеры общего назначения (для связывания атрибутов и пр.). Этот объект можно расширять собственными свойствами, чтоб не засорять глобальное пространство имен.

Примите во внимание небольшое соглашение: каждое свойство из коллекции ``Matreshka.binders`` должно быть оформлено в виде функции (такие функции иногда называют "binder creator"), возвращающей байндер.

> В этой документации свойства из ``Matreshka.binders`` используются напрямую, но для улучшения читаемости кода, рекомендуется выносить их в отдельные переменные.

```js
const html = Matreshka.binders.html;

// ...
this.bindNode('x', node, html());
```
Либо импортировать в качестве CJS модуля:
```js
// импорт сразу нескольких байндеров
import { html, text, prop } from 'matreshka/binders';

// импорт байндеров по-отдельности
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
