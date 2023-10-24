'use strict';
const {Attr: _Attr} = require('../interface/attr.js');
const {CharacterData: _CharacterData} = require('../interface/character-data.js');
const {CDATASection: _CDATASection} = require('../interface/cdata-section.js');
const {Comment: _Comment} = require('../interface/comment.js');
const {DocumentFragment: _DocumentFragment} = require('../interface/document-fragment.js');
const {DocumentType: _DocumentType} = require('../interface/document-type.js');
const {Element: _Element} = require('../interface/element.js');
const {Node: _Node} = require('../interface/node.js');
const {ShadowRoot: _ShadowRoot} = require('../interface/shadow-root.js');
const {Text: _Text} = require('../interface/text.js');
const {SVGElement: _SVGElement} = require('../svg/element.js');

const {setPrototypeOf} = require('./object.js');

/* c8 ignore start */
const illegalConstructor = () => {
  throw new TypeError('Illegal constructor');
};
exports.illegalConstructor = illegalConstructor;

function Attr() { illegalConstructor(); }
exports.Attr = Attr
setPrototypeOf(Attr, _Attr);
Attr.prototype = _Attr.prototype;

function CDATASection() { illegalConstructor(); }
exports.CDATASection = CDATASection
setPrototypeOf(CDATASection, _CDATASection);
CDATASection.prototype = _CDATASection.prototype;

function CharacterData() { illegalConstructor(); }
exports.CharacterData = CharacterData
setPrototypeOf(CharacterData, _CharacterData);
CharacterData.prototype = _CharacterData.prototype;

function Comment() { illegalConstructor(); }
exports.Comment = Comment
setPrototypeOf(Comment, _Comment);
Comment.prototype = _Comment.prototype;

function DocumentFragment() { illegalConstructor(); }
exports.DocumentFragment = DocumentFragment
setPrototypeOf(DocumentFragment, _DocumentFragment);
DocumentFragment.prototype = _DocumentFragment.prototype;

function DocumentType() { illegalConstructor(); }
exports.DocumentType = DocumentType
setPrototypeOf(DocumentType, _DocumentType);
DocumentType.prototype = _DocumentType.prototype;

function Element() { illegalConstructor(); }
exports.Element = Element
setPrototypeOf(Element, _Element);
Element.prototype = _Element.prototype;

function Node() { illegalConstructor(); }
exports.Node = Node
setPrototypeOf(Node, _Node);
Node.prototype = _Node.prototype;

function ShadowRoot() { illegalConstructor(); }
exports.ShadowRoot = ShadowRoot
setPrototypeOf(ShadowRoot, _ShadowRoot);
ShadowRoot.prototype = _ShadowRoot.prototype;

function Text() { illegalConstructor(); }
exports.Text = Text
setPrototypeOf(Text, _Text);
Text.prototype = _Text.prototype;

function SVGElement() { illegalConstructor(); }
exports.SVGElement = SVGElement
setPrototypeOf(SVGElement, _SVGElement);
SVGElement.prototype = _SVGElement.prototype;
/* c8 ignore stop */

const Facades = {
  Attr,
  CDATASection,
  CharacterData,
  Comment,
  DocumentFragment,
  DocumentType,
  Element,
  Node,
  ShadowRoot,
  Text,
  SVGElement
};
exports.Facades = Facades;
