'use strict';
const {HTMLElement} = require('./element.js');
const {booleanAttribute, stringAttribute} = require('../shared/attributes.js');
const {registerHTMLClass} = require('../shared/register-html-class.js');

const tagName = 'option';

/**
 * @implements globalThis.HTMLOptionElement
 */
class HTMLOptionElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get value() { return stringAttribute.get(this, 'value'); }
  set value(value) { stringAttribute.set(this, 'value', value); }
  /* c8 ignore stop */

  get selected() { return booleanAttribute.get(this, 'selected'); }
  set selected(value) {
    const option = this.parentElement?.querySelector('option[selected]');
    if (option && option !== this)
      option.selected = false;
    booleanAttribute.set(this, 'selected', value);
  }
}

registerHTMLClass(tagName, HTMLOptionElement);

exports.HTMLOptionElement = HTMLOptionElement;
