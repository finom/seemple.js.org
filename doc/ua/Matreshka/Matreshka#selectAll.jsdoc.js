/**
@method Matreshka#selectAll
@synonym Matreshka#$
@importance 2
@summary Повертає єлементі з пісочниці, відповідні селектору
@desc Після створення пісочниці методом {@link Matreshka#bindNode}, можна отримувати і використовувати елементи, що знаходяться в ній. Крім цього, метод підтримує кастомний селектор ``:bound(KEY)``.

> У метода є {@link Matreshka.selectAll статичний аналог}.
@param {string} selector - Cелектор
@returns {$nodes}
@example
this.bindNode('sandbox', '.app');
nodes = this.selectAll('.my-element');
// те ж саме, що і
nodes = this.$('.my-element'); // $ - посилання на метод selectAll
// те ж саме, що і
nodes = this.$nodes.sandbox.find('.my-element');
// те ж саме, що і
nodes = $('.app').find('.my-element');

@example <caption>Селектор ``:bound(KEY)``</caption>
this.bindNode('myKey', '.my-element');
nodes = this.selectAll(':bound(myKey) .my-another-element');
// те ж саме, що і
nodes = this.$nodes.myKey.find('.my-another-element');
// те ж саме, що і
nodes = $('.my-element').find('.my-another-element');
*/
