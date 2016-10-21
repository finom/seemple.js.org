/**
@namespace Matreshka.binders
@module matreshka/binders
@importance 1
@desc A namespace for binders. Out of the box it contains general-purpose binders and can be extended by you so as not to make a mess of the global namespace.

Take a little agreement into consideration: every property from the ``Matreshka.binders`` namespace must be made as a function which returns a binder (such functions usually called "binder creators").

> At this documentation the properties from ``Matreshka.binders`` are used directly. But to make your code more readable it's recommended to assign them to a variable.

```js
const html = Matreshka.binders.html;

// ...
this.bindNode('x', node, html());
```
Or import them as CJS/ES2015 module:
```js
// import few binders per once
import { html, text, prop } from 'matreshka/binders';

// import binders separately
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
