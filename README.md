# 🔗 linkedom

[![Downloads](https://img.shields.io/npm/dm/linkedom.svg)](https://www.npmjs.com/package/linkedom) [![Build Status](https://travis-ci.com/WebReflection/linkedom.svg?branch=main)](https://travis-ci.com/WebReflection/linkedom) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/linkedom/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/linkedom?branch=main)

<sup>**Social Media Photo by [JJ Ying](https://unsplash.com/@jjying) on [Unsplash](https://unsplash.com/)**</sup>

A triple-linked lists based DOM with the following goals:

  * **avoid** maximum callstack/recursion or **crashes**, even under heaviest conditions.
  * guarantee **linear performance** from small to big documents.
  * be **close to the** current **DOM standard**, but not too close.

```js
import {DOMParser, parseHTML} from 'linkedom';

// Standard way: text/html, text/xml, image/svg+xml, etc...
// const document = (new DOMParser).parseFromString(html, 'text/html');

// Simplified way for HTML
const {
  // note, these are *not* globals
  window, document, customElements,
  HTMLElement,
  Event, CustomEvent
  // other exports ..
} = parseHTML(`
  <!doctype html>
  <html lang="en">
    <head>
      <title>Hello SSR</title>
    </head>
    <body>
      <form>
        <input name="user">
        <button>
          Submit
        </button>
      </form>
    </body>
  </html>
`);

// builtin extends compatible too 👍
customElements.define('custom-element', class extends HTMLElement {
  connectedCallback() {
    console.log('it works 🥳');
  }
});

document.body.appendChild(
  document.createElement('custom-element')
);

document.toString();
// the SSR ready document

document.querySelectorAll('form, input[name], button');
// the NodeList of elements
// CSS Selector via CSSselect
```


### Simulating JSON Bootstrap

This module is based on [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) API, hence it creates a *new* `document` each time `new DOMParser().parseFromString(...)` is invoked.

As there's *no global pollution* whatsoever, to retrieve classes and features associated to the `document` returned by `parseFromString`, you need to access its `defaultView` property, which is a special proxy that lets you get *pseudo-global-but-not-global* properties and classes.

Accordingly, to simulate `new JSDOM(html).window` behavior, you can use a tiny helper like the following one:

```js
// facade to a generic JSDOM bootstrap
import {parseHTML} from 'linkedom';
function JSDOM(html) { return parseHTML(html).defaultView; }

// now you can do the same as you would with JSDOM
const {document} = new JSDOM('<h1>Hello LinkeDOM 👋</h1>').window;
```



## How does it work?

All nodes are linked on both sides, and all elements consist of 2 nodes, also linked in between.

Attributes are always at the beginning of an element, while zero or more extra nodes can be found before the end.

A fragment is a special element without boundaries, or parent node.

```
Node:             ← node →
Attr<Node>:       ← attr →          ↑ ownerElement?
Text<Node>:       ← text →          ↑ parentNode?
Comment<Node>:    ← comment →       ↑ parentNode?
Element<Node>:    ← start ↔ end →   ↑ parentNode?

Fragment<Element>:  start ↔ end

Element example:

        parentNode? (as shortcut for a linked list of previous nodes)
            ↑
            ├────────────────────────────────────────────┐
            │                                            ↓
  node? ← start → attr* → text* → comment* → element* → end → node?
            ↑                                            │
            └────────────────────────────────────────────┘


Fragment example:

            ┌────────────────────────────────────────────┐
            │                                            ↓
          start → attr* → text* → comment* → element* → end
            ↑                                            │
            └────────────────────────────────────────────┘
```

If this is not clear, feel free to **[read more in the deep dive page](./deep-dive.md)**.


### Why is this better?

Moving *N* nodes from a container, being it either an *Element* or a *Fragment*, requires the following steps:

  * update the first *left* link of the moved segment
  * update the last *right* link of the moved segment
  * connect the *left* side, if any, of the moved node at the beginning of the segment, with the *right* side, if any, of the node at the end of such segment
  * update the *parentNode* of the segment to either *null*, or the new *parentNode*

As result, there are no array operations, and no memory operations, and everything is kept in sync by updating a few properties, so that removing `3714` sparse `<div>` elements in a *12M* document, as example, takes as little as *3ms*, while appending a whole fragment takes close to *0ms*.

Try `npm run benchmark:html` to see it yourself.

This structure also allows programs to avoid issues such as "*Maximum call stack size exceeded*" <sup><sub>(basicHTML)</sub></sup>, or "*JavaScript heap out of memory*" crashes <sup><sub>(JSDOM)</sub></sup>, thanks to its reduced usage of memory and zero stacks involved, hence scaling better from small to very big documents.

### Are *childNodes* and *children* always computed?

As everything is a `while(...)` loop away, by default this module does not cache anything, specially because caching requires state invalidation for each container, returned queries, and so on. However, you can import `linkedom/cached` instead, as long as you [understand its constraints](https://github.com/WebReflection/linkedom#cached-vs-not-cached).


## Parsing VS Node Types

This module parses, and works, only with the following `nodeType`:

  * `ELEMENT_NODE`
  * `ATTRIBUTE_NODE`
  * `TEXT_NODE`
  * `COMMENT_NODE`
  * `DOCUMENT_NODE`
  * `DOCUMENT_FRAGMENT_NODE`
  * `DOCUMENT_TYPE_NODE`

Everything else, at least for the time being, is considered *YAGNI*, and it won't likely ever land in this project, as there's no goal to replicate deprecated features of this aged Web.



## Cached VS Not Cached

This module exports both `linkedom` and `linkedom/cached`, which are basically the exact same thing, except the cached version outperforms `linkedom` in these scenarios:

  * the document, or any of its elements, are rarely changed, as opposite of frequently mutated or manipulated
  * the use-case needs many repeated *CSS* selectors, over a sporadically mutated "*tree*"
  * the generic DOM mutation time is *not* a concern (each, removal or change requires a whole document cache invalidation)
  * the *RAM* is *not* a concern (all cached results are held into *NodeList* arrays until changes happen)

On the other hand, the basic, *non-cached*, module, grants the following:

  * minimal amount of *RAM* needed, given any task to perform, as nothing is ever retained on *RAM*
  * linear fast performance for any *every-time-new* structure, such as those created via `importNode` or `cloneNode` (i.e. template literals based libraries)
  * much faster DOM manipulation, without side effect caused by cache invalidation



## Benchmarks

To run the benchmark locally, please follow these commands:

```sh
git clone https://github.com/WebReflection/linkedom.git

cd linkedom/test
npm i

cd ..
npm i

npm run benchmark
```
