## [Hello World!](#!hello-world)
Написать первое приложение с помощью фреймворка Матрешка очень просто. Для этого:

**1\.** Создайте HTML файл со следующим содержимым

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Моё первое приложение на базе Матрешки</title>
	</head>
	<body>
		<input type="text" class="my-input">
		<div class="my-output"></div>
		<script src="http://cdn.jsdelivr.net/matreshka/latest/matreshka.min.js"></script>
		<script src="js/app.js"></script>
	</body>
</html>
```


**2\.** Напишите свой первый класс, наследующий Матрешку, создав файл **js/app.js**

```js
var Application = Class({
	'extends': Matreshka,
	constructor: function() {

		// связываем свойство x и текстовое поле
		this.bindNode('x', '.my-input');

		// связываем свойство x и блок с классом my-output
		this.bindNode('x', '.my-output', {
			setValue: function(v) {
				this.innerHTML = v;
			}
		});

		// если свойство "х" изменилось, сообщаем об этом в консоли
		this.on('change:x', function() {
			console.log('x изменен на ' + this.x);
		});
	}
});

var app = new Application();
```


**3\.** Это всё!

Теперь можете открыть консоль разработчика (клавиша F12) и написать:
```js
app.x = 'Привет Мир!';
```
Круто, не правда ли? Теперь можно работать напрямую со свойствами без болезненных инкапсуляций.

> Матрешка использует объектно-ориентированный подход основанный на классах, которые зарекомендовали себя с самой лучшей стороны в большинстве языков программирования: Python, C#, Java и многих других. Такое решение позволяет легко перейти на новые возможности синтаксиса JavaScript, описанные в стандарте ECMAScript 2015 и поддерживаемые Матрешкой. Проекты типа [Babel](http://babeljs.io/) уже сегодня позволяют использовать крутой синтаксис JS нового поколения.
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
			console.log('x изменен на ' + this.x));
	}
}
```

[Живой пример](http://jsbin.com/lalerebepo/2/edit?js,output) (нажмите кнопку "Run with JS", чтобы пример запустился)

#### Ссылки
* [Класс Matreshka](#!Matreshka)
* [Метод Matreshka#bindNode](#!Matreshka-bindNode)
* [Метод Matreshka#on](#!Matreshka-on)
* [Функция Class](#!Class)
