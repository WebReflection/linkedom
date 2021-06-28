import {
  NODE_END,
  ATTRIBUTE_NODE,
  COMMENT_NODE,
  DOCUMENT_TYPE_NODE,
  ELEMENT_NODE,
  TEXT_NODE
} from './constants.js';

import {END, NEXT, VALUE} from './symbols.js';

import {getEnd} from './utils.js';

const loopSegment = ({[NEXT]: next, [END]: end}, json) => {
  while (next !== end) {
    switch (next.nodeType) {
      case ATTRIBUTE_NODE:
        attrAsJSON(next, json);
        break;
      case TEXT_NODE:
      case COMMENT_NODE:
        characterDataAsJSON(next, json);
        break;
      case ELEMENT_NODE:
        elementAsJSON(next, json);
        next = getEnd(next);
        break;
      case DOCUMENT_TYPE_NODE:
        documentTypeAsJSON(next, json);
        break;
    }
    next = next[NEXT];
  }
  const last = json.length - 1;
  const value = json[last];
  if (typeof value === 'number' && value < 0)
    json[last] += NODE_END;
  else
    json.push(NODE_END);
};

export const attrAsJSON = (attr, json) => {
  json.push(ATTRIBUTE_NODE, attr.name);
  const value = attr[VALUE].trim();
  if (value)
    json.push(value);
};

export const characterDataAsJSON = (node, json) => {
  const value = node[VALUE];
  if (value.trim())
    json.push(node.nodeType, value);
};

export const nonElementAsJSON = (node, json) => {
  json.push(node.nodeType);
  loopSegment(node, json);
};

export const documentTypeAsJSON = ({name, publicId, systemId}, json) => {
  json.push(DOCUMENT_TYPE_NODE, name);
  if (publicId)
    json.push(publicId);
  if (systemId)
    json.push(systemId);
};

export const elementAsJSON = (element, json) => {
  json.push(ELEMENT_NODE, element.localName);
  loopSegment(element, json);
};
