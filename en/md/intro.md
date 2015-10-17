=======(((
	"id": "!introduction"
)))
## [Introduction](#!introduction)
Matreshka is a framework for massive and endlessly extending single page applications (within the Universe, of course), written in JavaScript. It allows you to build program architecture so that neither your team nor you can get confused in plentiful entities, logic described in HTML files, numerous restrictions of other frameworks and incomprehensible abstractions.

Two-way data binding is implemented by [bindNode](#!Matrashka-bindNode) method only and it does not require to change HTML, adding weird {% raw %}{{syntactic.constructions}}{% endraw %}. Having set a few rules, a programmer can continue to work with data and forget about a state of visible part of an application.

> The order is not important, you can declare binders after complete implementation of logic which is responsible for data.

In Matreshka collections are represented by [Matreshka.Array](#!Matreshka.Array) class, whose instances themselves render HTML while adding, deleting and changing its items. You can say that the framework X renders items of an array too, but in Matreshka this issue is resolved very simply and elegantly.

Additionally, Matreshka is a framework which is very easy for understanding. Any developer, from a beginner who can write simple things in JavaScript to an experienced ninja, will handle it without any problems.

Today is the year [[script]]document.write(new Date().getFullYear());[[/script]] and it means that finally the time has come for the framework without any restrictions, strict rules or doubtful syntax. It is the time when you control the framework but framework doesn't control you!


=======(((
	"id": "!getting-started"
)))
## [Getting started](#!getting-started)
All popular frameworks include lots of convenient and interesting functions. The problem is that it is difficult for a beginner to understand where to start his training. A great number of functional possibilities of a given framework leads us to the reasonable question "Hey, do I have to learn all that?"


This issue has been resolved in this documentation. To start working with the framework confidently, you should study classes, properties and methods flagged as important [[i class="important"]][[/i]] (there are a little more than ten of them). Next, if you wish, you can gradually proceed to master the other methods which add the magic you couldn't even dream of into your JavaScript code (but look at the "cool" [[i class="cool"]][[/i]] methods first).


> This page can't do without the fantastic possibilities of HTML5. It is available offline for any device whether it is your computer or a mobile phone.

> **Chrome for Android**: enter the menu and click "Add to home screen"

> **Safari for iOS**: tap on the "Action" icon and choose "Add to Home Screen"

> **Any other devices**: just bookmark the page

> Now the documentation to Matreshka can be read without the Internet connection. If the page lags (noticed in Android 4.2), switch over to the mode "One By One".

=======(((
	"id": "!hello-world"
)))
## [Hello World!](#!hello-world)
Writing your first application is very easy. You should:


**1\.** Create an HTML file with the following content

```html
<!DOCTYPE html>
<html>
	<head>
		<title>My first Matreshka application</title>
	</head>
	<body>
		<input type="text" class="my-input">
		<div class="my-output"></div>
		<script src="http://cdn.jsdelivr.net/matreshka/latest/matreshka.min.js"></script>
		<script src="js/app.js"></script>
	</body>
</html>
```


**2\.** Write your first class which inherits Matreshka creating the file **js/app.js**

```js
var Application = Class({
	'extends': Matreshka,
	constructor: function() {

		// bind the property x and the text field
		this.bindNode('x', '.my-input');

		// bind the property x and the ".my-output" block
		this.bindNode('x', '.my-output', {
			setValue: function(v) {
				this.innerHTML = v;
			}
		});

		// if the property "х" has changed,
		// inform about it in the console
		this.on('change:x', function() {
			console.log('x changed to ' + this.x);
		});
	}
});

var app = new Application();
```


**3\.** That's it!

Now you can open the developer's console (by pressing F12) and write:
```js
app.x = 'Hello World!';
```
Cool, isn't it? Now you can work with the properties directly without any weird encapsulations.

> Matreshka uses the object-oriented approach based on classes which are acknowledged to be the best in most programming languages such as Python, C#, Java and many others. This way allows to easily change over to new possibilities of JavaScript syntax described in the ECMAScript 2015 specs and supported by Matreshka out of the box. [Babel](http://babeljs.io/) lets us make use of the cool new generation JS syntax today.
```js
class Application extends Matreshka {
	constructor() {
		this.bindNode('x', '.my-input');
		this.bindNode('x', '.my-output', {
			setValue(v) {
				this.innerHTML = v;
			}
		});
		this.on('change:x', () =>
			console.log('x changed to ' + this.x));
	}
}
```

[Live example](http://jsbin.com/xotehu/1/edit?js,output) (click on "Run with JS", to launch it)

#### Links
* [Matreshka Class](#!Matreshka)
* [Matreshka#bindNode method](#!Matreshka-bindNode)
* [Matreshka#on method](#!Matreshka-on)
* [Class function](#!Class)


=======(((
	"id": "!examples"
)))

## [Examples](#!examples)

1) [TodoMVC](http://gh-embed.matreshka.io/v0/matreshkajs/matreshka_todomvc/?ref=gh-pages)

([source code with annotations](http://matreshkajs.github.io/matreshka_todomvc/docs/app.html))

2) [TreeView](http://gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/treeview/?ref=gh-pages)

3) [Markdown editor](http://gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/markdown_editor/?ref=gh-pages)

4) [Simple SoundCloud player](http://gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/soundcloud_search/?ref=gh-pages)

=======(((
	"id": "!how-to-include"
)))
## [How to include?](#!how-to-include)
Matreshka is an independent framework that requires no dependencies. But the possibility of using capabilities from the ECMAScript 5 standard in the Internet Explorer 8 is absent. That's why if you support the IE8 in apps which you develop, you should add another JavaScript file: [es5-shim](https://github.com/es-shims/es5-shim) or any other polyfill that implements the possibilities of the ECMAScript 5.

> Warning! Starting version 1.1 Matreshka no longer focused on IE8 because there are too many new methods that will not work in this browser. That means automatic test will not work for this browser as well. The reason is: IE8 doesn't support accessors for native objects. Older application (based on Matreshka 1.0 and less) should work fine. If you still need IE8 support, you must not use methods of version 1.1 and above. Starting this vsesion Matreshka supports Internet Explorer 9+ and other browsers.

Adding jQuery is optional for all browsers (though, it's recommended for IE8). Instead of this one, you can use another jQuery-like library, for example  [Zepto](http://zeptojs.com/). If you don't want to use any libraries at all, giving preference to [Vanilla.js](http://vanilla-js.com/), Matreshka will make use of the built-in micro-library which is called [Balalaika](#$b).


```html
<!-- Required for IE8 -->
<script src="js/es5-shim.min.js"></script>
<script src="js/matreshka.min.js"></script>
```

Besides, Matreshka supports AMD (require.js or almond)
```js
require(['path/to/matreshka'], function(Matreshka) {
	//...
});
```

Import via ECMAScript 2015 (using [Babel](http://babeljs.io/))
```js
import Matreshka from 'path/to/matreshka';
```
