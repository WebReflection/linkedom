'use strict';
const {HTMLElement} = require('./element.js');
const {registerHTMLClass} = require('../shared/register-html-class.js');

const tagName = 'slot';

/**
 * @implements globalThis.HTMLSlotElement
 */
class HTMLSlotElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }

  assign() {}

  assignedNodes(options) {
    const isNamedSlot = !!this.name;
    const hostChildNodes = this.getRootNode().host?.childNodes ?? [];
    let slottables;

    if (isNamedSlot) {
      slottables = [...hostChildNodes].filter(node => node.slot === this.name);
    } else {
      slottables = [...hostChildNodes].filter(node => !node.slot);
    }

    if (options?.flatten) {
      const result = [];

      // Element and Text nodes are slottables. A slot can be a slottable.
      for (let slottable of slottables) {
        if (slottable.localName === 'slot') {
          result.push(...slottable.assignedNodes({ flatten: true }));
        } else {
          result.push(slottable);
        }
      }

      slottables = result;
    }

    // If no assigned nodes are found, it returns the slot's fallback content.
    return slottables.length ? slottables : [...this.childNodes];
  }

  assignedElements(options) {
    const slottables = this.assignedNodes(options).filter(n => n.nodeType === 1);

    // If no assigned elements are found, it returns the slot's fallback content.
    return slottables.length ? slottables : [...this.children];
  }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLSlotElement);

exports.HTMLSlotElement = HTMLSlotElement;
