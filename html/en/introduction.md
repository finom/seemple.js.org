## [Introduction](#!introduction)
Matreshka is a framework for massive and endlessly extending single page applications (within the Universe, of course), written in JavaScript. It allows you to build program architecture so that neither your team nor you can get confused in plentiful entities, logic described in HTML files, numerous restrictions of other frameworks and incomprehensible abstractions.

Two-way data binding is implemented by [bindNode](#!Matrashka-bindNode) method only and it does not require to change HTML, adding weird syntactic constructions. Having set a few rules, a programmer can continue to work with data and forget about a state of visible part of an application.

> The order is not important, you can declare binders after complete implementation of logic which is responsible for data.

In Matreshka collections are represented by [Matreshka.Array](#!Matreshka.Array) class, whose instances themselves render HTML while adding, deleting and changing its items. You can say that the framework X renders items of an array too, but in Matreshka this issue is resolved very simply and elegantly.

Additionally, Matreshka is a framework which is very easy for understanding. Any developer, from a beginner who can write simple things in JavaScript to an experienced ninja, will handle it without any problems.
