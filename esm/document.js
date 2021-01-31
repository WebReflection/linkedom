import {DOCUMENT_NODE, TEXT_NODE, DOM} from './constants.js';

import {Mime, htmlClasses, setBoundaries} from './utils.js';

// mixins & interfaces
import {NonElementParentNode, ParentNode} from './mixins.js';
import {Event, CustomEvent} from './interfaces.js';

// nodes
import {Attr} from './attr.js';
import {Comment} from './comment.js';
import {Element} from './element.js';
import {DocumentFragment} from './document-fragment.js';
import {Node} from './node.js';
import {Text} from './text.js';

// node extends
import {SVGElement} from './svg-element.js';
import {HTMLElement} from './html/html-element.js';
import {HTMLTemplateElement} from './html/html-template-element.js';
import {HTMLHtmlElement} from './html/html-html-element.js';
import {HTMLScriptElement} from './html/html-script-element.js';
import {HTMLFrameElement} from './html/html-frame-element.js';
import {HTMLIFrameElement} from './html/htmli-frame-element.js';
import {HTMLObjectElement} from './html/html-object-element.js';
import {HTMLHeadElement} from './html/html-head-element.js';
import {HTMLBodyElement} from './html/html-body-element.js';
import {HTMLStyleElement} from './html/html-style-element.js';
import {HTMLTimeElement} from './html/html-time-element.js';
import {HTMLFieldSetElement} from './html/html-field-set-element.js';
import {HTMLEmbedElement} from './html/html-embed-element.js';
import {HTMLHRElement} from './html/htmlhr-element.js';
import {HTMLProgressElement} from './html/html-progress-element.js';
import {HTMLParagraphElement} from './html/html-paragraph-element.js';
import {HTMLTableElement} from './html/html-table-element.js';
import {HTMLFrameSetElement} from './html/html-frame-set-element.js';
import {HTMLLIElement} from './html/htmlli-element.js';
import {HTMLBaseElement} from './html/html-base-element.js';
import {HTMLDataListElement} from './html/html-data-list-element.js';
import {HTMLInputElement} from './html/html-input-element.js';
import {HTMLParamElement} from './html/html-param-element.js';
import {HTMLMediaElement} from './html/html-media-element.js';
import {HTMLAudioElement} from './html/html-audio-element.js';
import {HTMLHeadingElement} from './html/html-heading-element.js';
import {HTMLDirectoryElement} from './html/html-directory-element.js';
import {HTMLQuoteElement} from './html/html-quote-element.js';
import {HTMLCanvasElement} from './html/html-canvas-element.js';
import {HTMLLegendElement} from './html/html-legend-element.js';
import {HTMLOptionElement} from './html/html-option-element.js';
import {HTMLSpanElement} from './html/html-span-element.js';
import {HTMLMeterElement} from './html/html-meter-element.js';
import {HTMLVideoElement} from './html/html-video-element.js';
import {HTMLTableCellElement} from './html/html-table-cell-element.js';
import {HTMLTitleElement} from './html/html-title-element.js';
import {HTMLOutputElement} from './html/html-output-element.js';
import {HTMLTableRowElement} from './html/html-table-row-element.js';
import {HTMLDataElement} from './html/html-data-element.js';
import {HTMLMenuElement} from './html/html-menu-element.js';
import {HTMLSelectElement} from './html/html-select-element.js';
import {HTMLBRElement} from './html/htmlbr-element.js';
import {HTMLButtonElement} from './html/html-button-element.js';
import {HTMLMapElement} from './html/html-map-element.js';
import {HTMLOptGroupElement} from './html/html-opt-group-element.js';
import {HTMLDListElement} from './html/htmld-list-element.js';
import {HTMLTextAreaElement} from './html/html-text-area-element.js';
import {HTMLFontElement} from './html/html-font-element.js';
import {HTMLDivElement} from './html/html-div-element.js';
import {HTMLLinkElement} from './html/html-link-element.js';
import {HTMLSlotElement} from './html/html-slot-element.js';
import {HTMLFormElement} from './html/html-form-element.js';
import {HTMLImageElement} from './html/html-image-element.js';
import {HTMLPreElement} from './html/html-pre-element.js';
import {HTMLUListElement} from './html/htmlu-list-element.js';
import {HTMLMetaElement} from './html/html-meta-element.js';
import {HTMLPictureElement} from './html/html-picture-element.js';
import {HTMLAreaElement} from './html/html-area-element.js';
import {HTMLOListElement} from './html/htmlo-list-element.js';
import {HTMLTableCaptionElement} from './html/html-table-caption-element.js';
import {HTMLAnchorElement} from './html/html-anchor-element.js';
import {HTMLLabelElement} from './html/html-label-element.js';
import {HTMLUnknownElement} from './html/html-unknown-element.js';
import {HTMLModElement} from './html/html-mod-element.js';
import {HTMLDetailsElement} from './html/html-details-element.js';
import {HTMLSourceElement} from './html/html-source-element.js';
import {HTMLTrackElement} from './html/html-track-element.js';
import {HTMLMarqueeElement} from './html/html-marquee-element.js';

// extras
import {Range} from './range.js';
import {TreeWalker} from './tree-walker.js';
import {CustomElementRegistry, customElements} from './custom-element-registry.js';
import {MutationObserverClass} from './mutation-observer-class.js';

const {create, defineProperties} = Object;

