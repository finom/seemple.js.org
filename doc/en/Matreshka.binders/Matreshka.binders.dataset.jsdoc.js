/**
@function Seemple.binders.dataset
@importance 2
@since 1.1
@summary Returns a binder which changes given [dataset](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/dataset) property of bound DOM node depending on an object property value.
@desc The property value can be transformed using ``mappingFn`` argument.
@param {string} property - A property of ``dataset`` object
@param {function} [mappingFn] - Mapping function
@returns {binder}
@example
this.bindNode('myKey', '.my-element', Seemple.binders.dataset('myProp'));
this.myKey = 'foo';

@example <caption>The usage of mapping function</caption>
this.bindNode('myKey', '.my-element',
    Seemple.binders.dataset('myProp', value => `Hello, ${value}`));

this.myKey = 'foo'; // the attr data-my-prop now has value "Hello, foo"
*/
