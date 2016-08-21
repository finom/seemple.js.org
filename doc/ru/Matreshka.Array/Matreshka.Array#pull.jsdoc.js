/**
@method Matreshka.Array#pull
@importance 2
@since 0.1
@fires pull
@fires remove
@fires removeone
@fires modify
@summary Удаляет элемент с заданным индексом из массива и возвращает этот элемент. Начиная с версии 0.3, метод поддерживает удаляемый элемент в качестве аргумента.
@param {string|number|*} index - Индекс элемента, который нужно удалить (число или строка) либо сам удаляемый элемент (не являющийся ни числом ни строкой)
@param {eventOptions} [evtOptions] - Объект события на случай, если нужно передать в обработчик события какие-нибудь данные или установить флаг ``silent``, предотвращающий срабатывание события
@returns {*|null} Удаленный элемент или ``null``
@example <caption>Передача индекса массива</caption>
var removed;

this.recreate(['a', 'b', 'c']);

removed = this.pull(1);

alert(removed); // 'b'

alert(this.toString()); // 'a,c'
@example <caption>Передача удаляемого элемента</caption>
var object1 = {},
	object2 = {},
	object3 = {},
	removed;

this.push(object1, object2, object3);

removed = this.pull(object2);

alert(removed === object2); // true

alert(this.length); // 2
*/
