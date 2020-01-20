## [Приклади](#!examples)

### Hello World
Написати перший додаток за допомогою фреймворка Seemple.js дуже просто.

**1\.** Створіть HTML файл з наступним змістом

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Мій перший додаток на базі Seemple.js</title>
	</head>
	<body>
		<input type="text" class="my-input">
		<div class="my-output"></div>

		<script
		  src="https://finom.github.io/seemple/seemple.min.js">
		</script>

		<script src="js/app.js"></script>
	</body>
</html>
```


**2\.** Створіть клас у файлі **js/app.js**

```js
// присвоюємо html байндер змінній з коротким ім'ям
const htmlBinder = Seemple.binders.html;

// створюємо клас, який успадковується від Seemple
class Application extends Seemple {
    constructor() {
        super();

        // пов'язуємо властивість x і текстове поле
        this.bindNode('x', '.my-input');

        // пов'язуємо властивість x і блок з класом my-output
        this.bindNode('x', '.my-output', htmlBinder());

        // слухаємо зміни властивості x
        this.on('change:x', () =>
            console.log(`x змінений на "${this.x}"`));
    }
}

const app = new Application();
```

**3\.** Це все!

Тепер можете відкрити консоль розробника (клавіша F12) і написати:
```js
app.x = 'Hello World!';
```

#### Посилання
* [Клас Seemple](#!Seemple)
* [Метод Seemple#bindNode](#!Seemple-bindNode)
* [Метод Seemple#on](#!Seemple-on)

### Інші приклади

<span class="list-item-number">1.</span>
<a href="https://github.com/finom/seemple-examples-and-tutorials/tree/master/todomvc/"
class="example-link">TodoMVC</a> - список справ. ([Код з анотаціями](//finom.github.io/seemple-todomvc/docs/app.html))

<span class="list-item-number">2.</span>
<a href="https://github.com/finom/seemple-examples-and-tutorials/tree/master/treeview/"
class="example-link">TreeView</a> - деревовидний список необмеженої вкладеності.

<span class="list-item-number">3.</span>
<a href="https://github.com/finom/seemple-examples-and-tutorials/tree/master/markdown-editor/"
class="example-link">Markdown editor</a> - найпростіший редактор Markdown.

<span class="list-item-number">4.</span>
<a href="https://github.com/finom/seemple-examples-and-tutorials/tree/master/soundcloud-search/"
class="example-link">Simple SoundCloud player</a> - пошук музики, що використовує SoundCloud API.

<span class="list-item-number">5.</span>
<a href="https://github.com/finom/seemple-examples-and-tutorials/tree/master/contact-list/"
class="example-link">Contact List</a> - дозволяє додавати, видаляти, сортувати, змінювати і шукати контакти.
