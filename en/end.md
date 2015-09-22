=======(((
	"id": "!matreshka-magic",
	"data-since": 1.1
)))

## [MatreshkaMagic](#!matreshka-magic)
Some developers don’t need Matreshka’s abundant functionality, but they want to use the superb utilities which are present in the framework. That’s why, we have decided to create a new compact library which is called  **MatreshkaMagic**. The library doesn’t include classes ({@link Matreshka}, {@link Matreshka.Object}, {@link Matreshka.Array} and {@link Class} function), but it contains all static methods and properties of {@link Matreshka} class:

- {@link Matreshka.on}
- {@link Matreshka.once}
- {@link Matreshka.onDebounce}
- {@link Matreshka.mediate}
- {@link Matreshka.setClassFor}
- {@link Matreshka.linkProps}
- {@link Matreshka.off}
- {@link Matreshka.trigger}
- {@link Matreshka.bindNode}
- {@link Matreshka.bindOptionalNode}
- {@link Matreshka.unbindNode}
- {@link Matreshka.selectAll}
- {@link Matreshka.select}
- {@link Matreshka.boundAll}
- {@link Matreshka.$bound}
- {@link Matreshka.bound}
- {@link Matreshka.get}
- {@link Matreshka.set}
- {@link Matreshka.parseBindings}
- {@link Matreshka.remove}
- {@link Matreshka.define}
- {@link Matreshka.defineGetter}
- {@link Matreshka.defineSetter}
- {@link Matreshka.trim}
- {@link Matreshka.toArray}
- {@link Matreshka.extend}
- {@link Matreshka.each}
- {@link Matreshka.randomString}
- {@link Matreshka.binders}
- {@link Matreshka.defaultBinders}
- {@link Matreshka.lookForBinder}
- {@link Matreshka.debounce}
- {@link Matreshka.noop}
- {@link Matreshka.$(static) Matreshka.$}
- {@link Matreshka.$b}
- {@link Matreshka.useAs$}
- {@link Matreshka.version}

The library is in the folder  ``/magic/`` of the repo at [github](https://github.com/finom/matreshka). Having added the script with the help of script tag, ``MatreshkaMagic`` global var and its brief variant ``magic`` are available for the programmer.  Var is an ordinary object with methods.


```html
<script src="magic/matreshka-magic.min.js"></script>
```
```js
var object = {};
magic.bindNode(object, 'x', '.my-node');
magic.linkProps(object, 'y', 'x z', function(x, z) {
	return x + z;
});
magic.mediate(object, 'z', Number);
// and etc
```

While using AMD or CJS, global vars aren’t being created:
```js
require(['magic/matreshka-magic.min'], function(magic) {
	//...
});
```

```js
var magic = require('magic/matreshka-magic.min');
```

As of writing this documentation,  **matreshka-magic.min.js**  file is a bit less than 30KB in the uncompressed form contrary to 46KB of **matreshka.min.js**. If it’s necessary to include all the framework to your project at some stage, you should just change paths to the script file and change the var names from ``magic`` or ``MatreshkaMagic`` to ``MK`` or ``Matreshka`` (it's only obligatory in case if you don’t use AMD or CJS in the project).
Pay attention. Matreshka framework works in the Internet Explorer 8 thanks to the hacks returning ``XDomainRequest`` object from the constructor instead of the "clean" JavaScript object. As MatreshkaMagic allows to work with native objects only, the IE8 support for MatreshkaMagic is impossible. It means that the library works everywhere including IE9+.


На момент написания этой документации, файл **matreshka-magic.min.js** занимает чуть меньше 30КБ в несжатом виде против 46КБ **matreshka.min.js**. Если на каком-то этапе потребуется подключить весь фреймворк в проект, нужно лишь изменить пути к файлу скрипта и поменять имена переменных с ``magic`` или ``MatreshkaMagic`` на ``MK`` или ``Matreshka`` (второе обязательно только в том случае, если вы не используете AMD или CJS в проекте).

Обратите внимание. Фреймворк Матрешка работает в Internet Explorer 8 благодаря хакам, возвращающим из конструктора объект ``XDomainRequest``, вместо "чистого" JavaScript объекта. Так как MatreshkaMagic позволяет работать исключительно с произвольными объектами, поддкржка IE8 для MatreshkaMagic невозможна. Это значит, библиотека работает везде, включая IE9+.