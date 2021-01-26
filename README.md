# linkedom

A triple-linked lists based DOM with the following goals:

  * **avoid** maximum callstack/recursion **crashes**, even under heaviest conditions.
  * guarantee **linear performance** from small to big documents.
  * be **close to the** current **DOM standard**, but not too close.
  * replace [basicHTML](https://github.com/WebReflection/basicHTML#readme) (long term goal).

### Work in progress

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
