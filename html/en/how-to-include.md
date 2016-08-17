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
