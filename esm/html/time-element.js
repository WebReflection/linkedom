import {stringAttribute} from '../shared/attributes.js';
import {registerHTMLClass} from '../shared/register-html-class.js';

import {HTMLElement} from './element.js';

/**
 * @implements globalThis.HTMLTimeElement
 */
class HTMLTimeElement extends HTMLElement {
  constructor(ownerDocument, localName = 'time') {
    super(ownerDocument, localName);
  }

  /**
   * @type {string}
   */
  get dateTime() { return stringAttribute.get(this, 'datetime'); }
  set dateTime(value) { stringAttribute.set(this, 'datetime', value); }
}

registerHTMLClass('time', HTMLTimeElement)

export {HTMLTimeElement};
