const assert = require('../assert.js').for('Text');

const {parseHTML, DOMParser} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><div><span></span></div></html>');

let div = document.querySelector('div');

div.firstChild.outerHTML = 'hello';
assert(div.firstChild.toString(), 'hello');

div.innerHTML = '<span></span>'
div.firstChild.outerHTML = '<p>hello</p>';
assert(div.firstChild.toString(), '<p>hello</p>');

div.innerHTML = '<span></span>'
div.firstChild.outerHTML = '<p>hello</p> world';
assert(div.toString(), '<div><p>hello</p> world</div>');

assert(div.namespaceURI, 'http://www.w3.org/1999/xhtml');

const parser = new DOMParser();
const htmlDoc = parser.parseFromString(`<div><span content-desc="text3&amp;more"/></div>`, 'text/html').documentElement;

assert(htmlDoc.firstChild.getAttribute('content-desc'), 'text3&more');
assert(htmlDoc.firstChild.outerHTML, '<span content-desc="text3&more"></span>');
assert(htmlDoc.innerHTML, '<span content-desc="text3&more"></span>');

htmlDoc.firstChild.setAttribute('content-desc', ''); // attribute is not in emptyAttributes set is empty
assert(htmlDoc.firstChild.getAttribute('content-desc'), '');
assert(htmlDoc.firstChild.outerHTML, '<span content-desc=""></span>');
assert(htmlDoc.innerHTML, '<span content-desc=""></span>');

const htmlNode = htmlDoc.ownerDocument.createElement('div');
htmlNode.innerHTML = '<p>!</p>';
assert(htmlNode.innerHTML, '<p>!</p>', 'innerHTML');
htmlNode.insertAdjacentHTML('beforebegin', 'beforebegin');
htmlNode.insertAdjacentHTML('afterend', 'afterend');
assert(htmlNode.toString(), '<div><p>!</p></div>', 'no element, no before/after');
htmlNode.firstElementChild.insertAdjacentHTML('beforebegin', 'beforebegin');
assert(htmlNode.toString(), '<div>beforebegin<p>!</p></div>', 'beforebegin works');
htmlNode.firstElementChild.insertAdjacentHTML('afterbegin', 'afterbegin');
assert(htmlNode.toString(), '<div>beforebegin<p>afterbegin!</p></div>', 'afterbegin works');
htmlNode.firstElementChild.insertAdjacentHTML('beforeend', 'beforeend');
assert(htmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend</p></div>', 'beforeend works');
htmlNode.firstElementChild.insertAdjacentHTML('afterend', 'afterend');
assert(htmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend</p>afterend</div>', 'afterend works');

htmlNode.firstElementChild.insertAdjacentHTML('beforeend', '<i>1</i><i>2</i>');
assert(htmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend<i>1</i><i>2</i></p>afterend</div>', 'multiple html works');

htmlNode.firstElementChild.insertAdjacentText('afterend', '<OK>');
assert(htmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend<i>1</i><i>2</i></p>&lt;OK&gt;afterend</div>', 'insertAdjacentText works');

const htmlDocWithEmptyAttrFromSet = parser.parseFromString(`<div><span style=""/></div>`, 'text/html').documentElement; // attribute is in emptyAttributes set is empty

assert(htmlDocWithEmptyAttrFromSet.firstChild.getAttribute('style'), '');
assert(htmlDocWithEmptyAttrFromSet.firstChild.outerHTML, '<span></span>');
assert(htmlDocWithEmptyAttrFromSet.innerHTML, '<span></span>');

const xmlDoc = parser.parseFromString(`<hierarchy><android.view.View content-desc="text3&amp;more"/></hierarchy>`, 'text/xml').documentElement;

assert(xmlDoc.firstChild.getAttribute('content-desc'), 'text3&amp;more');
assert(xmlDoc.firstChild.outerHTML, '<android.view.View content-desc="text3&amp;more" />');
assert(xmlDoc.innerHTML, '<android.view.View content-desc="text3&amp;more" />');

xmlDoc.firstChild.setAttribute('content-desc', '');// attribute is not in emptyAttributes set is empty (even for XML)
assert(xmlDoc.firstChild.getAttribute('content-desc'), '');
assert(xmlDoc.firstChild.outerHTML, '<android.view.View content-desc="" />');
assert(xmlDoc.innerHTML, '<android.view.View content-desc="" />');

const xmlNode = xmlDoc.ownerDocument.createElement('div');
xmlNode.innerHTML = '<p>!</p>';
assert(xmlNode.innerHTML, '<p>!</p>', 'innerHTML');
xmlNode.insertAdjacentHTML('beforebegin', 'beforebegin');
xmlNode.insertAdjacentHTML('afterend', 'afterend');
assert(xmlNode.toString(), '<div><p>!</p></div>', 'no element, no before/after');
xmlNode.firstElementChild.insertAdjacentHTML('beforebegin', 'beforebegin');
assert(xmlNode.toString(), '<div>beforebegin<p>!</p></div>', 'beforebegin works');
xmlNode.firstElementChild.insertAdjacentHTML('afterbegin', 'afterbegin');
assert(xmlNode.toString(), '<div>beforebegin<p>afterbegin!</p></div>', 'afterbegin works');
xmlNode.firstElementChild.insertAdjacentHTML('beforeend', 'beforeend');
assert(xmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend</p></div>', 'beforeend works');
xmlNode.firstElementChild.insertAdjacentHTML('afterend', 'afterend');
assert(xmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend</p>afterend</div>', 'afterend works');

xmlNode.firstElementChild.insertAdjacentHTML('beforeend', '<i>1</i><i>2</i>');
assert(xmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend<i>1</i><i>2</i></p>afterend</div>', 'multiple html works');

xmlNode.firstElementChild.insertAdjacentText('afterend', '<OK>');
assert(xmlNode.toString(), '<div>beforebegin<p>afterbegin!beforeend<i>1</i><i>2</i></p>&lt;OK&gt;afterend</div>', 'insertAdjacentText works');

const xmlDocWithEmptyAttrFromSet = parser.parseFromString(`<hierarchy><android.view.View style=""/></hierarchy>`, 'text/xml').documentElement;// attribute is in emptyAttributes set is empty (even for XML)
assert(xmlDocWithEmptyAttrFromSet.firstChild.getAttribute('style'), '');
assert(xmlDocWithEmptyAttrFromSet.firstChild.outerHTML, '<android.view.View style="" />');
assert(xmlDocWithEmptyAttrFromSet.innerHTML, '<android.view.View style="" />');