const createHTMLElement = (ownerDocument, builtin, localName, options) => {
  if (!builtin && htmlClasses.has(localName)) {
    const Class = htmlClasses.get(localName);
    return new Class(ownerDocument, localName);
  }
  const {_customElements: {_active, _registry}} = ownerDocument;
  if (_active) {
    const ce = builtin ? options.is : localName;
    if (_registry.has(ce)) {
      const {Class} = _registry.get(ce);
      const element = new Class(ownerDocument, localName);
      customElements.set(element, {connected: false, setup: false});
      return element;
    }
  }
  return new HTMLElement(ownerDocument, localName);
};

const defaultViewExports = {
  Event, CustomEvent,
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
};

/**
 * @implements globalThis.Document
 */
export class Document extends Node {

  /**
   * @param {string} type the document mime-type
   */
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this._customElements = {_active: false, _registry: null};
    this._observer = {_active: false, _class: null};
    this._mime = Mime[type];

    /**
     * @type {Element?}
     */
    this.root = null;
  }

  get [DOM]() {
    return {
      SVGElement,
      HTMLElement
    };
  }

  get defaultView() {
    const window = new Proxy(globalThis, {
      /* c8 ignore start */
      get: (globalThis, name) => {
        switch (name) {
          case 'document':
            return this;
          case 'window':
            return window;
          case 'customElements':
            if (!this._customElements._registry)
              this._customElements = new CustomElementRegistry(this);
            return this._customElements;
          case 'MutationObserver':
            if (!this._observer._class)
              this._observer = new MutationObserverClass(this);
            return this._observer._class;
            break;
          default:
            return defaultViewExports[name] || globalThis[name];
        }
      }
      /* c8 ignore stop */
    });
    return window;
  }

  // <NonElementParentNode>
  /**
   * @param {string} id
   * @returns {Element?}
   */
  getElementById(id) {
    const {root} = this;
    return root && NonElementParentNode.getElementById(root, id);
  }
  // </NonElementParentNode>

  // <ParentNode>
  get children() {
    const {root} = this;
    return root ? [root] : [];
  }

  /**
   * @type {Element?}
   */
  get firstElementChild() {
    return this.root;
  }

  /**
   * @type {Element?}
   */
  get lastElementChild() {
    return this.root;
  }

  get childElementCount() {
    return this.root ? 1 : 0;
  }

  /**
   * This throws on Document instances.
   */
  prepend(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

  /**
   * This throws on Document instances.
   */
  append(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

  /**
   * This throws on Document instances.
   */
  replaceChildren(...nodes) {
    throw new Error('Cannot have more than one Element child of a Document');
  }

  /**
   * @param {string} selectors
   * @returns {Element?}
   */
  querySelector(selectors) {
    const {root} = this;
    return root && ParentNode.querySelector({_next: root}, selectors);
  }

  /**
   * @param {string} selectors
   * @returns {NodeList}
   */
  querySelectorAll(selectors) {
    const {root} = this;
    return root ? ParentNode.querySelectorAll({_next: root}, selectors) : [];
  }
  // </ParentNode>

  /**
   * @param {Node} node
   */
  contains(node) {
    return this.root.contains(node);
  }

  /**
   * @param {string} name
   * @returns {Attr}
   */
  createAttribute(name) {
    return new Attr(this, name, '');
  }

  /**
   * @param {string} localName
   * @param {object?} options
   */
  createElement(localName, options) {
    if (this._mime.ignoreCase) {
      const builtin = !!(options && options.is);
      const element = createHTMLElement(this, builtin, localName, options);
      if (builtin)
        element.setAttribute('is', options.is);
      return element;
    }
    return new Element(this, localName);
  }

  /**
   * @deprecated
   * @param {"Event"|"CustomEvent"} name
   * @returns {Event|CustomEvent}
   */
  createEvent(name) {
    const event = create(name === 'Event' ? new Event('') : new CustomEvent(''));
    event.initEvent = event.initCustomEvent = (
      type,
      canBubble = false,
      cancelable = false,
      detail
    ) => {
      defineProperties(event, {
        type: {value: type},
        canBubble: {value: canBubble},
        cancelable: {value: cancelable},
        detail: {value: detail}
      });
    };
    return event;
  }

  /**
   * @param {string} textContent
   */
  createComment(textContent) {
    return new Comment(this, textContent);
  }

  /**
   * @param {string} textContent 
   */
  createTextNode(textContent) {
    return new Text(this, textContent);
  }

  /**
   * @param {Element} root 
   * @param {number?} whatToShow 
   */
  createTreeWalker(root, whatToShow) {
    return new TreeWalker(root, whatToShow);
  }

  createDocumentFragment() {
    return new DocumentFragment(this);
  }

  createRange() {
    return new Range;
  }

  toString() {
    return this._mime.docType + (this.root || '').toString();
  }

  /**
   * @param {Node} node 
   * @param {boolean?} deep 
   */
  importNode(node, deep = false) {
    return node.cloneNode(deep);
  }

  /**
   * @param {string} name
   * @returns {NodeList}
   */
  getElementsByTagName(name) {
    const {root} = this;
    return root ? root.getElementsByTagName(name) : [];
  }

  /**
   * @deprecated
   * @param {string} _
   * @param {string} name
   * @returns {NodeList}
   */
  getElementsByTagNameNS(_, name) {
    return this.getElementsByTagName(name);
  }

  /**
   * @param {string} className
   * @returns {NodeList}
   */
  getElementsByClassName(className) {
    const {root} = this;
    return root ? root.getElementsByClassName(className) : [];
  }

  /* c8 ignore start */
  createAttributeNS(_, name) {
    return this.createAttribute(name);
  }

  createElementNS(_, localName, options) {
    return this.createElement(localName, options);
  }
  /* c8 ignore stop */
}
