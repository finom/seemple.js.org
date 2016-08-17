=======(((
	"id": "!introduction"
)))
## [Introduction](#!introduction)
Matreshka is a framework for massive and endlessly extending single page applications (within the Universe, of course), written in JavaScript. It allows you to build program architecture so that neither your team nor you can get confused in plentiful entities, logic described in HTML files, numerous restrictions of other frameworks and incomprehensible abstractions.

Two-way data binding is implemented by [bindNode](#!Matrashka-bindNode) method only and it does not require to change HTML, adding weird syntactic constructions. Having set a few rules, a programmer can continue to work with data and forget about a state of visible part of an application.

> The order is not important, you can declare binders after complete implementation of logic which is responsible for data.

In Matreshka collections are represented by [Matreshka.Array](#!Matreshka.Array) class, whose instances themselves render HTML while adding, deleting and changing its items. You can say that the framework X renders items of an array too, but in Matreshka this issue is resolved very simply and elegantly.

Additionally, Matreshka is a framework which is very easy for understanding. Any developer, from a beginner who can write simple things in JavaScript to an experienced ninja, will handle it without any problems.

=======(((
	"id": "!getting-started"
)))
## [Getting started](#!getting-started)
All popular frameworks include lots of convenient and interesting functions. The problem is that it is difficult for a beginner to understand where to start his training. A great number of functional possibilities of a given framework leads us to the reasonable question "Hey, do I have to learn all that?"

This issue has been resolved in this documentation. We have split up the API into three parts.

### [[i class="imp-level-1"]][[/i]] The first level - the most important stuff
After you've learned the most important API parts you can hardily start doing fantastic things. Classes, methods and properties marked with [[i class="imp-level-1"]][[/i]] need to be learned primarily.

### [[i class="imp-level-2"]][[/i]] The second level - recommended to learn
If you already know the quick-start basics, you can look at other methods and properties of Matreshka.

### [[i class="imp-level-3"]][[/i]] The third level - other methods and properties
We've hidden rarely used parts (Matreshka API is really rich). If you want to know everything about Matreshka, turn on "Advanced mode" checkbox from the menu.

**Warning**. If you open a link to a method or a property of the third level of importance, the "Advanced mode" is turned on automatically.


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


[[span class="list-item-number"]]1.[[/span]] [TodoMVC](//gh-embed.matreshka.io/v0/matreshkajs/matreshka_todomvc/?ref=gh-pages) - to-do list. ([Source code with annotations](//matreshkajs.github.io/matreshka_todomvc/docs/app.html))

[[span class="list-item-number"]]2.[[/span]] [TreeView](//gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/treeview/?ref=gh-pages) - unlimited nesting depth.

[[span class="list-item-number"]]3.[[/span]] [Markdown editor](//gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/markdown_editor/?ref=gh-pages) - made with 13 lines of code.

[[span class="list-item-number"]]4.[[/span]] [Simple SoundCloud player](//gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/soundcloud_search/?ref=gh-pages) - music search via SoundCloud API.

=======(((
	"id": "!how-to-include"
)))
## [How to include?](#!how-to-include)
Matreshka is independent framework that requires no dependencies. But you can use jQuery or Zepto as a library which will be used by Matreshka for DOM manipulations. If jQuery or Zepto isn't found on a page, the tiny library called [bQuery](#!$b) will be used instead.



```html
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