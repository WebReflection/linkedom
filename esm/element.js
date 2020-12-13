import {Type, invalidOperation, link} from './common.js';
import {Node} from './node.js';
import {ClassList} from './class-list.js';
import {ATTRIBUTE_NODE, Attribute} from './attribute.js';
import {COMMENT_NODE} from './comment.js';
import {TEXT_NODE} from './text.js';

const DOCUMENT_FRAGMENT_NODE = Type.Fragment;
const ELEMENT_END_NODE = Type.ElementEnd;

export const ELEMENT_NODE = Type.Element;

const between = (before, current, after) => {
  const beforeEnd = before.nodeType === ELEMENT_NODE &&
                    // allow empty nodes insertion
                    before !== after.prev ?
                      before.end : before;
  switch (current.nodeType) {
    case DOCUMENT_FRAGMENT_NODE:
      link(beforeEnd, current.next);
      link(current.end.prev, after);
      link(current, current.end);
      break;
    case ELEMENT_NODE:
      link(beforeEnd, current);
      link(current.end, after);
      break;
    default:
      link(beforeEnd, current);
      link(current, after);
      break;
  }
};

const insertable = ({nodeType}) => {
  switch (nodeType) {
    case COMMENT_NODE:
    case ELEMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
    case TEXT_NODE:
      return true;
    default:
      return false;
  }
};

const setParent = (child, parentNode) => {
  switch (child.nodeType) {
    case DOCUMENT_FRAGMENT_NODE:
      let {next, end} = child;
      while (next && next !== end) {
        next.parentNode = parentNode;
        switch (next.nodeType) {
          case ELEMENT_NODE:
            next = next.end.next;
            break;
          default:
            next = next.next;
            break;
        }
      }
      break;
    default:
      const {parentNode: childParent} = child;
      if (childParent !== parentNode) {
        if (childParent)
          childParent.removeChild(child);
        child.parentNode = parentNode;
      }
      break;
  }
};

class ElementEnd extends Node {
  constructor() {
    super(ELEMENT_END_NODE, '#/>');
  }
}

export class Element extends Node {
  /**
   * @param {string} name the Element name
   */
  constructor(name, isVoid = false) {
    super(ELEMENT_NODE, name);
    this.void = isVoid;
    this.end = new ElementEnd;
    this.classList = new ClassList(this);
    link(this, this.end);
  }

  get id() {
    return this.getAttribute('id');
  }

  set id(id) {
    this.setAttribute('id', id);
  }

  /**
   * @return {Attribute[]} the list if attributes.
   */
  get attributes() {
    const out = [];
    let {next} = this;
    while (next.nodeType === ATTRIBUTE_NODE) {
      out.push(next);
      next = next.next;
    }
    return out;
  }

  /**
   * @return {Element[]} all elements in this node.
   */
  get children() {
    const out = [];
    let {next, end} = this;
    while (next !== end) {
      switch (next.nodeType) {
        case ELEMENT_NODE:
          out.push(next);
          next = next.end.next;
          break;
        default:
          next = next.next;
          break;
      }
    }
    return out;
  }

  /**
   * @return {Comment?|Element?|Text?} the first non-attribute node, if any.
   */
  get firstChild() {
    let {next, end} = this;
    while (next.nodeType === ATTRIBUTE_NODE)
      next = next.next;
    return next === end ? null : next;
  }

  /**
   * @return {Comment?|Element?|Text?} the last non-attribute node, if any.
   */
  get lastChild() {
    let {firstChild} = this;
    let lastChild = firstChild;
    while (firstChild) {
      switch (firstChild.nodeType) {
        case Type.ElementEnd:
          return lastChild;
        case ELEMENT_NODE:
          lastChild = firstChild;
          firstChild = firstChild.end.next;
          break;
        default:
          lastChild = firstChild;
          firstChild = firstChild.next;
          break;
      }
    }
    return lastChild;
  }

  hasChildNodes() {
    return this.next !== this.end;
  }

  getAttribute(name) {
    let {next} = this;
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name)
        return next.value;
      next = next.next;
    }
    return null;
  }

  getAttributeNode(name) {
    let {next} = this;
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name)
        return next;
      next = next.next;
    }
    return null;
  }

  hasAttribute(name) {
    let {next} = this;
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name)
        return true;
      next = next.next;
    }
    return false;
  }

  /**
   * Update, or create, an attribute with `name` / `value` details.
   * @param {string} name the attribute name.
   * @param {string} value the attribute value.
   */
  setAttribute(name, value) {
    let {next} = this;
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name) {
        next.value = value;
        return;
      }
      next = next.next;
    }
    this.insertBefore(new Attribute(name, value));
  }

  setAttributeNode(attribute) {
    if (attribute.nodeType !== ATTRIBUTE_NODE)
      invalidOperation();
    if (this.attributes.indexOf(attribute) < 0) {
      this.insertBefore(attribute);
    }
  }

  /**
   * Remove the attribute matching `name`, if any.
   * @param {string} name the attribute name to remove.
   */
  removeAttribute(name) {
    let {next} = this;
    while (next.nodeType === ATTRIBUTE_NODE) {
      if (next.name === name) {
        this.removeChild(next);
        break;
      }
      next = next.next;
    }
  }

  append() {
    for (let i = 0, {length} = arguments; i < length; i++)
      this.insertBefore(arguments[i]);
  }

  appendChild(child) {
    return this.insertBefore(child);
  }

  /**
   * Insert a node in this element, including attributes, which are always
   * inserted as first linked node.
   * @param {Attribute|Comment|Element|Fragment|Text} child to be inserted.
   * @param {Comment?|Element?|Text?} before the node used to insert before.
   */
  insertBefore(child, before = null) {
    if (before) {
      const {parentNode, prev} = before;
      if (parentNode !== this || !insertable(child))
        invalidOperation();
      setParent(child, this);
      between(prev, child, before);
    }
    else if (child.nodeType === ATTRIBUTE_NODE) {
      setParent(child, this);
      const {next} = this;
      link(this, child);
      link(child, next);
    }
    else if (insertable(child)) {
      setParent(child, this);
      between(this.end.prev, child, this.end);
    }
    else
      invalidOperation();
    return child;
  }

  /**
   * Remove any valid node from this element.
   * @param {Attribute|Comment|Element|Text} child to be removed.
   */
  removeChild(child) {
    const {parentNode, prev, next, nodeType} = child;
    if (parentNode !== this)
      invalidOperation();
    child.parentNode = null;
    switch (nodeType) {
      case ELEMENT_NODE:
        link(prev, child.end.next);
        child.prev = child.end.next = null;
        break;
      default:
        link(prev, next);
        child.prev = child.next = null;
        break;
    }
    return child;
  }

  toString() {
    let traverse = true;
    let {end, name, next, void: isVoid} = this;
    const out = [`<${name}`];
    while (traverse) {
      switch (next.nodeType) {
        case ATTRIBUTE_NODE:
          out.push(` ${next.toString()}`);
          next = next.next;
          break;
        case ELEMENT_END_NODE:
          out.push(isVoid ? ` />` : `></${name}>`);
          traverse = false;
          break;
        default:
          out.push(`>`);
          do {
            out.push(next.toString());
            switch (next.nodeType) {
              case ELEMENT_NODE:
                next = next.end.next;
                break;
              case TEXT_NODE:
              case COMMENT_NODE:
                next = next.next;
                break;
              default:
                throw new TypeError('invalid structure');
            }
          } while (next !== end);
          out.push(`</${name}>`);
          traverse = false;
          break;
      }
    }
    return out.join('');
  }
};
