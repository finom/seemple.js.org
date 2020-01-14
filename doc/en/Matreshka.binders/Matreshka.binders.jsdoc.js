/**
@namespace Seemple.binders
@module seemple/binders
@importance 1
@desc A namespace for binders. Out of the box it contains general-purpose binders and can be extended by you so as not to make a mess of the global namespace.

Take a little agreement into consideration: every property from the ``Seemple.binders`` namespace must be made as a function which returns a binder (such functions usually called "binder creators").

> At this documentation the properties from ``Seemple.binders`` are used directly. But to make your code more readable it's recommended to assign them to a variable.

```js
const html = Seemple.binders.html;

// ...
this.bindNode('x', node, html());
```
Or import them as CJS/ES2015 module:
```js
// import few binders per once
import { html, text, prop } from 'seemple/binders';

// import binders separately
import html from 'seemple/binders/html';
```

@see {@link Seemple#bindNode}
@see {@link Seemple.defaultBinders}

@example
Seemple.binders.myCoolBinder = (var1, var2) => {
	return {
		on: 'click',
		getValue() { ... },
		setValue() { ... },
		initialize() { ... },
		destroy() { ... }
	};
};

this.bindNode('myKey', '.my-element',
	Seemple.binders.myCoolBinder('Hello', 'World'));
*/
