import {getEnd} from '../utils.js';
import {Document} from '../document.js';

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

  /**
   * @type HTMLAllCollection
   */
  get all() {
    const all = [this.root];
    let {_next, _end} = all[0];
    while (_next !== _end) {
      all.push(_next);
      _next = getEnd(_next)._next;
    }
    return all;
  }

  /**
   * @type HTMLHeadElement
   */
  get head() {
    let {firstElementChild} = this.root;
    // whatever
    if (!firstElementChild) {
      firstElementChild = this.createElement('head');
      this.root.prepend(firstElementChild);
    }
    return firstElementChild;
  }

  /**
   * @type HTMLBodyElement
   */
  get body() {
    let {nextElementSibling} = this.head;
    // whatever
    if (!nextElementSibling) {
      nextElementSibling = this.createElement('body');
      this.head.after(nextElementSibling);
    }
    return nextElementSibling;
  }

  /**
   * @type HTMLTitleElement
   */
  get title() {
    let title = this.head.getElementsByTagName('title').shift();
    if (!title) {
      title = this.createElement('title');
      this.head.prepend(title);
    }
    return title;
  }
}
