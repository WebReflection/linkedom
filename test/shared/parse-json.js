const assert = require('../assert.js').for('Facades');

const {parseHTML, parseJSON, toJSON} = global[Symbol.for('linkedom')];

assert(parseJSON([11,-1]).toString(), '<#document-fragment></#document-fragment>');
assert(parseJSON([9,10,'html',-1]).toString(), '<!DOCTYPE html>');

assert(
  parseJSON([1,"html",2,"contenteditable",2,"test","1",3,"a",8,"b",1,"br",-2]).toString(),
  '<html contenteditable test="1">a<!--b--><br></html>'
);

// let xmlDocument = (new DOMParser).parseFromString('<html><body><![CDATA[test]]>text</body></html>', 'text/xml');

assert(
  parseJSON([1,"html",1,"body",4,"test"]).toString(),
  '<html><body><![CDATA[test]]></body></html>'
);

assert(
  parseJSON([1,"img",-1]).toString(),
  '<img>'
);

const {document, customElements, HTMLElement} = parseHTML('');

customElements.define('c-e', class extends HTMLElement {
  constructor() {
    super();
    this.constructed = true;
  }
});

let div = parseJSON('[1,"div",1,"svg",1,"rect",-2,1,"c-e",-2]');

assert(JSON.stringify(toJSON(div)), '[1,"div",1,"svg",1,"rect",-2,1,"c-e",-2]');

assert(div.toString(), '<div><svg><rect /></svg><c-e></c-e></div>');

assert(div.querySelector('c-e').constructed, void 0, 'not constructed');

document.importNode(div, true);

assert(div.querySelector('c-e').constructed, void 0, 'not constructed');
