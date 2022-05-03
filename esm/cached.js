import {DOCUMENT_FRAGMENT_NODE} from './shared/constants.js';
import {defineProperties, getOwnPropertyDescriptors} from './shared/object.js';

import {Attr} from './interface/attr.js';
import {CharacterData} from './interface/character-data.js';
import {Element} from './interface/element.js';

import {ParentNode} from './mixin/parent-node.js';
import {NonElementParentNode} from './mixin/non-element-parent-node.js';
import {HTMLDocument} from './html/document.js';

import {
  childNodesWM,
  childrenWM,
  querySelectorWM,
  querySelectorAllWM,
  get,
  reset
} from './shared/cache.js';

// Attr
const {value: {
  get: getAttributeValue,
  set: setAttributeValue
}} = getOwnPropertyDescriptors(Attr.prototype);

defineProperties(Attr.prototype, {
  value: {
    get: getAttributeValue,
    set(value) {
      reset(this.ownerElement);
      setAttributeValue.call(this, value);
    }
  }
});


// CharacterData
// TODO: is txtContent really necessary to patch here?
const {remove: removeCharacterData} = CharacterData.prototype;
defineProperties(CharacterData.prototype, {
  remove: {value() {
    reset(this.parentNode);
    removeCharacterData.call(this);
  }}
});


// Element
const elementProtoDescriptors = {};
for (const name of [
  'remove',
  'setAttribute',
  'setAttributeNS',
  'setAttributeNode',
  'setAttributeNodeNS',
  'removeAttribute',
  'removeAttributeNS',
  'removeAttributeNode'
]) {
  const method = Element.prototype[name];
  elementProtoDescriptors[name] = {
    value() {
      reset(this.parentNode);
      return method.apply(this, arguments);
    }
  };
}
defineProperties(Element.prototype, elementProtoDescriptors);


// ParentNode
const {
  childNodes: {get: getChildNodes},
  children: {get: getChildren}
} = getOwnPropertyDescriptors(ParentNode.prototype);

defineProperties(ParentNode.prototype, {
  childNodes: {get() {
    return get(childNodesWM, this, getChildNodes);
  }},
  children: {get() {
    return get(childrenWM, this, getChildren);
  }}
});

const {
  insertBefore,
  querySelector,
  querySelectorAll
} = ParentNode.prototype;

const query = (wm, method, self, selectors) => {
  if (!wm.has(self))
    wm.set(self, new Map);
  const map = wm.get(self);
  if (map.has(selectors))
    return map.get(selectors);
  const result = method.call(self, selectors);
  map.set(selectors, result);
  return result;
};

defineProperties(ParentNode.prototype, {
  insertBefore: {value(node, before) {
    reset(this);
    if (node.nodeType === DOCUMENT_FRAGMENT_NODE)
      reset(node);
    return insertBefore.call(this, node, before);
  }},
  getElementsByClassName: {value(className) {
    return this.querySelectorAll('.' + className);
  }},
  getElementsByTagName: {value(tagName) {
    return this.querySelectorAll(tagName);
  }},
  querySelector: {value(selectors) {
    return query(querySelectorWM, querySelector, this, selectors);
  }},
  querySelectorAll: {value(selectors) {
    return query(querySelectorAllWM, querySelectorAll, this, selectors);
  }}
});


// NonElementParentNode
defineProperties(NonElementParentNode.prototype, {
  getElementById: {value(id) {
    return this.querySelector('#' + id);
  }}
});


// HTMLDocument
const {title: {
  get: getTitle,
  set: setTitle
}} = getOwnPropertyDescriptors(HTMLDocument.prototype);

defineProperties(HTMLDocument.prototype, {
  title: {
    get: getTitle,
    set(value) {
      reset(this.head);
      setTitle.call(this, value);
    }
  }
});


export * from './index.js';
