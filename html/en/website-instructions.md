## [Website instructions](#!website-instructions)

### Importance levels
The API is split up into three parts.

#### <i class="imp-level-1"></i> The first level - the most important stuff
After you've learned the most important API parts you can hardily start doing fantastic things. Classes, methods and properties marked with <i class="imp-level-1"></i> need to be learned primarily.

#### <i class="imp-level-2"></i> The second level - recommended to learn
If you already know the quick-start basics, you can look at less important (but still important) methods and properties of the framework.

#### <i class="imp-level-3"></i> The third level - other methods and properties
If you want to know everything about Seemple.js, turn on "Advanced mode" checkbox from the menu.

**Warning**. If you open a link to a method or a property of the third level of importance, the "Advanced mode" is turned on automatically.

### Inaccuracies and typos

In a footer of every article of the documentation you can find a link to a source of that article. You can fix a typo directly at Github editor. If you cannot do this somehow, then select the text of the typo and press CTRL + Enter to send a message to the developer.

> The documentation is written using JSDoc3 and GitHub Flavored Markdown.


### Modules

If you use CommonJS you can see paths to modules at every article of the documentation. A size of resulting JavaScript bundle can be reduced by the import of needed parts of the framework.

```js
// every static function or a class can be imported as CJS module
const SeempleArray = require('seemple/array');
const propBinder = require('seemple/binders/prop');
const bindNode = require('seemple/bindnode');
```

The import of the main module pulls entire framework. Usually it's not required.
```js
const Seemple = require('seemple');
```

> A pure module of {@link Seemple} class (without ``binders``, ``Array`` and ``Object``) lives at ``'seemple/seemple'``
