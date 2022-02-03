const assert = require('../assert.js').for('HTMLDocument');

const {parseHTML, WINDOW} = global[Symbol.for('linkedom')];

const {Document, DOMParser, window, setTimeout, history, location} = parseHTML(`
<!doctype html>
<html>
  <head><title>hello</title></head>
</html>
`, {
  get history() {
    return {
      get location() { return {pathname: '/'}; }
    };
  },
  get location() { return {pathname: '/'}; }
});

const clone = window.document.cloneNode(true);
assert(clone.isConnected, true, 'document always connected');
assert(JSON.stringify(clone), '[9,10,"html",1,"html",1,"head",1,"title",3,"hello",-4]');
assert(clone.doctype.nodeType, 10);
assert(clone.isEqualNode(clone), true, 'isEqualNode');
assert(clone.isEqualNode(window.document), true, 'isEqualNode');
assert(window.history.location.pathname, '/');
assert(history.location.pathname, '/');
assert(window.location.pathname, '/');
assert(location.pathname, '/');

let document = (new DOMParser).parseFromString('', {
  mime: 'text/html',
  [WINDOW]: {
    get history() {
      return {
        get location() { return {pathname: '/'}; }
      };
    }
  }
});
assert(document.doctype, null);
assert(document.defaultView.history.location.pathname, '/');
assert(document.defaultView.location, undefined);
assert(document.location, undefined);
assert(document.history, undefined);

document.insertBefore(document.createElement('html'));
assert(document.doctype, null);

document.insertBefore(clone.doctype, document.firstChild);
assert(document.doctype, clone.doctype);

assert(setTimeout, global.setTimeout);

try {
  new Document;
  assert(true, false, 'Document should be used as class');
} catch (ok) {}

document = (new DOMParser).parseFromString('<!DOCTYPE html><html />', {
  [WINDOW]: {
    location: {
      pathname: '/'
    }
  } 
});
assert(document.title, '', 'no title');
document.title = '"hello"';
assert(document.title, '"hello"', 'title not escaped');
assert(document.toString(), '<!DOCTYPE html><html><head><title>"hello"</title></head></html>');
assert(document.body.tagName, 'BODY');

assert(document.defaultView.location.hash, undefined);
assert(document.defaultView.location.pathname, '/');
assert(document.defaultView.history, undefined);
assert(document.location.hash, undefined);
assert(document.location.pathname, '/');

document.location = {
  pathname: '/url/file.html',
  hash: '#hash-string'
}
assert(document.defaultView.location.pathname, '/url/file.html');
assert(document.defaultView.location.hash, '#hash-string');
assert(document.location.pathname, '/url/file.html');
assert(document.location.hash, '#hash-string');
assert(JSON.stringify(document.location), JSON.stringify({
  pathname: '/url/file.html',
  hash: '#hash-string',
}));

document.title = '&';
assert(document.toString(), '<!DOCTYPE html><html><head><title>&</title></head><body></body></html>');

assert(document.all.length, 4);
assert(document.all[0], document.querySelector('html'));
assert(document.all[1], document.querySelector('head'));
assert(document.all[2], document.querySelector('title'));
assert(document.all[3], document.querySelector('body'));

// global listener
let triggered = false;
window.addEventListener('test', function once() {
  triggered = true;
  window.removeEventListener('test', once);
});

window.dispatchEvent(new window.Event('test'));
assert(triggered, true);

window.anyValue = 123;
assert(window.anyValue, 123);
window.addEventListener = window.removeEventListener = window.dispatchEvent = null;
assert(window.addEventListener, null);

assert(typeof window.performance.now(), 'number');
