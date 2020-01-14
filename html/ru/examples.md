## [Примеры](#!examples)

### Hello World
Написать первое приложение с помощью фреймворка Seemple.js очень просто.

**1\.** Создайте HTML файл со следующим содержимым

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Моё первое приложение на базе Seemple.js</title>
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


**2\.** Создайте класс в файле **js/app.js**

```js
// сохраняем html байндер в переменную с коротким именем
const htmlBinder = Seemple.binders.html;

// создаём класс, который наследуется от Seemple
class Application extends Seemple {
    constructor() {
        super();

        // связываем свойство x и текстовое поле
        this.bindNode('x', '.my-input');

        // связываем свойство x и блок с классом my-output
        this.bindNode('x', '.my-output', htmlBinder());

        // слушаем изменения свойства x
        this.on('change:x', () =>
            console.log(`x изменен на "${this.x}"`));
    }
}

const app = new Application();
```

**3\.** Это всё!

Теперь можете открыть консоль разработчика (клавиша F12) и написать:
```js
app.x = 'Hello World!';
```

#### Ссылки
* [Класс Seemple](#!Seemple)
* [Метод Seemple#bindNode](#!Seemple-bindNode)
* [Метод Seemple#on](#!Seemple-on)

### Другие примеры

<span class="list-item-number">1.</span>
<a href="https://github.com/seemplejs/seemple-todomvc/tree/master/"
class="example-link">TodoMVC</a> - список дел. ([Исходный код с аннотациями](//seemplejs.github.io/seemple-todomvc/docs/app.html))

<span class="list-item-number">2.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/treeview/"
class="example-link">TreeView</a> - древовидный список неограниченной вложенности.

<span class="list-item-number">3.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/markdown-editor/"
class="example-link">Markdown editor</a> - простейший редактор Markdown.

<span class="list-item-number">4.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/soundcloud-search/"
class="example-link">Simple SoundCloud player</a> - поиск музыки, использующий SoundCloud API.

<span class="list-item-number">5.</span>
<a href="https://github.com/seemplejs/seemple-examples-and-tutorials/tree/master/contact-list/"
class="example-link">Contact List</a> - позволяет добавлять, удалять, сортировать, менять и искать контакты.
