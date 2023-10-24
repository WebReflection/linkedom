import {Attr as _Attr} from '../interface/attr.js';
import {CharacterData as _CharacterData} from '../interface/character-data.js';
import {CDATASection as _CDATASection} from '../interface/cdata-section.js';
import {Comment as _Comment} from '../interface/comment.js';
import {DocumentFragment as _DocumentFragment} from '../interface/document-fragment.js';
import {DocumentType as _DocumentType} from '../interface/document-type.js';
import {Element as _Element} from '../interface/element.js';
import {Node as _Node} from '../interface/node.js';
import {ShadowRoot as _ShadowRoot} from '../interface/shadow-root.js';
import {Text as _Text} from '../interface/text.js';
import {SVGElement as _SVGElement} from '../svg/element.js';

import {setPrototypeOf} from './object.js';

/* c8 ignore start */
export const illegalConstructor = () => {
  throw new TypeError('Illegal constructor');
};

export function Attr() { illegalConstructor(); }
setPrototypeOf(Attr, _Attr);
Attr.prototype = _Attr.prototype;

export function CDATASection() { illegalConstructor(); }
setPrototypeOf(CDATASection, _CDATASection);
CDATASection.prototype = _CDATASection.prototype;

export function CharacterData() { illegalConstructor(); }
setPrototypeOf(CharacterData, _CharacterData);
CharacterData.prototype = _CharacterData.prototype;

export function Comment() { illegalConstructor(); }
setPrototypeOf(Comment, _Comment);
Comment.prototype = _Comment.prototype;

export function DocumentFragment() { illegalConstructor(); }
setPrototypeOf(DocumentFragment, _DocumentFragment);
DocumentFragment.prototype = _DocumentFragment.prototype;

export function DocumentType() { illegalConstructor(); }
setPrototypeOf(DocumentType, _DocumentType);
DocumentType.prototype = _DocumentType.prototype;

export function Element() { illegalConstructor(); }
setPrototypeOf(Element, _Element);
Element.prototype = _Element.prototype;

export function Node() { illegalConstructor(); }
setPrototypeOf(Node, _Node);
Node.prototype = _Node.prototype;

export function ShadowRoot() { illegalConstructor(); }
setPrototypeOf(ShadowRoot, _ShadowRoot);
ShadowRoot.prototype = _ShadowRoot.prototype;

export function Text() { illegalConstructor(); }
setPrototypeOf(Text, _Text);
Text.prototype = _Text.prototype;

export function SVGElement() { illegalConstructor(); }
setPrototypeOf(SVGElement, _SVGElement);
SVGElement.prototype = _SVGElement.prototype;
/* c8 ignore stop */

export const Facades = {
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
