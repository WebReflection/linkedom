import {HTMLElement} from './element.js';

const {toString} = HTMLElement.prototype;

export class TextElement extends HTMLElement {

  get innerHTML() { return this.textContent; }
  set innerHTML(html) {
    // this works around a ts bug with automatically inferring textContent when it's a getter/setter in the base class
    // https://github.com/microsoft/TypeScript/issues/51191
    /** @type {string} */
    this.textContent = html;
  }

  toString() {
    const outerHTML = toString.call(this.cloneNode());
    return outerHTML.replace(/></, `>${this.textContent}<`);
  }
}
