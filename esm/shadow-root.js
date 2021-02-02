import {Fragment} from './fragment.js';

/**
 * @implements globalThis.ShadowRoot
 */
export class ShadowRoot extends Fragment {

  constructor(ownerDocument) {
    super(ownerDocument, '#shadow-root');
  }

}
