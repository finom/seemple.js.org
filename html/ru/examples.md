## [Примеры](#!examples)

### Hello World
Написать первое приложение с помощью фреймворка Matreshka.js очень просто. Для этого:

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
Круто? Можно работать со свойством напрямую!

#### Ссылки
* [Класс Matreshka](#!Matreshka)
* [Метод Matreshka#bindNode](#!Matreshka-bindNode)
* [Метод Matreshka#on](#!Matreshka-on)

### Другие примеры

<span class="list-item-number">1.</span> [TodoMVC](//gh-embed.matreshka.io/v0/finom/matreshka_todomvc_ru/?ref=gh-pages) - список дел. ([Исходный код с аннотациями](//finom.github.io/matreshka_todomvc_ru/docs/app.html))

<span class="list-item-number">2.</span> [TreeView](//gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/treeview/?ref=gh-pages) - древовидный список неограниченной вложенности.

<span class="list-item-number">3.</span> [Markdown editor](//gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/markdown_editor/?ref=gh-pages) - простейший редактор Markdown (13 строк кода).

<span class="list-item-number">4.</span> [Simple SoundCloud player](//gh-embed.matreshka.io/v0/matreshkajs/matreshka_examples/soundcloud_search/?ref=gh-pages) - поиск музыки, использующий SoundCloud API.
