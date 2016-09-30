/**
@method Matreshka.Array#METHOD
@importance 1
@summary Будь-який метод iз ``Array.prototype``
@desc {@link Matreshka.Array} включає в себе всі методи, що входять в нативний JavaScript масив:
<ul>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" target="_blank">concat</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">join</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank">pop</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">push</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">reverse</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">shift</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank">slice</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">sort</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">splice</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString"  target="_blank">toString</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank">unshift</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" target="_blank">every</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">filter</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">forEach</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">indexOf</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf" target="_blank">lastIndexOf</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">map</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" target="_blank">some</a></li>
</ul>
При цьому, вони працюють точно так же, як і методи `` Array.prototype``. Є лише кілька застережень:
- Метод `` forEach`` повертає себе замість ``undefined``
- Методи, які в оригінальному вигляді повертають новий масив (``splice``, ``slice``, ``filter``, ``map`` ...), повертають новий екземпляр ``Matreshka.Array``.

Крім усього, методи генерують події пов'язані з будь-якою модифікацією масиву. Детальніше див. {@link Matreshka.Array}.

@see {@link Matreshka.Array#METHOD_}
@example
this.push(1, 2, 3);
@example
const mkArray = this
	.forEach((value, index) => {
		//...
	})
	.map((value, index) => {
		//...
	});

console.log(mkArray.isMatreshkaArray); // true
@example
this.reverse();
*/
