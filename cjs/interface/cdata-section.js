'use strict';
const {CDATA_SECTION_NODE} = require('../shared/constants.js');
const {VALUE} = require('../shared/symbols.js');

const {CharacterData} = require('./character-data.js');

/**
 * @implements globalThis.CDATASection
 */
class CDATASection extends CharacterData {
  constructor(ownerDocument, data = '') {
    super(ownerDocument, '#cdatasection', CDATA_SECTION_NODE, data);
  }

  cloneNode() {
    const {ownerDocument, [VALUE]: data} = this;
    return new CDATASection(ownerDocument, data);
  }

  toString() { return `<![CDATA[${this[VALUE]}]]>`; }
}
exports.CDATASection = CDATASection
