import {IMAGE} from '../shared/symbols.js';

import {registerHTMLClass} from '../shared/register-html-class.js';
import {numericAttribute} from '../shared/attributes.js';

import Canvas from '../../commonjs/canvas.cjs';

import {HTMLElement} from './element.js';

const {createCanvas} = Canvas;

const tagName = 'canvas';

/**
 * @implements globalThis.HTMLCanvasElement
 */
class HTMLCanvasElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
    this[IMAGE] = createCanvas(300, 150);
  }

  get width() {
    return this[IMAGE].width;
  }

  set width(value) {
    numericAttribute.set(this, 'width', value);
    this[IMAGE].width = value;
  }

  get height() {
    return this[IMAGE].height;
  }

  set height(value) {
    numericAttribute.set(this, 'height', value);
    this[IMAGE].height = value;
  }

  getContext(type) {
    return this[IMAGE].getContext(type);
  }

  toDataURL(...args) {
    return this[IMAGE].toDataURL(...args);
  }
}

registerHTMLClass(tagName, HTMLCanvasElement);

export {HTMLCanvasElement};
