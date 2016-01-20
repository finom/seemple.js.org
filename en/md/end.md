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
- {@link Matreshka.deepFind}
- {@link Matreshka.bindSandbox}

The library is in the folder  ``/magic/`` of the repo at [github](https://github.com/finom/matreshka). Having added the script via script tag, ``MatreshkaMagic`` global var and its brief variant ``magic`` are available for the programmer. Var is an ordinary object with methods.


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

=======(((
	"id": "!faq"
)))

## [FAQ](#!faq)
### Is there a wrapper over ``XMLHttpRequest`` (AJAX) in Matreshka?
Nope. Firstly, there are a lot of wonderful libraries implementing communications with a server, such as  a one-time hot [jQuery.ajax](http://api.jquery.com/jquery.ajax/), a terrific library [qwest](https://github.com/pyrsmk/qwest), based on [Promises](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) and many others.

Secondly, all browsers will probably get a native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) support as an alternative to ``XMLHttpRequest``. ``fetch`` has got a simpler and cleaner API, based on Promises and allowing to avoid a catastrophic number of callbacks as well as the necessity of remembering about API ``XMLHttpRequest``. As ``fetch`` isn’t supported by all browsers yet, you can use a [popular polyfill](https://github.com/github/fetch).

> Promises and asynchronous functions from ECMAScript 7 specification give an opportunity to write JavaScript code of surpassing beauty:

```js
async function getData() {
	let resp = await fetch(someUrl);
	let data = await resp.text();

	console.log(data);
}

getData();
```


### Is there a routing in Matreshka?
Nope. Similar to AJAX, there are lots of wonderful libraries implementing routing in the Internet, for example [director](https://github.com/flatiron/director).


### How does Matreshka work?
Matreshka uses accessors, setters in particular, for implementing the two-way data binding and catching the events of property changing. This technology has existed for quite a long time (Internet Explorer 8 was the first browser to include ``Object.defineProperty`` support). One of the main setter peculiarities is the lightning speed which can be compared to the speed of working with ordinary properties. In their performance accessors are ahead of other solutions such as ``Object.observe`` and, especially, dirty-checking.

As an example of how the two-way data binding works ([bindNode](#!Matreshka-bindNode) function in particular), have a look at this code:

```js
window.bindNode = function bindNode(object, key, node, binder) {
    var value = object[key];
    Object.defineProperty(object, key, {
        get: function() {
            return value;
        },
        set: function(v) {
            binder.setValue.call(node, v);
        }
    });

    node.addEventListener(binder.on, function() {
        value = binder.getValue.call(node);
    });
};
```
As you see, it’s real easy (for simplicity, the function doesn’t  support  many-to-many binding).
You can see the example of function working at [jsbin](//jsbin.com/mabetap/7/edit?html,js,output)..


### Does Matreshka support the server rendering?

Unfortunately, not yet (for the time being). Matreshka uses DOM templating which requires the presence of the library, implementing DOM API on the server. [jsdom](https://github.com/tmpvar/jsdom) is a good example of such a library. The problem is that a lot of clients connect to the server and each of them can  request completely different pages which are generated dynamically. DOM templating works quite slower than HTML one, where an ordinary text is a template instead of numerous DOM objects.

The server rendering of React components which also require DOM template engine can be mentioned as an example. As a rule, this task is solved with the help of gimmicks and recommendations to use the template caching (which is not always possible, but if it’s possible it can cause memory leaks). Even using the best practices and smart solutions, an ordinary text HTML template engine (let’s say, [mustache.js](https://github.com/janl/mustache.js)) will solve the problem a lot faster, and the speed on the server is known to be more important than the one on the client.

That’s why, currently, the only recommendation for the server rendering is passing the task of  HTML line generation to any text template engine. Let’s leave highly tailored tasks to be performed by the tools which do it best.
