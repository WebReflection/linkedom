import {HTMLElement} from './element.js';

export class HTMLTrackElement extends HTMLElement {
  constructor(ownerDocument, localName = 'track') {
    super(ownerDocument, localName);
  }
}
