## [Как подключить?](#!how-to-include)
Матрешка - самостоятельный фреймворк, не требующий никаких зависимостей. Но вы, при желании, можете использовать jQuery или Zepto в качестве библиотеки, которая будет использоваться Матрешкой для работы с DOM. Если jQuery или Zepto на странице нет, используется внутренняя компактная библиотека [bQuery](#!$b).

```html
<!-- никакой магии -->
<script src="js/matreshka.min.js"></script>
```

Кроме этого, Матрешка поддерживает AMD, например, require.js или almond
```js
require(['path/to/matreshka'], function(Matreshka) {
	//...
});
```

Импорт в стиле ECMAScript 2015
```js
import Matreshka from 'path/to/matreshka';
```
