import {DOCUMENT_NODE, DOM} from './constants.js';

import {Mime} from './utils.js';

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
import {HTMLElement} from './html-element.js';
import {HTMLTemplateElement} from './html-template-element.js';
import {HTMLHtmlElement} from './html-html-element.js';
import {HTMLScriptElement} from './html-script-element.js';
import {HTMLFrameElement} from './html-frame-element.js';
import {HTMLIFrameElement} from './htmli-frame-element.js';
import {HTMLObjectElement} from './html-object-element.js';
import {HTMLHeadElement} from './html-head-element.js';
import {HTMLBodyElement} from './html-body-element.js';
import {HTMLStyleElement} from './html-style-element.js';
import {HTMLTimeElement} from './html-time-element.js';
import {HTMLFieldSetElement} from './html-field-set-element.js';
import {HTMLEmbedElement} from './html-embed-element.js';
import {HTMLHRElement} from './htmlhr-element.js';
import {HTMLProgressElement} from './html-progress-element.js';
import {HTMLParagraphElement} from './html-paragraph-element.js';
import {HTMLTableElement} from './html-table-element.js';
import {HTMLFrameSetElement} from './html-frame-set-element.js';
import {HTMLLIElement} from './htmlli-element.js';
import {HTMLBaseElement} from './html-base-element.js';
import {HTMLDataListElement} from './html-data-list-element.js';
import {HTMLInputElement} from './html-input-element.js';
import {HTMLParamElement} from './html-param-element.js';
import {HTMLMediaElement} from './html-media-element.js';
import {HTMLAudioElement} from './html-audio-element.js';
import {HTMLHeadingElement} from './html-heading-element.js';
import {HTMLDirectoryElement} from './html-directory-element.js';
import {HTMLQuoteElement} from './html-quote-element.js';
import {HTMLCanvasElement} from './html-canvas-element.js';
import {HTMLLegendElement} from './html-legend-element.js';
import {HTMLOptionElement} from './html-option-element.js';
import {HTMLSpanElement} from './html-span-element.js';
import {HTMLMeterElement} from './html-meter-element.js';
import {HTMLVideoElement} from './html-video-element.js';
import {HTMLTableCellElement} from './html-table-cell-element.js';
import {HTMLTitleElement} from './html-title-element.js';
import {HTMLOutputElement} from './html-output-element.js';
import {HTMLTableRowElement} from './html-table-row-element.js';
import {HTMLDataElement} from './html-data-element.js';
import {HTMLMenuElement} from './html-menu-element.js';
import {HTMLSelectElement} from './html-select-element.js';
import {HTMLBRElement} from './htmlbr-element.js';
import {HTMLButtonElement} from './html-button-element.js';
import {HTMLMapElement} from './html-map-element.js';
import {HTMLOptGroupElement} from './html-opt-group-element.js';
import {HTMLDListElement} from './htmld-list-element.js';
import {HTMLTextAreaElement} from './html-text-area-element.js';
import {HTMLFontElement} from './html-font-element.js';
import {HTMLDivElement} from './html-div-element.js';
import {HTMLLinkElement} from './html-link-element.js';
import {HTMLSlotElement} from './html-slot-element.js';
import {HTMLFormElement} from './html-form-element.js';
import {HTMLImageElement} from './html-image-element.js';
import {HTMLPreElement} from './html-pre-element.js';
import {HTMLUListElement} from './htmlu-list-element.js';
import {HTMLMetaElement} from './html-meta-element.js';
import {HTMLPictureElement} from './html-picture-element.js';
import {HTMLAreaElement} from './html-area-element.js';
import {HTMLOListElement} from './htmlo-list-element.js';
import {HTMLTableCaptionElement} from './html-table-caption-element.js';
import {HTMLAnchorElement} from './html-anchor-element.js';
import {HTMLLabelElement} from './html-label-element.js';
import {HTMLUnknownElement} from './html-unknown-element.js';
import {HTMLModElement} from './html-mod-element.js';
import {HTMLDetailsElement} from './html-details-element.js';
import {HTMLSourceElement} from './html-source-element.js';
import {HTMLTrackElement} from './html-track-element.js';
import {HTMLMarqueeElement} from './html-marquee-element.js';


// extras
import {Range} from './range.js';
import {TreeWalker} from './tree-walker.js';
import {CustomElementRegistry} from './custom-element-registry.js';

const {create, defineProperties} = Object;

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
    this._mime = Mime[type];
    this._customElements = {_active: false};

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
    if (!this._customElements.define)
      this._customElements = new CustomElementRegistry(this);
    return new Proxy(globalThis, {
      /* c8 ignore start */
      get: (globalThis, name) => {
        switch (name) {
          case 'customElements':
            return this._customElements;
          default:
            return defaultViewExports[name] || globalThis[name];
        }
      }
      /* c8 ignore stop */
    });
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
    let element;
    if (this._mime.ignoreCase) {
      const builtin = !!(options && options.is);
      switch (localName) {
        case 'template':
        case 'TEMPLATE':
          if (!builtin) {
            element = new HTMLTemplateElement(this);
            break;
          }
        default:
          const {_customElements} = this;
          if (_customElements._active) {
            const ce = builtin ? options.is : localName;
            if (_customElements._registry.has(ce)) {
              const {Class} = _customElements._registry.get(ce);
              element = new Class(this, localName);
              element._custom = true;
              break;
            }
          }
          element = new HTMLElement(this, localName);
          break;
      }
      if (builtin)
        element.setAttribute('is', options.is);
    }
    else
      element = new Element(this, localName);
    return element;
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
