## [Примеры](#!examples)

### Hello World
Написать первое приложение с помощью фреймворка Matreshka.js очень просто.

**1\.** Создайте HTML файл со следующим содержимым

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Моё первое приложение на базе Matreshka.js</title>
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


**2\.** Создайте класс в файле **js/app.js**

```js
// сохраняем html байндер в переменную с коротким именем
const htmlBinder = Matreshka.binders.html;

// создаём класс, который наследуется от Matreshka
class Application extends Matreshka {
    constructor() {
        super();

        // связываем свойство x и текстовое поле
        this.bindNode('x', '.my-input');

        // связываем свойство x и блок с классом my-output
        this.bindNode('x', '.my-output', htmlBinder);

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

> "Matreshka.js - это чудо" (один из активных пользователей фреймворка)



#### Ссылки
* [Класс Matreshka](#!Matreshka)
* [Метод Matreshka#bindNode](#!Matreshka-bindNode)
* [Метод Matreshka#on](#!Matreshka-on)

### Другие примеры

<span class="list-item-number">1.</span>
<a href="https://github.com/matreshkajs/todomvc/tree/master/"
class="example-link">TodoMVC</a> - список дел. ([Исходный код с аннотациями](//matreshkajs.github.io/todomvc/docs/app.html))

<span class="list-item-number">2.</span>
<a href="https://github.com/matreshkajs/examples/tree/master/treeview/"
class="example-link">TreeView</a> - древовидный список неограниченной вложенности.

<span class="list-item-number">3.</span>
<a href="https://github.com/matreshkajs/examples/tree/master/markdown_editor/"
class="example-link">Markdown editor</a> - простейший редактор Markdown (13 строк кода).

<span class="list-item-number">4.</span>
<a href="https://github.com/matreshkajs/examples/tree/master/soundcloud_search/"
class="example-link">Simple SoundCloud player</a> - поиск музыки, использующий SoundCloud API.

<span class="list-item-number">5.</span>
<a href="https://github.com/matreshkajs/examples/tree/master/contact_list/"
class="example-link">Contact List</a> - позволяет добавлять, удалять, сортировать, менять и искать контакты.
