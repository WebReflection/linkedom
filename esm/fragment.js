import {Type} from './common.js';
import {Element} from './element.js';

export const DOCUMENT_FRAGMENT_NODE = Type.Fragment;

export class Fragment extends Element {
  constructor() {
    super('#fragment');
    this.nodeType = DOCUMENT_FRAGMENT_NODE;
  }
};
