'use strict';
const {Document} = require('./document.js');

class HTMLDocument extends Document {

  constructor() {
    super('text/html');
    this.root = this.createElement('html');
    this.root.parentNode = this;
  }

  get documentElement() {
    return this.root;
  }
}
exports.HTMLDocument = HTMLDocument;
