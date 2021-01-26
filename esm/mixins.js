import {
  ELEMENT_NODE_END,
  ELEMENT_NODE,
  ATTRIBUTE_NODE,
  DOM
} from './constants.js';

import {NodeList} from './interfaces.js';

import {findNext, getEnd} from './utils.js';

// https://dom.spec.whatwg.org/#childnode
export const ChildNode = {

  before(node, ...nodes) {
    throw new Error('before not implemented');
  },

  after(node, ...nodes) {
    throw new Error('after not implemented');
  },

  replaceWith(node, ...nodes) {
    const fragment = node.ownerDocument.createDocumentFragment();
    fragment.append(...nodes);
    node.parentNode.replaceChild(fragment, node);
  },

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

// https://dom.spec.whatwg.org/#nondocumenttypechildnode
export const NonDocumentTypeChildNode = {

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

// https://dom.spec.whatwg.org/#nonelementparentnode
export const NonElementParentNode = {

  getElementById({_next}, id) {
    while (_next) {
      if (_next.nodeType === ELEMENT_NODE && _next.id === id)
        return _next;
      _next = _next._next;
    }
    return null;
  }
};

const append = (element, ...nodes) => {
  const {ownerDocument, _end} = element;
  for (const node of nodes)
    element.insertBefore(
      (node && node[DOM]) ? node : ownerDocument.createTextNode(node),
      _end
    );
};

// https://dom.spec.whatwg.org/#parentnode
export const ParentNode = {

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

  firstElementChild({_next, _end}) {
    while (_next !== _end && _next.nodeType !== ELEMENT_NODE)
      _next = _next._next;
    return _next === _end ? null : _next;
  },

  lastElementChild({lastChild}) {
    if (lastChild) {
      if (lastChild.nodeType !== ELEMENT_NODE)
        lastChild = lastChild.previousElementSibling;
    }
    return lastChild;
  },

  childElementCount({children}) {
    return children.length;
  },

  prepend(element, ...nodes) {
    const {ownerDocument, firstChild} = element;
    for (const node of nodes)
      element.insertBefore(
        (node && node[DOM]) ? node : ownerDocument.createTextNode(node),
        firstChild
      );
  },

  append,

  replaceChildren(element, ...nodes) {
    let {_next, _end} = element;
    while (_next !== _end) {
      const next = getEnd(_next)._next;
      _next.remove();
      _next = next;
    }
    append(element, ...nodes);
  },

  querySelector({_next}, selectors) {
    while (_next) {
      if (_next.nodeType === ELEMENT_NODE && _next.matches(selectors))
        return _next;
      _next = _next._next;
    }
    return null;
  },

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

// https://dom.spec.whatwg.org/#slotable
export const Slottable = {

  assignedSlot(node) {
    throw new Error('assignedSlot not implemented');
  }
};

// https://dom.spec.whatwg.org/#xpathevaluatorbase
export const XPathEvaluatorBase = {

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
