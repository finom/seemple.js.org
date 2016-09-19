## [Examples](#!examples)

### Hello World!
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
		<script
		  src="http://cdn.jsdelivr.net/matreshka/latest/matreshka.min.js">
		</script>
		<script src="js/app.js"></script>
	</body>
</html>
```


**2\.** Create application class at **js/app.js**

```js
// store html binder in a short variable
const htmlBinder = Matreshka.binders.html;

// create a class that inherits Matreshka
class Application extends Matreshka {
    constructor() {
        super();

        // bind the property x and the text field
        this.bindNode('x', '.my-input');

        // bind the property x and the ".my-output" block
        this.bindNode('x', '.my-output', htmlBinder);

		// if the property "х" has changed,
		// inform about it in the console
        this.on('change:x', () =>
            console.log(`x изменен на "${this.x}"`));
    }
}

const app = new Application();
```


**3\.** That's it!

Now you can open the developer's console (by pressing F12) and write:
```js
app.x = 'Hello World!';
```
Cool, isn't it? Now you can work with the properties directly.

#### Links
* [Matreshka Class](#!Matreshka)
* [Matreshka#bindNode method](#!Matreshka-bindNode)
* [Matreshka#on method](#!Matreshka-on)

<span class="list-item-number">1.</span>
<a href="https://github.com/matreshkajs/todomvc/tree/master/"
class="example-link">TodoMVC</a> - a to-do list. ([Source code with annotations](//matreshkajs.github.io/todomvc/docs/app.html))

<span class="list-item-number">2.</span>
<a href="https://github.com/matreshkajs/matreshka_examples/tree/gh-pages/treeview/"
class="example-link">TreeView</a> of unlimited nesting depth.

<span class="list-item-number">3.</span>
<a href="https://github.com/matreshkajs/matreshka_examples/tree/gh-pages/markdown_editor/"
class="example-link">Markdown editor</a> made with few lines of code.

<span class="list-item-number">4.</span>
<a href="https://github.com/matreshkajs/matreshka_examples/tree/gh-pages/soundcloud_search/"
class="example-link">Simple SoundCloud player</a> -  music search via SoundCloud API.
