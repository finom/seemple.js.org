/**
@method Matreshka.useDOMLibrary
@module matreshka/usedomlibrary
@importance 3
@since 0.2
@summary Forces to use a definite DOM library
@desc By default, Matreshka uses a library at ``window.$`` reference. If there is no such a variable in the global namespace or it does not include  a necessary set of methods, the built-in micro-library is used.

The ``useDOMLibrary`` method makes Matreshka use a library you would like to use in spite of its absence in the global namespace or for a different reason (for example, if two different versions of jQuery are used on a page).

@param {function} $ - Any jQuery-like library (jQuery itself, Zepto, or ``null`` to use built-in micro library)
@example
Matreshka.useDOMLibrary(jQuery.noConflict());
*/
