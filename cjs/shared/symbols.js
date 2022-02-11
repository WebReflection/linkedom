'use strict';
// used in Attr to signal changes
const CHANGED = Symbol('changed');
exports.CHANGED = CHANGED;

// used in Element to setup once classList
const CLASS_LIST = Symbol('classList');
exports.CLASS_LIST = CLASS_LIST;

// used in Document to attach once customElements
const CUSTOM_ELEMENTS = Symbol('CustomElements');
exports.CUSTOM_ELEMENTS = CUSTOM_ELEMENTS;

// used in HTMLTemplateElement
const CONTENT = Symbol('content');
exports.CONTENT = CONTENT;

// used in Element for data attributes
const DATASET = Symbol('dataset');
exports.DATASET = DATASET;

// used in Document to attach the DocType
const DOCTYPE = Symbol('doctype');
exports.DOCTYPE = DOCTYPE;

// used in parser and Document to attach once a DOMParser
const DOM_PARSER = Symbol('DOMParser');
exports.DOM_PARSER = DOM_PARSER;

// used to reference an end node
const END = Symbol('end');
exports.END = END;

// used in Document to make the globalThis an event target
const EVENT_TARGET = Symbol('EventTarget');
exports.EVENT_TARGET = EVENT_TARGET;

// used to augment a created document defaultView
const GLOBALS = Symbol('globals');
exports.GLOBALS = GLOBALS;

// used in both Canvas and Document to provide images
const IMAGE = Symbol('image');
exports.IMAGE = IMAGE;

// used to define Document mime type
const MIME = Symbol('mime');
exports.MIME = MIME;

// used in Document to attach once MutationObserver
const MUTATION_OBSERVER = Symbol('MutationObserver');
exports.MUTATION_OBSERVER = MUTATION_OBSERVER;

// used to define next node reference
const NEXT = Symbol('next');
exports.NEXT = NEXT;

// used to define Attr owner elements
const OWNER_ELEMENT = Symbol('ownerElement');
exports.OWNER_ELEMENT = OWNER_ELEMENT;

// used to define previous node reference
const PREV = Symbol('prev');
exports.PREV = PREV;

// used to define various "private" properties
const PRIVATE = Symbol('private');
exports.PRIVATE = PRIVATE;

// used to define the CSSStyleSheet.sheet
const SHEET = Symbol('sheet');
exports.SHEET = SHEET;

// used to define start node reference
const START = Symbol('start');
exports.START = START;

// used to define special CSS style attribute
const STYLE = Symbol('style');
exports.STYLE = STYLE;

// used to upgrade Custom Elements
const UPGRADE = Symbol('upgrade');
exports.UPGRADE = UPGRADE;

// used to define generic values
const VALUE = Symbol('value');
exports.VALUE = VALUE;
