import {CDATA_SECTION_NODE} from '../shared/constants.js';
import {VALUE} from '../shared/symbols.js';

import {CharacterData} from './character-data.js';

/**
 * @implements globalThis.CDATASection
 */
export class CDATASection extends CharacterData {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#cdatasection', CDATA_SECTION_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new CDATASection(ownerDocument, data);
  }

  toString() { return `<![CDATA[${this[VALUE]}]]>`; }
}
