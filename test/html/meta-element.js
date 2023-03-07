const assert = require('../assert.js').for('HTMLMetaElement');

const {parseHTML} = global[Symbol.for('linkedom')];

// COMBINATIONS OF ATTRIBUTES
// name & content
const {document: nameAndContent} = parseHTML('<meta name="test" content="testContent">');
const {lastElementChild: a} = nameAndContent;
// assert toString
assert(a.toString(), '<meta name="test" content="testContent">');
// assert name & content attribute
assert(a.name, 'test');
assert(a.content, 'testContent');

// charset
const {document: charset} = parseHTML('<meta charset="utf-8">');
const {lastElementChild: b} = charset;
// assert toString
assert(b.toString(), '<meta charset="utf-8">');
// assert charset attribute
assert(b.charset, 'utf-8');

// httpEquiv refresh & content
const {document: httpEquivRefresh} = parseHTML('<meta http-equiv="refresh" content="0; url=https://google.com/?q=1&page=2">');
const {lastElementChild: c} = httpEquivRefresh;
// assert toString
assert(c.toString(), '<meta http-equiv="refresh" content="0; url=https://google.com/?q=1&page=2">');
// assert httpEquiv & content attribute
assert(c.httpEquiv, 'refresh');
assert(c.content, '0; url=https://google.com/?q=1&page=2');

// httpEquiv content-security-policy & content
const {document: httpEquivCSP} = parseHTML('<meta http-equiv="content-security-policy" content="default-src \'self\'; img-src https://*; child-src \'none\';">');
const {lastElementChild: d} = httpEquivCSP;
// assert toString
assert(d.toString(), '<meta http-equiv="content-security-policy" content="default-src \'self\'; img-src https://*; child-src \'none\';">');
// assert httpEquiv & content attribute
assert(d.httpEquiv, 'content-security-policy');
assert(d.content, 'default-src \'self\'; img-src https://*; child-src \'none\';');

// httpEquiv content-type & content
const {document: httpEquivContentType} = parseHTML('<meta http-equiv="content-type" content="text/html; charset=utf-8">');
const {lastElementChild: e} = httpEquivContentType;
// assert toString
assert(e.toString(), '<meta http-equiv="content-type" content="text/html; charset=utf-8">');
// assert httpEquiv & content attribute
assert(e.httpEquiv, 'content-type');
assert(e.content, 'text/html; charset=utf-8');

// httpEquiv default-style & content
const {document: httpEquivDefaultStyle} = parseHTML('<meta http-equiv="default-style" content="text/css">');
const {lastElementChild: f} = httpEquivDefaultStyle;
// assert toString
assert(f.toString(), '<meta http-equiv="default-style" content="text/css">');
// assert httpEquiv & content attribute
assert(f.httpEquiv, 'default-style');
assert(f.content, 'text/css');

// name="theme-color" & content & media
const {document: themeColor} = parseHTML('<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)">')
const {lastElementChild: g} = themeColor;
// assert toString
assert(g.toString(), '<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)">')
// assert name & content attribute
assert(g.name, 'theme-color');
assert(g.content, '#ffffff');
assert(g.media, '(prefers-color-scheme: dark)');
