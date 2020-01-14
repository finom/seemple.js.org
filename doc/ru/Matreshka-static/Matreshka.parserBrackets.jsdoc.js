/**
@member {object} Seemple.parserBrackets
@module seemple/parserbrackets
@importance 3
@since 1.5
@summary Содержит скобки для {@link Seemple#parseBindings парсера}
@desc Объект ``parserBrackets`` позволяет изменить стандартный синтаксис парсера привязок. Он содержит два свойства: ``left`` (левая скобка, по умолчанию "{{") и ``right`` (правая скобка, по умолчанию "}}")
@example <caption>Заменяет поведение парсера, используя синтаксис ``[[=property]]`` вместо ``{{property}}``</caption>
Seemple.parserBrackets.left = '[[=';
Seemple.parserBrackets.right = ']]';
*/
