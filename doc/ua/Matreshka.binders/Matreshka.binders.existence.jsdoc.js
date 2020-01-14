/**
@function Seemple.binders.existence
@module seemple/binders/existence
@importance 2
@since 2.3
@summary Повертає байндер для одностороннього зв'язування, що перемикає наявність елемента в DOM дереві, в залежності від значення властивості об'єкта
@desc Байндер працює так само, як і {@link Seemple.binders.display}, але замість зміни видимості елемента, змінюється наявність елемента на сторінці. Байндер може бути корисним:

- Для великих додатків: в залежності від стану роутера показати ту чи іншу сторінку;
- Для реалізації нескінченного скролінгу;
- Для інших тасків, де потрібно сховати елемент, але його наявність в DOM дереві не є обов'язковою.

@param {boolean} [bool=true] - Якщо аргумент дорівнює ``true``, то елемент зникає при неправдивому значенні властивості, якщо дорівнює ``false``, зникає при правдивому значенні
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.existence(true));
@example
this.bindNode('myKey', '.my-element', Seemple.binders.existence(false));
*/
