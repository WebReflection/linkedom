'use strict';
const {
  ELEMENT_NODE_END,
  ELEMENT_NODE,
  ATTRIBUTE_NODE,
  DOM
} = require('./constants.js');

const {NodeList} = require('./interfaces.js');

const {findNext, getEnd} = require('./utils.js');

const asFragment = (ownerDocument, nodes) => {
  const fragment = ownerDocument.createDocumentFragment();
  fragment.append(...nodes);
  return fragment;
};

// https://dom.spec.whatwg.org/#childnode
const ChildNode = {

  /**
   * @param {Node} node
   * @param  {Node[]} nodes
   */
  before(node, nodes) {
    const {ownerDocument, parentNode} = node;
    if (parentNode)
      parentNode.insertBefore(asFragment(ownerDocument, nodes), node);
  },

  /**
   * @param {Node} node
   * @param  {Node[]} nodes
   */
  after(node, nodes) {
    const {ownerDocument, parentNode} = node;
    if (parentNode) {
      const {_next} = getEnd(node);
      parentNode.insertBefore(asFragment(ownerDocument, nodes), _next);
    }
  },

  /**
   * @param {Node} node
   * @param  {Node[]} nodes
   */
  replaceWith(node, nodes) {
    const {ownerDocument, parentNode} = node;
    if (parentNode) {
      parentNode.insertBefore(asFragment(ownerDocument, nodes), node);
      node.remove();
    }
  },

  /**
   * @param {Node} node 
   */
  remove(node) {
    let {_prev, _next, nodeType} = node;
    let _end = node;
    if (nodeType === ELEMENT_NODE) {
      _end = node._end;
      _next = _end._next;
    }
    if (_prev) _prev._next = _next;
    if (_next) _next._prev = _prev;
    node.parentNode = node._prev = _end._next = null;
  }
};
exports.ChildNode = ChildNode;

// https://dom.spec.whatwg.org/#nondocumenttypechildnode
const NonDocumentTypeChildNode = {

  /**
   * @param {Node} node
   * @returns {Element?}
   */
  previousElementSibling({_prev}) {
    while (_prev) {
      switch (_prev.nodeType) {
        case ELEMENT_NODE_END:
          return _prev._start;
        case ATTRIBUTE_NODE:
          return null;
        default:
          _prev = _prev._prev;
          break;
      }
    }
    return null;
  },

  /**
   * @param {Node} node
   * @returns {Element?}
   */
  nextElementSibling({_next}) {
    while (_next) {
      switch (_next.nodeType) {
        case ELEMENT_NODE:
          return _next;
        default:
          _next = _next._next;
          break;
      }
    }
    return null;
  }
};
exports.NonDocumentTypeChildNode = NonDocumentTypeChildNode;

// https://dom.spec.whatwg.org/#nonelementparentnode
const NonElementParentNode = {

  /**
   * @param {Node} node
   * @param {string} id
   * @returns {Element?}
   */
  getElementById({_next}, id) {
    while (_next) {
      if (_next.nodeType === ELEMENT_NODE && _next.id === id)
        return _next;
      _next = _next._next;
    }
    return null;
  }
};
exports.NonElementParentNode = NonElementParentNode;

/**
 * @param {Element} element
 * @param  {Node[]} nodes
 */
const append = (element, nodes) => {
  const {ownerDocument, _end} = element;
  for (const node of nodes)
    element.insertBefore(
      node[DOM] ? node : ownerDocument.createTextNode(node),
      _end
    );
};

// https://dom.spec.whatwg.org/#parentnode
const ParentNode = {

  /**
   * @param {Element} element
   * @returns {NodeList}
   */
  children(element) {
    const children = new NodeList;
    let {_next, _end} = findNext(element);
    while (_next !== _end) {
      if (_next.nodeType === ELEMENT_NODE) {
        children.push(_next);
        _next = _next._end;
      }
      _next = _next._next;
    }
    return children;
  },

  /**
   * @param {Element} element
   * @returns {Element?}
   */
  firstElementChild({_next, _end}) {
    while (_next !== _end && _next.nodeType !== ELEMENT_NODE)
      _next = _next._next;
    return _next === _end ? null : _next;
  },

  /**
   * @param {Element} element
   * @returns {Element?}
   */
  lastElementChild({lastChild}) {
    if (lastChild) {
      if (lastChild.nodeType !== ELEMENT_NODE)
        lastChild = lastChild.previousElementSibling;
    }
    return lastChild;
  },

  /**
   * @param {Element} element
   * @returns {number}
   */
  childElementCount({children}) {
    return children.length;
  },

  /**
   * @param {Element} element
   * @param  {Node[]} nodes
   */
  prepend(element, nodes) {
    const {ownerDocument, firstChild} = element;
    for (const node of nodes)
      element.insertBefore(
        (node && node[DOM]) ? node : ownerDocument.createTextNode(node),
        firstChild
      );
  },

  append,

  /**
   * @param {Element} element
   * @param  {Node[]} nodes
   */
  replaceChildren(element, nodes) {
    let {_next, _end} = element;
    while (_next !== _end) {
      const next = getEnd(_next)._next;
      _next.remove();
      _next = next;
    }
    append(element, nodes);
  },

  /**
   * @param {Element} element
   * @param  {string} selectors
   * @returns {Element?}
   */
  querySelector({_next}, selectors) {
    while (_next) {
      if (_next.nodeType === ELEMENT_NODE && _next.matches(selectors))
        return _next;
      _next = _next._next;
    }
    return null;
  },

  /**
   * @param {Element} element
   * @param  {string} selectors
   * @returns {NodeList}
   */
  querySelectorAll({_next}, selectors) {
    const elements = new NodeList;
    while (_next) {
      if (_next.nodeType === ELEMENT_NODE && _next.matches(selectors))
        elements.push(_next);
      _next = _next._next;
    }
    return elements;
  }
};
exports.ParentNode = ParentNode;

// ... and one eternity later ... //

// https://dom.spec.whatwg.org/#slotable
const Slottable = {

  assignedSlot(node) {
    throw new Error('assignedSlot not implemented');
  }
};
exports.Slottable = Slottable;

// https://dom.spec.whatwg.org/#xpathevaluatorbase
const XPathEvaluatorBase = {

  createExpression(expression, resolver) {
    throw new Error('createExpression not implemented');
  },

  createNSResolver(nodeResolver) {
    throw new Error('createNSResolver not implemented');
  },

  evaluate(expression, contextNode, resolver = null, type = 0, result = null) {
    throw new Error('evaluate not implemented');
  }
};
exports.XPathEvaluatorBase = XPathEvaluatorBase;
