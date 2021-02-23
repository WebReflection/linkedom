const {escape} = require('html-escaper');

const {
  ELEMENT_NODE,
  TEXT_NODE,
  COMMENT_NODE,
  Document,
  Element,
  Text,
  Comment,
  querySelector,
  querySelectorAll,
  parse
} = require('jsdon/parse');

const benchmark = require('./index.js');

benchmark('jsdon/parse', html => parse(html, {
  Document: class extends Document {
    get documentElement() {
      return querySelector(this, 'html');
    }
  },
  Element: class extends Element {
    get innerHTML() {
      const out = [];
      for (const child of this.childNodes) {
        switch (child.nodeType) {
          case TEXT_NODE:
            out.push(escape(child.data));
            break;
          case COMMENT_NODE:
            out.push('<!--', escape(child.data), '-->');
            break;
          default:
            out.push(child.outerHTML);
            break;
        }
      }
      return out.join('');
    }
    get outerHTML() {
      const out = ['<', this.localName];
      for (const {name, value} of this.attributes)
        out.push(' ', name, '="', escape(value), '"');
      out.push('>');
      out.push(this.innerHTML);
      out.push('</', this.localName, '>');
      return out.join('');
    }
    getElementsByTagName(tagName) {
      return querySelectorAll(this, tagName);
    }
    querySelector(selectors) {
      return querySelector(this, selectors);
    }
    querySelectorAll(selectors) {
      return querySelectorAll(this, selectors);
    }
    normalize() {
      for (let
        nodes = this.childNodes.slice(0),
        {length} = nodes, i = 0; i < length; i++
      ) {
        switch (nodes[i].nodeType) {
          case TEXT_NODE:
            if (!nodes[i].data)
              nodes[i].remove();
            else if (i > 0 && nodes[i - 1].nodeType === TEXT_NODE) {
              nodes[i - 1].data += nodes[i].data;
              nodes[i].remove();
            }
            break;
          case ELEMENT_NODE:
            nodes[i].normalize();
            break;
        }
      }
    }
  },
  Text: class extends Text {
    get childNodes() { return []; }
  },
  Comment: class extends Comment {
    get childNodes() { return []; }
  },
}));
