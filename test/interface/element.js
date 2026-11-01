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

// https://html.spec.whatwg.org/multipage/parsing.html#attribute-name-state
// https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
const {document: attributeCaseDocument} = parseHTML('<html><body><div data-itemId="a" TITLE="b"></div></body></html>');

let attributeCaseDiv = attributeCaseDocument.querySelector('div');
assert(attributeCaseDiv.getAttributeNames().join(' '), 'data-itemid title', 'HTML attribute names are parsed as ASCII lowercase');
assert(attributeCaseDiv.getAttribute('data-itemId'), 'a', 'getAttribute lowercases the name');
assert(attributeCaseDiv.getAttribute('data-itemid'), 'a', 'getAttribute works with the parsed name');
assert(attributeCaseDiv.getAttribute('DATA-ITEMID'), 'a', 'getAttribute lowercases ASCII uppercase');
assert(attributeCaseDiv.getAttribute('data-ITEMid'), 'a', 'getAttribute lowercases any ASCII uppercase');
assert(attributeCaseDiv.getAttribute('Data-ItemId'), 'a', 'getAttribute lowercases mixed case');
assert(attributeCaseDiv.getAttributeNode('DATA-ITEMID').name, 'data-itemid', 'getAttributeNode lowercases the name');
assert(attributeCaseDiv.hasAttribute('data-itemId'), true, 'hasAttribute lowercases the name');
assert(attributeCaseDiv.outerHTML, '<div data-itemid="a" title="b"></div>', 'serialization uses lowercase names');
assert(attributeCaseDocument.querySelector('[data-itemid]'), attributeCaseDiv, 'querySelector matches the lowercase name');
assert(attributeCaseDocument.querySelector('[data-itemId]'), attributeCaseDiv, 'querySelector matches the original name too');
assert(attributeCaseDocument.querySelector('[DATA-ITEMID]'), attributeCaseDiv, 'querySelector lowercases the selector name');
assert(attributeCaseDiv.matches('[TITLE]'), true, 'matches lowercases the selector name');

attributeCaseDiv.setAttribute('Foo', 'x');
assert(attributeCaseDiv.getAttributeNames().join(' '), 'foo data-itemid title', 'setAttribute lowercases the name');
assert(attributeCaseDiv.getAttribute('FOO'), 'x', 'setAttribute is reachable with any case');

attributeCaseDiv.setAttribute('FOO', 'y');
assert(attributeCaseDiv.getAttributeNames().join(' '), 'foo data-itemid title', 'setAttribute does not create case variants');
assert(attributeCaseDiv.getAttribute('foo'), 'y', 'setAttribute updates the same attribute');

attributeCaseDiv.removeAttribute('DATA-ITEMID');
assert(attributeCaseDiv.hasAttribute('data-itemid'), false, 'removeAttribute lowercases the name');

assert(attributeCaseDiv.toggleAttribute('Bar'), true, 'toggleAttribute adds a lowercase attribute');
assert(attributeCaseDiv.getAttributeNames().join(' '), 'bar foo title', 'toggleAttribute lowercases the name');
assert(attributeCaseDiv.toggleAttribute('BAR'), false, 'toggleAttribute removes a lowercase attribute');
assert(attributeCaseDiv.hasAttribute('bar'), false, 'toggleAttribute lowercased the name again');

assert(attributeCaseDocument.querySelectorAll('[title]').length, 1, 'querySelectorAll matches the lowercase name');

const createdAttribute = attributeCaseDocument.createAttribute('Data-Foo');
assert(createdAttribute.name, 'data-foo', 'createAttribute lowercases the name in an HTML document');
attributeCaseDiv.setAttributeNode(createdAttribute);
assert(attributeCaseDiv.getAttribute('data-foo'), '', 'setAttributeNode uses the lowercased created name');
assert(attributeCaseDiv.attributes.getNamedItem('TITLE').name, 'title', 'NamedNodeMap#getNamedItem lowercases the name');
assert(attributeCaseDiv.dataset.itemId, undefined, 'data-itemId is parsed as data-itemid, not as a dataset entry');

assert(attributeCaseDiv.getAttribute(null), null, 'non string names are not lowercased');
assert(attributeCaseDiv.hasAttribute(undefined), false, 'non string names do not throw');
attributeCaseDiv.setAttribute(null, 'null-attribute');
assert(attributeCaseDiv.getAttribute('null'), 'null-attribute', 'non string names are stored as strings');

// an attribute from another document keeps its name: the name is looked up as given before the
// ASCII lowercase one is used, which is the one case where this differs from browsers
const xmlAttribute = xmlDoc.ownerDocument.createAttribute('Foo');
attributeCaseDiv.setAttributeNode(xmlAttribute);
assert(attributeCaseDiv.getAttributeNames().includes('Foo'), true, 'a non canonical attribute keeps its name');
assert(attributeCaseDiv.getAttribute('Foo'), '', 'a non canonical attribute is found by its exact name');
assert(attributeCaseDiv.hasAttribute('Foo'), true, 'hasAttribute finds a non canonical attribute by its exact name');
assert(attributeCaseDiv.getAttribute('foo'), null, 'the lowercase name does not match a non canonical attribute');
attributeCaseDiv.setAttribute('Foo', 'updated');
assert(attributeCaseDiv.getAttribute('Foo'), 'updated', 'setAttribute updates a non canonical attribute by its exact name');
attributeCaseDiv.removeAttribute('Foo');
assert(attributeCaseDiv.hasAttribute('Foo'), false, 'a non canonical attribute is removed by its exact name');
