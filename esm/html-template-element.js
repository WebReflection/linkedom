import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTemplateElement
 */
export class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, 'template');
    this.content = this.ownerDocument.createDocumentFragment();
  }

  get innerHTML() {
    return this.content.toString();
  }

  set innerHTML(value) {
    super.innerHTML = value;
    this.content.replaceChildren(...this.childNodes);
  }
}
