# 🔗 linkedom

[![Build Status](https://travis-ci.com/WebReflection/linkedom.svg?branch=main)](https://travis-ci.com/WebReflection/linkedom) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/linkedom/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/linkedom?branch=main)

<sup>**Social Media Photo by [JJ Ying](https://unsplash.com/@jjying) on [Unsplash](https://unsplash.com/)**</sup>

A triple-linked lists based DOM with the following goals:

  * **avoid** maximum callstack/recursion or **crashes**, even under heaviest conditions.
  * guarantee **linear performance** from small to big documents.
  * be **close to the** current **DOM standard**, but not too close.
  * replace [basicHTML](https://github.com/WebReflection/basicHTML#readme) (long term goal).



## Work in progress

Until there is a badge with 100% code coverage, and *npm* version is `0.1.x`, consider this project highly experimental, or a playground, to see where and how a linked-list based DOM can shine, and how difficult it would be to reach at least feature-parity with *basicHTML*.

```js
import {DOMParser} from 'linkedom';

const document = (new DOMParser).parseFromString(`
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
  `,
  'text/html'
);

document.toString();
// the parsed HTML document

document.documentElement;
// the <html> element

document.querySelectorAll('form, input[name], button');
// the NodeList of elements
// CSS Selector via CSSselect
```



## Parsing VS Node Types

This module parses, and works, only with the following `nodeType`:

  * `ELEMENT_NODE`
  * `ATTRIBUTE_NODE`
  * `TEXT_NODE`
  * `COMMENT_NODE`
  * `DOCUMENT_NODE`
  * `DOCUMENT_FRAGMENT_NODE`

Everything else, at least for the time being, is considered *YAGNI*, and it won't likely ever land in this project, as there's no goal to replicate deprecated features of this aged Web.



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
