// **todos.js** - самый большой файл в этом проекте, который содержит большую часть логики. В проектах большего объема лучше разделать приложения на мелкие составляющие.
"use strict";
var Todos = Class({
	'extends': MK.Array,
	// [Model](http://ru.matreshka.io/#Matreshka.Array-Model) определяет класс элементов, которые будут входить в коллекцию. В данном слуае, элементами коллекции будут экземпляры класса [Todo](todo.html)
	Model: Todo,
	// Определяя свойство [itemRenderer](http://ru.matreshka.io/#Matreshka.Array-itemRenderer) вы создаете рендерер для каждого добавленного элемента массива. В данном случае, шаблон содержится в элементе с ``id=todo_item_template`` (см. HTML код).
	itemRenderer: '#todo_item_template',
	constructor: function() {
		var self = this
			// Добавляем зависимость свойства ``"leftLength"`` от свойств ``"length"`` и ``"completedLength"``, и используем их разность в качестве значения. Приложение "слушает" изменения в этих свойствах, вычисляя ``"leftLength"`` при каждом их изменении.
			.linkProps( 'leftLength', 'length completedLength', function( length, completedLength ) {
				return length - completedLength;
			})
			// Метод ``"bindings"`` добавляет привязки между свойствами экземпляра класса и DOM элементами. Метод ``"events"``, как можно догадаться, добавляет обработчики событий. Эти имена методов не являются специальными, они группируют разные действия для чистоты кода. После их вызова, вынимаем данные из локального хранилища и создаем из него элементы todo с помощью метода [recreate](http://ru.matreshka.io/#Matreshka.Array-recreate).
			.bindings()
			.events()
			.recreate( JSON.parse( localStorage[ 'todos-matreshka' ] || '[]' ) )
		;
		
		// Мы используем библиотеку для роутинга [director](https://github.com/flatiron/director), как того требует спецификация TodoMVC. Когда ``location.hash`` меняется, его значение присваивается свойству ``"route"``.
		Router({
			':state': function( state ) {
				self.route = state;
			},
			'': function() {
				self.route = '';
			}
		}).init();
	},
	bindings: function() {
		return this
			// Объявляем песочницу
			.bindNode( 'sandbox', '#todoapp' )
			// Привязываем несколько других элементов (main, footer и т. д.). Селектор ``:sandbox`` не используется потому что мы обращаемся к элементам по ID.
			.bindNode({
				main: '#main',
				footer: '#footer',
				newTodo: '#new-todo',
				container: '#todo-list',
				allCompleted: '#toggle-all',
				clearCompleted: '#clear-completed'
			})
			// Следующий вызов [bindNode](http://ru.matreshka.io/#Matreshka-bindNode) делает видимость элементов зависимым от значений соответствующих свойств (если значение проходит не-строгую проверку на равенство ``true``, элемент будет показан, иначе - спрятан).
			.bindNode({
				completedLength: ':bound(clearCompleted)',
				length: ':bound(main), :bound(footer)'
			}, MK.binders.visibility() )
			// Следующие две привязки меняют HTML привязанных элементов в зависимости от значения соответствующего свойства.
			.bindNode( 'completedLength', ':bound(clearCompleted)', {
				setValue: function( v ) {
					$( this ).html( 'Clear completed (' + v + ')' );
				}
			})
			.bindNode( 'leftLength', '#todo-count', {
				setValue: function( v ) {
					$( this ).html( '<strong>' + v + '</strong> item' + ( v !== 1 ? 's' : '' ) + ' left' );
				}
			})
			// Эта привязка контролирует, какая именно ссылка ("All", "Active", "Completed") будет выделена жирным шрифтом. Здесь использован небольшой приём для демонстрации работы ``bindNode``: элемент ``#filters`` связываем со свойством ``"route"``, но в привязчике манипулируем ссылками внутри этого элемента.
			.bindNode( 'route', '#filters', {
				setValue: function( v ) {
					$( this ).find( 'a' ).each( function() {
						var $this = $( this );
						$this.toggleClass( 'selected', $this.attr( 'href' ) === '#/' + v );
					});
				}
			})
		;
	},
	events: function() {
		return this
			// Добавляем обработчик события на изменение свойства ``"JSON"``, которое хранит представление списка todo в виде JSON строки. Для того, чтоб реже обращаться к жесткому диску (который работает медленнее, чем оперативная память), используется метод [onDebounce](http://ru.matreshka.io/#Matreshka-onDebounce), который предотвращает многократный вызов обработчика за промежуток времени.
			.onDebounce( 'change:JSON', function( evt ) {
				localStorage[ 'todos-matreshka' ] = evt.value;
			})
			// Если в инпуте, привязанном к свойству ``"newTodo"`` нажата клавиша  ``Enter`` и если очищенное от пробелов значение этого свойства не является пустой строкой, добавляем новый пункт todo, используя метод ``push``).
			.on( 'keyup::newTodo', function( evt ) {
				var newTodo;
				if( evt.which === ENTER_KEY ) {
					if( newTodo = this.newTodo.trim() ) {
						this.push({
							title: newTodo
						});
					}
					
					this.newTodo = '';
				}
			})
			// Когда меняется значение свойства ``allCompleted``, мы меняем ``"completed"`` для всех todo на то же самое значение. Флаг ``"silent"`` говорит о том, что событие ``"change:completed"`` не должно быть вызвано.
			.on( 'change:allCompleted', function( evt ) {
				this.forEach( function( todo ) {
					todo.set( 'completed', evt.value, { silent: true });
				});
				
				this.completedLength = evt.value ? this.length : 0;
			})
			// Клик мышью по элементу ``'#clear-completed'`` удаляет все выволненные пункты, используя метод [pull](http://ru.matreshka.io/#Matreshka.Array-pull).
			.on( 'click::clearCompleted', function() {
				for( var i = 0; i < this.length; i++ ) {
					if( this[i].completed ) {
						this.pull( this[i--] );
					}
				}
			})
			// Если какой-нибудь элемент списка дел сгенерировал событие ``"readytodie"``, мы его удаляем, используя метод [pull](http://ru.matreshka.io/#Matreshka.Array-pull).
			.on( '@readytodie', function( todo ) {
				this.pull( todo );
			})
			// Следующий обработчик вызывается по двум событиям. Первое событие - ``"modify"``, которое срабатывает, когда ``MK.Array`` меняется (когда элементы добавляются или удаляются). Второе - ``"@change:completed"``. Символ "@" указывает на то, что мы слушаем событие ``"change:completed"`` для каждого пункта todo. Получается, обработчик срабатывает, когда пункт добавлен или удален и когда у одного из пунктов меняется свойство ``"completed"``. Код обработчика говорит сам за себя: ``"allCompleted"`` становится равным ``true``, если каждый пункт выполнен и наоборот - ``false``, когда какой-либо из пунктов не выполнен. Затем вычисляется значение свойства ``"completedLength"``, которое содержит количество выполненных пунктов.
			.on( 'modify @change:completed', function() {
				this.set( 'allCompleted', this.every( function( todo ) {
					return todo.completed;
				}), { silent: true } );
				
				this.completedLength = this.filter( function( todo ) {
					return todo.completed;
				}).length;
			})
			// Если пункты добавлены или удалены или если свойство ``"completed"`` помеялось у какого-нибудь пункта или если изменилось значение свойства ``"allCompleted"``, готовим представление нашего списка todo для того, чтоб затем поместить его в локальное хранилище (``localStorage``).
			.on( 'modify @change:completed change:allCompleted', function() {
				this.JSON = JSON.stringify( this );
			})
			// Следующие строки контролируют, как видимость пунктов списка дел контролируется ``location.hash`` (или свойства ``"route"``). Эта часть может быть реализована несколькими способами. Здесь выбран способ добавления зависимостей одного свойства от других, используя метод  [linkProps](http://ru.matreshka.io/#Matreshka-linkProps). Что здесь происходит? Мы слушаем событие ``"addone"``, срабатывающее, когда новый пункт добавляется в список дел. Обработчик события получает объект (``evt``) в качестве аргумента, который содержит свойство ``"added"``, являющеесяя добавленным пунктом. Мы добавляем зависимость свойства ``"visible"`` для добавленного пункта от ``todos.route`` и от собственного свойства ``"completed"``.
			.on( 'addone', function( evt ) {
				var todo = evt.added;
				
				todo.linkProps( 'visible', [
					todo, 'completed',
					this, 'route'
				], function( completed, route ) {
					return !route || route === 'completed' && completed || route === 'active' && !completed;
				});
			})
		;
	},
});