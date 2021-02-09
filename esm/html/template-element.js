import {isNotParsing} from '../shared/parse-from-string.js';
import {registerHTMLClass} from '../shared/register-html-class.js';

import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLTemplateElement
 */
class HTMLTemplateElement extends HTMLElement {
  constructor(ownerDocument) {
    super(ownerDocument, 'template');
    this.content = this.ownerDocument.createDocumentFragment();
  }

  get innerHTML() {
    return this.content.childNodes.join('');
  }

  set innerHTML(value) {
    super.innerHTML = value;
    this.content.replaceChildren(
      ...this.childNodes.map(node => node.cloneNode(true))
    );
  }

  // needed only during serialization
  insertBefore(node, before) {
    if (isNotParsing())
      super.insertBefore(node, before);
    else
      this.content.appendChild(node);
    return node;
  }
}

registerHTMLClass('template', HTMLTemplateElement);

export {HTMLTemplateElement};
