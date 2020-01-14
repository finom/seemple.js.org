## [Examples](#!examples)

### Hello World!
Writing your first application is very easy. You should:


**1\.** Create an HTML file with the following content

```html
<!DOCTYPE html>
<html>
	<head>
		<title>My first Seemple.js application</title>
	</head>
	<body>
		<input type="text" class="my-input">
		<div class="my-output"></div>
		<script
		  src="https://seemplejs.github.io/seemple/seemple.min.js">
		</script>
		<script src="js/app.js"></script>
	</body>
</html>
```


**2\.** Create the application class at **js/app.js**

```js
// store html binder in a short variable
const htmlBinder = Seemple.binders.html;

// create the class which inherits Seemple
class Application extends Seemple {
    constructor() {
        super();

        // bind a property x and the text field
        this.bindNode('x', '.my-input');

        // bind the property x and the ".my-output" block
        this.bindNode('x', '.my-output', htmlBinder());

		// if the property "х" has changed,
		// inform about it in the console
        this.on('change:x', () =>
            console.log(`x is changed to "${this.x}"`));
    }
}

const app = new Application();
```


**3\.** That's it!

Now you can open the developer's console (by pressing F12) and write:
```js
app.x = 'Hello World!';
```
Cool, isn't it? You can work with such magical properties directly.

#### Links
* [Seemple Class](#!Seemple)
* [Seemple#bindNode method](#!Seemple-bindNode)
* [Seemple#on method](#!Seemple-on)

<span class="list-item-number">1.</span>
<a href="https://github.com/seemplejs/seemple-todomvc/tree/master/"
class="example-link">TodoMVC</a> - a to-do list. ([Source code with annotations](//seemplejs.github.io/seemple-todomvc/docs/app.html))

<span class="list-item-number">2.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/treeview/"
class="example-link">TreeView</a> of unlimited nesting depth.

<span class="list-item-number">3.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/markdown-editor/"
class="example-link">Markdown editor</a> made with few lines of code.

<span class="list-item-number">4.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/soundcloud-search/"
class="example-link">Simple SoundCloud player</a> - music search via SoundCloud API.

<span class="list-item-number">5.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/contact-list/"
class="example-link">Contact List</a> - allows to add, remove, sort, search and change contacts.
