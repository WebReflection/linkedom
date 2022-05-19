const { parseHTML, HTMLElement } = require('../cjs');
const { createServer } = require('http');


class TestElement extends HTMLElement {

  connectedCallback() {
    this.innerHTML = 'Hello world!';
  }

}

createServer((req, rep) => {
  let document, customElements;
  if (req.url === '/document') {
    const parsed  = parseHTML('<!DOCTYPE html><html><head><title>Document</title><body><test-element></test-element></body></html>')
    document = parsed.document;
    customElements = parsed.customElements;
  } else {
    const parsed = parseHTML('<!DOCTYPE html><html><head><title>Index</title><body><test-element></test-element></body></html>');
    document = parsed.document;
    customElements = parsed.customElements;
  }
  customElements.define('test-element', class extends TestElement {});
  rep.statusCode = 200;
  rep.write(document.toString())
  rep.end();
}).listen(8888, () => console.log('http://localhost:8888/'));
