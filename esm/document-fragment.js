import {Fragment} from './fragment.js';

/**
 * @implements globalThis.DocumentFragment
 */
export class DocumentFragment extends Fragment {

  constructor(ownerDocument) {
    super(ownerDocument, '#document-fragment');
  }

}
