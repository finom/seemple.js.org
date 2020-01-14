## [FAQ](#!faq)

### How does Seemple work?
Seemple uses accessors, setters in particular, for implementing the two-way data binding and catching the events of property changing.

As an example of how the two-way data binding works ([bindNode](#!Seemple-bindNode) function in particular), have a look at this code:

```js
function bindNode(object, key, node, binder) {
    const value = object[key];
    Object.defineProperty(object, key, {
        get() {
            return value;
        },
        set(v) {
            binder.setValue.call(node, v);
        }
    });

    node.addEventListener(binder.on, () => {
        value = binder.getValue.call(node);
    });
}
```
As you see, it’s real easy (for simplicity, the function doesn’t support many-to-many binding).


### Is there a routing in Seemple.js?

Yes. Check out [seemple-router](https://github.com/seemplejs/seemple-router).

### How to pre-render an application on a server

For the app pre-rendering Seemple.js can be used on Node.js (``window`` global object can be created via [jsdom](https://github.com/tmpvar/jsdom)) or any template system you want on any server platform. The first case is fine for static HTML generation and the second for dynamic pages.

The task of client-side is to restore application state from HTML. {@link Seemple#bindNode} extracts element value and assigns it to a property and {@link Seemple.Array#restore} restores a state of a collection.


### What is "debounce"

At this page you often can see the phrase "micropattern debounce". This is widely used pattern which enforces that a function not be called again until a certain amount of time has passed without it being called. More info can be found [there](https://davidwalsh.name/javascript-debounce-function).


### How should look like a big application?

An application written with Seemple.js usually represents one nested JavaScript object where every branch is {@link Seemple} instance. The new branches are created using {@link Seemple#instantiate} which ensures the integrity of the application and allows to replace a state of the application using ordinary assignment.


### How to render one object at few collections

The first thing: you need to set ``bindRenderedAsSandbox`` as ``false`` for an item class. It turns off automatic sandbox initialization for rendered object (two sandboxes for one object aren't allowed).

The second thing: when ``render`` event is fired, check where the object is rendered. Parent array can be get using ``parentArray`` property of the event object.

Example. You have ``User`` class and two collections ``UsersA`` and ``UsersB`` (their {@link Seemple.Array#itemRenderer} can be different). For both collections ``User`` is a {@link Seemple.Array#Model model}.

```js
class User extends Seemple.Object {
    constructor() {
        super();

        this.bindRenderedAsSandbox = false;

        setInterval(() => {
            // when "name" is changed
            // both bound nodes also change
            this.name = Math.random();
        }, 5000);
    }
    onRender(evt) {
        const { parentArray, node } = evt;

        if(parentArray instanceof UsersA) {
            this.bindNode({
                // pseudo-sandbox creation for syntax sugar at selectors
                // (not required)
                nodeA: node,
                name: ':bound(nodeA) .name',
                email: ':bound(nodeA) .email',
            });
        } else if(parentArray instanceof UsersB) {
            this.bindNode({
                nodeB: node,
                name: ':bound(nodeB) .user-name',
            });
        }
    }
}
```

Actually there are many ways to solve this problem. For example bindings can be declared at classes of the collections (an array will listen to ``render`` event of inserted objects)...
