import {DOCUMENT_NODE} from './constants.js';
import {ChildNode, ParentNode} from './mixins.js';
import {Node, NodeElement} from './node.js';
import {Element} from './element.js';
import {DocumentFragment} from './document-fragment.js';

const {
  defineProperties,
  getOwnPropertyDescriptors,
  setPrototypeOf
} = Object;

const querySelectorWM = new WeakMap;
const querySelectorAllWM = new WeakMap;

const reset = parentNode => {
  while (
    parentNode && (
      parentNode._children ||
      parentNode._childNodes ||
      querySelectorWM.has(parentNode) ||
      querySelectorAllWM.has(parentNode)
    )
  ) {
    parentNode._children = parentNode._childNodes = null;
    querySelectorWM.delete(parentNode);
    querySelectorAllWM.delete(parentNode);
    parentNode = parentNode.parentNode;
    if (parentNode && parentNode.nodeType === DOCUMENT_NODE)
      return;
  }
};

// <ChildNode>
const {remove} = ChildNode;
ChildNode.remove = node => {
  const {parentNode} = node;
  if (parentNode)
    reset(parentNode);
  remove(node);
};
// </ChildNode>



// <ParentNode>
const {querySelector, querySelectorAll} = ParentNode;

ParentNode.querySelector = (element, selectors) => {
  if (!querySelectorWM.has(element))
    querySelectorWM.set(element, new Map);
  const map = querySelectorWM.get(element);
  if (map.has(selectors))
    return map.get(selectors);
  const result = querySelector(element, selectors);
  map.set(selectors, result);
  return result;
};

ParentNode.querySelectorAll = (element, selectors) => {
  if (!querySelectorAllWM.has(element))
    querySelectorAllWM.set(element, new Map);
  const map = querySelectorAllWM.get(element);
  if (map.has(selectors))
    return map.get(selectors);
  const result = querySelectorAll(element, selectors);
  map.set(selectors, result);
  return result;
};
// </ParentNode>



// <Node>
const {
  childNodes: {get: getChildNodes},
  children: {get: getChildren},
  insertBefore: {value: insertBefore},
  normalize: {value: normalize}
} = getOwnPropertyDescriptors(NodeElement.prototype);

for (const key of [
  'childNodes',
  'children',
  'insertBefore',
  'normalize'
])
  delete NodeElement.prototype[key];

class CachedNode extends Node {
  constructor(ownerDocument, localName, nodeType) {
    super(ownerDocument, localName, nodeType);
    this._children = null;
    this._childNodes = null;
  }

  get childNodes() {
    return this._childNodes || (this._childNodes = getChildNodes.call(this));
  }

  get children() {
    return this._children || (this._children = getChildren.call(this));
  }

  insertBefore(node, before) {
    reset(this);
    return insertBefore.call(this, node, before);
  }

  normalize() {
    reset(this);
    normalize.call(this);
  }
}

setPrototypeOf(NodeElement, CachedNode);
setPrototypeOf(NodeElement.prototype, CachedNode.prototype);
// </Node>



// <Element>
const {
  innerHTML: {get: getInnerHTML, set: setInnerHTML},
  textContent: {get: getTextContent, set: setTextContent}
} = getOwnPropertyDescriptors(Element.prototype);

for (const key of [
  'innerHTML',
  'textContent',
  'getElementsByClassName',
  'getElementsByTagName',
])
  delete Element.prototype[key];

class CachedElement extends NodeElement {
  get innerHTML() {
    return getInnerHTML.call(this);
  }
  set innerHTML(value) {
    reset(this);
    setInnerHTML.call(this, value);
  }
  get textContent() {
    return getTextContent.call(this);
  }
  set textContent(value) {
    reset(this);
    setTextContent.call(this, value);
  }
  getElementsByClassName(name) {
    return this.querySelectorAll(`.${name}`);
  }
  getElementsByTagName(name) {
    return this.querySelectorAll(name);
  }
}

setPrototypeOf(Element, CachedElement);
setPrototypeOf(Element.prototype, CachedElement.prototype);
// </Element>



// <DocumentFragment>
defineProperties(DocumentFragment.prototype, {
  toString: {
    value() {
      reset(this);
      return this.childNodes.join('');
    }
  }
});
// </DocumentFragment>



export * from './index.js';
