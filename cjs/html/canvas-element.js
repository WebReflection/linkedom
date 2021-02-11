'use strict';
const {IMAGE} = require('../shared/symbols.js');

const {registerHTMLClass} = require('../shared/register-html-class.js');
const {numericAttribute} = require('../shared/attributes.js');

const Canvas = require('../../commonjs/canvas.cjs');

const {HTMLElement} = require('./element.js');

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

exports.HTMLCanvasElement = HTMLCanvasElement;
