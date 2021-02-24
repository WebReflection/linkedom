'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('./shared/constants.js');
const {defineProperties, getOwnPropertyDescriptors} = require('./shared/object.js');

const {Attr} = require('./interface/attr.js');
const {CharacterData} = require('./interface/character-data.js');
const {Element} = require('./interface/element.js');

const {ParentNode} = require('./mixin/parent-node.js');
const {NonElementParentNode} = require('./mixin/non-element-parent-node.js');
const {HTMLDocument} = require('./html/document.js');

const {
  childNodesWM,
  childrenWM,
  querySelectorWM,
  querySelectorAllWM,
  get,
  reset
} = require('./shared/cache.js');

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
const {remove: removeElement} = Element.prototype;
defineProperties(Element.prototype, {
  remove: {value() {
    reset(this.parentNode);
    removeElement.call(this);
  }}
});


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


(m => Object.keys(m).map(k => k !== 'default' && (exports[k] = m[k])))
(require('./index.js'));
