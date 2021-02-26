const assert = require('../assert.js').for('HTMLElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<!DOCTYPE html><html class="live" id="html"><!--&lt;hello&gt;-->&lt;hello&gt;</html>');

assert(document.documentElement.lastChild.previousElementSibling, null, 'previousElementSibling');
assert(document.documentElement.lastChild.wholeText, '<hello>', 'wholeText');
assert(document.documentElement.innerText, '<hello>', 'textContent read');

document.documentElement.innerHTML = '<div></div><input><p />';
assert(document.toString(), '<!DOCTYPE html><html id="html" class="live"><div></div><input><p></p></html>', 'innerHTML + sanitizer');

document.documentElement.setAttribute('lang', 'en');
assert(document.documentElement.cloneNode(true).outerHTML, '<html lang="en" id="html" class="live"><div></div><input><p></p></html>', 'cloneNode(true).outerHTML');
assert(document.documentElement.cloneNode().outerHTML, '<html lang="en" id="html" class="live"></html>', 'cloneNode().outerHTML');

document.documentElement.append('a', 'b');
assert(document.documentElement.lastChild.previousSibling.textContent, 'a', 'previousSibling text');

let {length} = document.documentElement.childNodes;
document.documentElement.normalize();
assert(document.documentElement.childNodes.length, (length - 1), 'normalize merged text nodes');

let node = document.getElementsByTagName('div')[0];
assert(document.querySelector('input').previousElementSibling, node, 'previousElementSibling');
assert(node.previousElementSibling, null, 'previousElementSibling');

node.before('before');
node.after('after');
assert(document.toString(), '<!DOCTYPE html><html lang="en" id="html" class="live">before<div></div>after<input><p></p>ab</html>', '.before() and after()');

let amp = document.createTextNode('&');
node.replaceWith(amp);
assert(amp.wholeText, 'before&after');
assert(document.toString(), '<!DOCTYPE html><html lang="en" id="html" class="live">before&amp;after<input><p></p>ab</html>', '.before() and after()');

// unrelated
assert(document.createElement('button', {is: 'special-case'}).getAttribute('is'), 'special-case', 'createElement with extra options');

assert(Object.keys(node.dataset).length, 0, 'empty dataset');
assert(node.dataset.testValue, null, 'no testValue');
node.dataset.testValue = 123;
assert(Object.keys(node.dataset).length, 1, 'not empty dataset');
assert(node.getAttribute('data-test-value'), '123', 'dataset.testValue');
delete node.dataset.testValue;
assert(Object.keys(node.dataset).length, 0, 'empty dataset again');

assert(node.className, '', 'no class name');
assert(node.classList.contains('test'), false, 'no test class');
node.classList.add('a', 'test', 'b');
assert(node.classList.value, 'a test b', 'correct .value');
assert(node.classList.contains('test'), true, 'test class');
node.classList.toggle('test');
assert(node.classList.contains('test'), false, 'no test class again');
node.classList.toggle('test', false);
assert(node.classList.contains('test'), false, 'no test class again 2');
node.classList.toggle('test');
assert(node.classList.contains('test'), true, 'test class in');
node.classList.toggle('test', true);
assert(node.classList.contains('test'), true, 'test class still in');
node.classList.toggle('test', false);
node.classList.toggle('test', true);
node.classList.remove('test');
assert(node.classList.contains('test'), false, 'no test class one more time');
assert(node.classList.replace('b', 'c'), true, 'replace happened');
assert(node.classList.value, 'a c', 'correct .value again');
assert(node.classList.replace('b', 'c'), false, 'replace did not happen');
assert(node.classList.supports('whatever'), true, 'whatever');

assert(node.onclick, null, 'Level 0 events');

let args = null;
function focus(event) {
  args = event;
}
node.onfocus = focus;
assert(node.onfocus, focus, 'Level 0 events');

let event = node.ownerDocument.createEvent('Event');
event.initEvent('focus');
node.dispatchEvent(event);

assert(args.type, 'focus');
node.onfocus = null;
assert(node.onfocus, null, 'Level 0 events');

args = null;
node.onfocus = focus;
node.focus();
assert(args.type, 'focus', 'event bubbled');

assert(node.tabIndex, -1, 'no tabIndex');
node.tabIndex = 1;
assert(node.tabIndex, 1, 'yes tabIndex');

assert(node.nonce, '', 'no nonce');
node.nonce = 'abc';
assert(node.nonce, 'abc', 'yes nonce');

node = document.createElement('div');
node.innerHTML = '<p>!</p>';
assert(node.innerHTML, '<p>!</p>', 'innerHTML');
node.insertAdjacentHTML('beforebegin', 'beforebegin');
node.insertAdjacentHTML('afterend', 'afterend');
assert(node.toString(), '<div><p>!</p></div>', 'no element, no before/after');
node.firstElementChild.insertAdjacentHTML('beforebegin', 'beforebegin');
assert(node.toString(), '<div>beforebegin<p>!</p></div>', 'beforebegin works');
node.firstElementChild.insertAdjacentHTML('afterbegin', 'afterbegin');
assert(node.toString(), '<div>beforebegin<p>afterbegin!</p></div>', 'afterbegin works');
node.firstElementChild.insertAdjacentHTML('beforeend', 'beforeend');
assert(node.toString(), '<div>beforebegin<p>afterbegin!beforeend</p></div>', 'beforeend works');
node.firstElementChild.insertAdjacentHTML('afterend', 'afterend');
assert(node.toString(), '<div>beforebegin<p>afterbegin!beforeend</p>afterend</div>', 'afterend works');

node.firstElementChild.insertAdjacentText('afterend', '<OK>');
assert(node.toString(), '<div>beforebegin<p>afterbegin!beforeend</p>&lt;OK&gt;afterend</div>', 'insertAdjacentText works');

node.setAttribute('a', '1');
node.setAttribute('b', '2');
node.removeAttributeNode(node.attributes[1]);

node.innerHTML = '"hello"';
assert(node.innerHTML, '"hello"');
