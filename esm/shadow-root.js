import {Fragment} from './fragment.js';

/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends Fragment {

  constructor(ownerDocument) {
    super(ownerDocument, '#shadow-root');
  }

  toString() {
    const {localName} = this;
    return `<${localName}>${this.childNodes.join('')}</${localName}>`
  }
}
