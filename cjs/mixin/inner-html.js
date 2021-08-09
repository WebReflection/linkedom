'use strict';
const {parseFromString} = require('../shared/parse-from-string.js');
const {
  ignoreCase
} = require('../shared/utils.js');
const {
  CUSTOM_ELEMENTS
} = require('../shared/symbols.js');

const getInnerHtml = node => node.childNodes.join('');
exports.getInnerHtml = getInnerHtml;

const setInnerHtml = (node, html) => {
  const {ownerDocument} = node;
  const {constructor} = ownerDocument;
  const document = new constructor;
  document[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
  const {childNodes} = parseFromString(document, ignoreCase(node), html);

  node.replaceChildren(...childNodes);
};
exports.setInnerHtml = setInnerHtml;
