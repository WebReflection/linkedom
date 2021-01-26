import {Document} from './document.js';

/**
 * @implements globalThis.HTMLDocument
 */
export class HTMLDocument extends Document {

  constructor() {
    super('text/html');
    this.root = this.createElement('html');
    this.root.parentNode = this;
  }

  /**
   * @type HTMLHtmlElement
   */
  get documentElement() {
    return this.root;
  }
}
