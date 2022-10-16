import {HTMLElement} from './element.js';

export class HTMLMapElement extends HTMLElement {
  constructor(ownerDocument, localName = 'map') {
    super(ownerDocument, localName);
  }
}
