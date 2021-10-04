'use strict';
const {CUSTOM_ELEMENTS} = require('../shared/symbols.js');
const {parseFromString} = require('../shared/parse-from-string.js');
const {ignoreCase} = require('../shared/utils.js');


/**
 * @param {Node} node
 * @returns {String}
 */
const getInnerHtml = node => node.childNodes.join('');
exports.getInnerHtml = getInnerHtml;

/**
 * @param {Node} node
 * @param {String} html
 */
const setInnerHtml = (node, html) => {
  const {ownerDocument} = node;
  const {constructor} = ownerDocument;
  const document = new constructor;
  document[CUSTOM_ELEMENTS] = ownerDocument[CUSTOM_ELEMENTS];
  const {childNodes} = parseFromString(document, ignoreCase(node), html);

  node.replaceChildren(...childNodes);
};
exports.setInnerHtml = setInnerHtml;
