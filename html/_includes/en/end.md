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
Yep and nope. Similar to AJAX, there are lots of wonderful libraries implementing routing in the Internet, for example [director](https://github.com/flatiron/director). But for simple tasks and tasks of average complexity (99% of all projecs) you can use [a plugin](https://github.com/matreshkajs/matreshka-router) which implements two-way data binding between URL and object properties. The plugin fits perfectly into the concept of Matreshka, adding to an app the easiest way of URL control ever.

### How does Matreshka work?
Matreshka uses accessors, setters in particular, for implementing the two-way data binding and catching the events of property changing. One of the main setter peculiarities is the lightning speed which can be compared to the speed of working with ordinary properties. In their performance accessors are ahead of other solutions such as ``Object.observe`` and, especially, dirty-checking.

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
