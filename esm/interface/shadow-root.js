import {DOCUMENT_FRAGMENT_NODE} from '../shared/constants.js';
import {getInnerHtml, setInnerHtml} from '../mixin/inner-html.js';
import {DocumentFragment} from './document-fragment.js';

/**
 * @implements globalThis.ShadowRoot
 * https://dom.spec.whatwg.org/#shadowroot
 */
export class ShadowRoot extends DocumentFragment {
  constructor(host, init) {
    super(host.ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
    this.host = host;
    this.mode = init.mode;
    this.delegatesFocus = init.delegatesFocus ?? false;
    this.slotAssignment = init.slotAssignment ?? "named";
  }

  get innerHTML() {
    return getInnerHtml(this);
  }
  set innerHTML(html) {
    setInnerHtml(this, html);
  }
}
