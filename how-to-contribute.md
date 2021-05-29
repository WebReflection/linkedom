# 👭👫👬 How To Contribute

First of all, thank you for willing to help *LinkeDOM* become a better module ♥

Beside [this generic reminder on how to contribute](https://gist.github.com/WebReflection/f6dc8017a1c10f0ece2e292b0b9607ff), this section would like to explain how things are organized, and how to simplify external pull or merge requests.



## Source of truth

This project is [published as dual module](https://webreflection.medium.com/a-nodejs-dual-module-deep-dive-8f94ff56210e), hoping neither tools nor different envs, would ever have issues.

However, the only folder that contains source code is the **[./esm/](./esm)** one, so that any pull request that would like to improve, fix, or change something, should use that folder, *not the `./cjs/` one*.

All files in `./cjs` are automatically overwritten every time something in `./esm` changes, but changes in `./cjs` are accepted too, because this is how this library is *currently* being tested to grant both *CommonJS* and *ESM* consumers can have it working.



## Testing

Almost every `./esm` file, within its folder, is replicated in the `./test` folder too.

Each test is executed twice: once for `linkedom` module, and a second pass for `linkedom/cached` export.

The very beginning of the test ensures everything is OK in *ESM* exports-land, it runs a quick benchmark to be sure everything works as expected and, eventually, keep performance under control, and finally to verify that all code has been covered.

If a proposed change decrease overall code coverage, this won't be accepted until the score is back to 100%.

**However**, there are various parts that are already covered and won't likely benefit from extra tests. This is specially the case for *HTMLClasses accessors*, like the `HTMLImageElement#src` getter and setter, and all others I might have not fully augmented yet.

In these contributions cases, you are not required to write extra tests, but please add `/* c8 ignore start */` and `/*c8 ignore stop */` around the proposed new code, or place new accessors within previously defined `c8` directives.


## Testing - Helpers

The [assert.js](./test/assert.js) helper is pretty straight forward to use:

```js
const assert = require('../assert.js').for('Test Name');

let condition = 'Some value';
let expectations = 'Some expectation';
assert(condition, expectation, message = '');
```

To run tests it's necessary to `npm run build` because ESM gets transpiled into CJS and then test and coverage happens.

Nothing that doesn't score 100% test coverage will go through, and it's a good practice to use, as `Test Name`, the class, interface, or file, that's being tested.





## HTMLClasses Contributions

This is a *[TL;DR commit example](https://github.com/WebReflection/linkedom/commit/2fa2d3b063f5b420c207f346d1ce943218d14178)*, explained in details here.

- - -

I have created *N* classes via an automated procedure, but while these are all exposes, not all of them are actually ever used.

This is an example of a class that is never used within the core:

```js
import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLExample
 */
export class HTMLExample extends HTMLElement {
  constructor(ownerDocument, localName = 'example') {
    super(ownerDocument, localName);
  }
}
```

In order to expose `HTMLExample` to the *parser*, so that it creates a specialized element, instead of a generic `HTMLElement` one, we need to somehow register it via the ad-hoc utility:

```js
import {registerHTMLClass} from '../shared/register-html-class.js';
import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLExample
 */
// NOTE: the export is not here anymore !
class HTMLExample extends HTMLElement {
  constructor(ownerDocument, localName = 'example') {
    super(ownerDocument, localName);
  }
}

// NOTE: remember to register this class
registerHTMLClass('example', HTMLExample);

// NOTE: named export at the end
export {HTMLExample};
```

Once these changes are in, it will be possible from the code to simply invoke `new HTMLExample()` without any argument, or `document.createElement('example')` which will be an instance of `HTMLExample`, not only of `HTMLElement`.

### What if there are multiple tags per class?

Good thinking, and the `HTMLHeadingElement` is a good example to check out:

```js
import {registerHTMLClass} from '../shared/register-html-class.js';
import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLHeadingElement
 */
class HTMLHeadingElement extends HTMLElement {
  constructor(ownerDocument, localName = 'h1') {
    super(ownerDocument, localName);
  }
}

// registerHTMLClass accepts a string or an array of strings
registerHTMLClass(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], HTMLHeadingElement);

export {HTMLHeadingElement};
```

A `document.createElement('h1')` and a `document.createElement('h6')` will share the same `HTMLHeadingElement` class.


### What about attributes accessors?

Currently there are 3 kinds of attributes helpers:

  * **booleanAttribute**, it sets, or remove, the attribute, accordingly with its *truthy* value. Example: `button.disabled = true`
  * **numericAttribute**, it casts the attribute as *number*, and returns it as such. Example: `img.width = 100`
  * **stringAttribute**, it sets or retrieves the attribute as *string*, no matter its value. Example: `img.src`

All attributes helpers are available via `import {...} from '../shared/attributes.js'`, and these all share the same signature:

```js
helper.get(element, attributeName);             // returns something
helper.set(element, attributeName, anyValue);   // returns void
```

If you are not sure, please check other classes, 'cause one of those will use these helpers for something.


### What about other accessors?

There is a commented `nullableAttribute` too, which is similar to a `stringAttribute` but removes the attribute if, and only if, its value is `null`.

However, this behavior is usually associated with *DOM Level 0* events, covered differently due listeners dance, but if you find an attribute that acts similarly, feel fee to uncomment `nullableAttribute` and use it.


## What about ... ?

If there's anything in particular you'd like to know, or something still not clear, please open an issue asking for extra clarifications in this page.

Thank you for your collaboration 👋
