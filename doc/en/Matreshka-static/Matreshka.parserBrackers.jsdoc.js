/**
@member {object} Seemple.parserBrackets
@module seemple/parserbrackets
@importance 3
@since 1.5
@summary Contains brackets for {@link Seemple#parseBindings bindings parser}
@desc ``parserBrackets`` object allows to change default syntax of the parser. It contains two properties: ``left`` (left bracket, "{{" by default) and ``right`` (right bracket, "}}" by default)
@example <caption>Use syntax  ``[[=property]]`` instead of ``{{property}}``</caption>
Seemple.parserBrackets.left = '[[=';
Seemple.parserBrackets.right = ']]';
*/
