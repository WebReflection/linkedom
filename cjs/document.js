'use strict';
const {DOCUMENT_NODE, TEXT_NODE, DOM} = require('./constants.js');

const {Mime, setBoundaries} = require('./utils.js');

// mixins & interfaces
const {NonElementParentNode, ParentNode} = require('./mixins.js');
const {Event, CustomEvent} = require('./interfaces.js');

// nodes
const {Attr} = require('./attr.js');
const {Comment} = require('./comment.js');
const {Element} = require('./element.js');
const {DocumentFragment} = require('./document-fragment.js');
const {Node} = require('./node.js');
const {Text} = require('./text.js');

// node extends
const {SVGElement} = require('./svg-element.js');
const {HTMLElement} = require('./html/html-element.js');
const {HTMLTemplateElement} = require('./html/html-template-element.js');
const {HTMLHtmlElement} = require('./html/html-html-element.js');
const {HTMLScriptElement} = require('./html/html-script-element.js');
const {HTMLFrameElement} = require('./html/html-frame-element.js');
const {HTMLIFrameElement} = require('./html/htmli-frame-element.js');
const {HTMLObjectElement} = require('./html/html-object-element.js');
const {HTMLHeadElement} = require('./html/html-head-element.js');
const {HTMLBodyElement} = require('./html/html-body-element.js');
const {HTMLStyleElement} = require('./html/html-style-element.js');
const {HTMLTimeElement} = require('./html/html-time-element.js');
const {HTMLFieldSetElement} = require('./html/html-field-set-element.js');
const {HTMLEmbedElement} = require('./html/html-embed-element.js');
const {HTMLHRElement} = require('./html/htmlhr-element.js');
const {HTMLProgressElement} = require('./html/html-progress-element.js');
const {HTMLParagraphElement} = require('./html/html-paragraph-element.js');
const {HTMLTableElement} = require('./html/html-table-element.js');
const {HTMLFrameSetElement} = require('./html/html-frame-set-element.js');
const {HTMLLIElement} = require('./html/htmlli-element.js');
const {HTMLBaseElement} = require('./html/html-base-element.js');
const {HTMLDataListElement} = require('./html/html-data-list-element.js');
const {HTMLInputElement} = require('./html/html-input-element.js');
const {HTMLParamElement} = require('./html/html-param-element.js');
const {HTMLMediaElement} = require('./html/html-media-element.js');
const {HTMLAudioElement} = require('./html/html-audio-element.js');
const {HTMLHeadingElement} = require('./html/html-heading-element.js');
const {HTMLDirectoryElement} = require('./html/html-directory-element.js');
const {HTMLQuoteElement} = require('./html/html-quote-element.js');
const {HTMLCanvasElement} = require('./html/html-canvas-element.js');
const {HTMLLegendElement} = require('./html/html-legend-element.js');
const {HTMLOptionElement} = require('./html/html-option-element.js');
const {HTMLSpanElement} = require('./html/html-span-element.js');
const {HTMLMeterElement} = require('./html/html-meter-element.js');
const {HTMLVideoElement} = require('./html/html-video-element.js');
const {HTMLTableCellElement} = require('./html/html-table-cell-element.js');
const {HTMLTitleElement} = require('./html/html-title-element.js');
const {HTMLOutputElement} = require('./html/html-output-element.js');
const {HTMLTableRowElement} = require('./html/html-table-row-element.js');
const {HTMLDataElement} = require('./html/html-data-element.js');
const {HTMLMenuElement} = require('./html/html-menu-element.js');
const {HTMLSelectElement} = require('./html/html-select-element.js');
const {HTMLBRElement} = require('./html/htmlbr-element.js');
const {HTMLButtonElement} = require('./html/html-button-element.js');
const {HTMLMapElement} = require('./html/html-map-element.js');
const {HTMLOptGroupElement} = require('./html/html-opt-group-element.js');
const {HTMLDListElement} = require('./html/htmld-list-element.js');
const {HTMLTextAreaElement} = require('./html/html-text-area-element.js');
const {HTMLFontElement} = require('./html/html-font-element.js');
const {HTMLDivElement} = require('./html/html-div-element.js');
const {HTMLLinkElement} = require('./html/html-link-element.js');
const {HTMLSlotElement} = require('./html/html-slot-element.js');
const {HTMLFormElement} = require('./html/html-form-element.js');
const {HTMLImageElement} = require('./html/html-image-element.js');
const {HTMLPreElement} = require('./html/html-pre-element.js');
const {HTMLUListElement} = require('./html/htmlu-list-element.js');
const {HTMLMetaElement} = require('./html/html-meta-element.js');
const {HTMLPictureElement} = require('./html/html-picture-element.js');
const {HTMLAreaElement} = require('./html/html-area-element.js');
const {HTMLOListElement} = require('./html/htmlo-list-element.js');
const {HTMLTableCaptionElement} = require('./html/html-table-caption-element.js');
const {HTMLAnchorElement} = require('./html/html-anchor-element.js');
const {HTMLLabelElement} = require('./html/html-label-element.js');
const {HTMLUnknownElement} = require('./html/html-unknown-element.js');
const {HTMLModElement} = require('./html/html-mod-element.js');
const {HTMLDetailsElement} = require('./html/html-details-element.js');
const {HTMLSourceElement} = require('./html/html-source-element.js');
const {HTMLTrackElement} = require('./html/html-track-element.js');
const {HTMLMarqueeElement} = require('./html/html-marquee-element.js');


// extras
const {Range} = require('./range.js');
const {TreeWalker} = require('./tree-walker.js');
const {CustomElementRegistry, customElements} = require('./custom-element-registry.js');

const {create, defineProperties} = Object;
const {toString} = Element.prototype;

const textOnlyDescriptors = {
  _updateTextContent: {
    value(content, createNode) {
      this.replaceChildren();
      const {ownerDocument, _end} = this;
      const text = createNode ? ownerDocument.createTextNode(content) : content;
      text.parentNode = this;
      setBoundaries(this, text, this._end);
    }
  },
  innerHTML : {
    get() {
      return this.textContent;
    },
    set(html) {
      this.textContent = html;
    }
  },
  textContent: {
    get() {
      const {firstChild} = this;
      return firstChild ? firstChild.textContent : '';
    },
    set(content) {
      this._updateTextContent(content, true);
    }
  },
  // TODO: this is not perfect, although I don't think there are
  //       real world use cases to make it perfect 🤷‍♂️
  //       if there are though, this node should accept nodes *but*
  //       use these as `textContent` only
  insertBefore: {
    value(node) {
      node.remove();
      this._updateTextContent(node, node.nodeType !== TEXT_NODE);
      node.parentNode = this;
      return node;
    }
  },
  toString: {
    value() {
      const outerHTML = toString.call(this.cloneNode());
      return outerHTML.replace(/></, `>${this.textContent}<`);
    }
  }
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
class Document extends Node {

  /**
   * @param {string} type the document mime-type
   */
  constructor(type) {
    super(null, '#document', DOCUMENT_NODE);
    this._mime = Mime[type];
    this._customElements = {_active: false, _registry: null};

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
              customElements.set(element, {connected: false});
              break;
            }
          }
          element = new HTMLElement(this, localName);
          break;
      }
      if (builtin)
        element.setAttribute('is', options.is);
      if (this._mime.textOnly.test(localName))
        defineProperties(element, textOnlyDescriptors);
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
exports.Document = Document
