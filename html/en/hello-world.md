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
