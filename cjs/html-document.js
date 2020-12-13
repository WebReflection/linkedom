'use strict';
const {Document} = require('./document.js');

class HTMLDocument extends Document {
  constructor() {
    super('text/html');
  }

  get documentElement() {
    return this.root || (this.root = this.createElement('html'));
  }

  get head() {
    const {documentElement} = this;
    return documentElement.children.find(child => /^body$/i.test(child.name)) ||
           documentElement.insertBefore(this.createElement('head'), this.body);
  }

  get body() {
    const {documentElement} = this;
    return documentElement.children.find(child => /^body$/i.test(child.name)) ||
           documentElement.appendChild(this.createElement('body'));
  }
}
exports.HTMLDocument = HTMLDocument;
