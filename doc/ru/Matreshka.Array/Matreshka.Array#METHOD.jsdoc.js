/**
@method Matreshka.Array#METHOD
@importance 1
@summary Любой метод из ``Array.prototype``
@desc {@link Matreshka.Array} включает в себя все методы, входящие в нативный JavaScript массив:
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
При этом, они работают точно так же, как и методы ``Array.prototype``. Есть лишь несколько оговорок:
- Метод ``forEach`` возвращает себя вместо ``undefined``
- Методы, которые в оригинальном виде возвращают новый массив (``splice``, ``slice``, ``filter``, ``map``...), возвращают новый экземпляр ``Matreshka.Array``.

Кроме всего, методы генерируют события связанные с любой модификацией массива. Подробнее см. {@link Matreshka.Array}.

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
