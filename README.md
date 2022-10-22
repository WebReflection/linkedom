# 🔗 linkedom

[![Downloads](https://img.shields.io/npm/dm/linkedom.svg)](https://www.npmjs.com/package/linkedom) [![Build Status](https://travis-ci.com/WebReflection/linkedom.svg?branch=main)](https://travis-ci.com/WebReflection/linkedom) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/linkedom/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/linkedom?branch=main)

<sup>**Social Media Photo by [JJ Ying](https://unsplash.com/@jjying) on [Unsplash](https://unsplash.com/)**</sup>

### This is not a crawler!

LinkeDOM is a [triple-linked list](#data-structure) based DOM-like namespace, for DOM-less environments, with the following goals:

  * **avoid** maximum callstack/recursion or **crashes**, even under heaviest conditions.
  * guarantee **linear performance** from small to big documents.
  * be **close to the** current **DOM standard**, but [not too close](https://github.com/WebReflection/linkedom#faq).

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

### What's New

  * in `v0.11` a new `linkedom/worker` export has been added. This works with [deno](https://deno.land/), Web, and Service Workers, and it's not strictly coupled with NodeJS. Please note, this export does not include `canvas` module, and the `performance` is retrieved from the `globalThis` context.

### Serializing as JSON

*LinkeDOM* uses a blazing fast [JSDON serializer](https://github.com/WebReflection/jsdon#readme), and nodes, as well as whole documents, can be retrieved back via `parseJSON(value)`.

```js
// any node can be serialized
const array = document.toJSON();

// somewhere else ...
import {parseJSON} from 'linkedom';

const document = parseJSON(array);
```

Please note that *Custom Elements* won't be upgraded, unless the resulting nodes are imported via `document.importNode(nodeOrFragment, true)`.

Alternatively, `JSDON.fromJSON(array, document)` is able to initialize right away *Custom Elements* associated with the passed `document`.


### Simulating JSDOM Bootstrap

This module is based on [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) API, hence it creates a *new* `document` each time `new DOMParser().parseFromString(...)` is invoked.

As there's *no global pollution* whatsoever, to retrieve classes and features associated to the `document` returned by `parseFromString`, you need to access its `defaultView` property, which is a special proxy that lets you get *pseudo-global-but-not-global* properties and classes.

Alternatively, you can use the `parseHTML` utility which returns a pseudo *window* object with all the public references you need.

```js
// facade to a generic JSDOM bootstrap
import {parseHTML} from 'linkedom';
function JSDOM(html) { return parseHTML(html); }

// now you can do the same as you would with JSDOM
const {document, window} = new JSDOM('<h1>Hello LinkeDOM 👋</h1>');
```


## Data Structure

The triple-linked list data structure is explained below in [How does it work?](#how-does-it-work), the [Deep Dive](./deep-dive.md), and the [presentation on Speakeasy JS](https://www.youtube.com/watch?v=PEESaD7Qkxs).


## F.A.Q.


<details>
  <summary><strong>Why "not too close"?</strong></summary>
  <div>

*LinkeDOM* has zero intention to:

  * implement all things *JSDOM* already implemented. If you need a library which goal is to be 100% standard compliant, please [use JSDOM](https://github.com/jsdom/jsdom) because *LinkeDOM* doesn't want to be neirly as bloated nor as slow as *JSDOM* is
  * implement features not interesting for *Server Side Rendering*. If you need to pretend your NodeJS, Worker, or any other environment, is a browser, please [use JSDOM](https://github.com/jsdom/jsdom)
  * other points listed, or not, in the followung *F.A.Q.s*: this project will always prefer the minimal/fast approach over 100% compliant behavior. Again, if you are looking for 100% compliant behavior and you are not willing to have any compromise in the DOM, this is **not** the project you are looking for

That's it, the rule of thumb is: do I want to be able to render anything, and as fast as possible, in a DOM-less env? *LinkeDOM* is great!

Do I need a 100% spec compliant env that simulate a browser? I rather use *cypress* or *JSDOM* then, as *LinkeDOM* is not meant to be a replacement for neither projects.

  </div>
</details>

<details>
  <summary><strong>Are live collections supported?</strong></summary>
  <div>

The *TL;DR* answer is **no**. Live collections are considered legacy, are slower, have side effects, and it's not intention of *LinkeDOM* to support these, including:

  * `getElementsByTagName` does not update when nodes are added or removed
  * `getElementsByClassName` does not update when nodes are added or removed
  * `childNodes`, if trapped once, does not update when nodes are added or removed
  * `children`, if trapped once, does not update when nodes are added or removed
  * `attributes`, if trapped once, does not update when attributes are added or removed
  * `document.all`, if trapped once, does not update when attributes are added or removed

If any code you are dealing with does something like this:

```js
const {children} = element;
while (children.length)
  target.appendChild(children[0]);
```

it will cause an infinite loop, as the `children` reference won't side-effect when nodes are moved.

You can solve this in various ways though:

```js
// the modern approach (suggested)
target.append(...element.children);

// the check for firstElement/Child approach (good enough)
while (element.firstChild)
  target.appendChild(element.firstChild);

// the convert to array approach (slow but OK)
const list = [].slice.call(element.children);
while (list.length)
  target.appendChild(list.shift());

// the zero trap approach (inefficient)
while (element.childNodes.length)
  target.appendChild(element.childNodes[0]);
```

  </div>
</details>


<details>
  <summary><strong>Are childNodes and children always same?</strong></summary>
  <div>

**Nope**, these are discovered each time, so when heavy usage of these *lists* is needed, but no mutation is meant, just trap these once and use these like a frozen array.

```js
function eachChildNode({childNodes}, callback) {
  for (const child of childNodes) {
    callback(child);
    if (child.nodeType === child.ELEMENT_NODE)
      eachChildNode(child, callback);
  }
}

eachChildNode(document, console.log);
```

  </div>
</details>



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
