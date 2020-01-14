/**
@member {object} Seemple.parserBrackets
@module seemple/parserbrackets
@importance 3
@since 1.5
@summary Містить дужки для {@link Seemple#parseBindings парсера}
@desc Об'єкт ``parserBrackets`` дозволяє змінити стандартний синтаксис парсеру прив'язок. Він містить дві властивості: ``left`` (ліва дужка, за замовчуванням "{{") і ``right`` (права дужка, за замовчуванням "}}")
@example <caption>Замінює поведінку парсеру, використовуючи синтаксис ``[[=property]]`` замість ``{{property}}`` </caption>
Seemple.parserBrackets.left = '[[=';
Seemple.parserBrackets.right = ']]';
*/
