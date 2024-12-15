const assert = require('../assert.js').for('HTMLScriptElement');

const { parseHTML } = global[Symbol.for('linkedom')];

const { document } = parseHTML('<!DOCTYPE html><html />');

let script = document.createElement('script');
script.setAttribute('what', 'ever');
script.appendChild(document.createTextNode('"'));
assert(
  script.toString(),
  '<script what="ever">"</script>',
  'text elements toString'
);

// Unrelated
const { head } = document;
head.innerHTML = `<nope csp-hash="any">"</nope>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><nope csp-hash="any">"</nope></head></html>',
  'Issue #1 - <nope> node'
);
head.innerHTML = `<div csp-hash="any">"</div>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><div csp-hash="any">"</div></head></html>',
  'Issue #1 - <div> node'
);
head.innerHTML = `<title csp-hash="any">"</title>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><title csp-hash="any">"</title></head></html>',
  'Issue #1 - <title> node'
);
head.innerHTML = `<style csp-hash="any">"</style>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><style csp-hash="any">"</style></head></html>',
  'Issue #1 - <style> node'
);
head.innerHTML = `<script csp-hash="any">"</script>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><script csp-hash="any">"</script></head></html>',
  'Issue #1 - <script> node'
);
head.innerHTML = `<textarea csp-hash="any">"</textarea>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><textarea csp-hash="any">"</textarea></head></html>',
  'Issue #1 - <textarea> node'
);

head.innerHTML = `<script type="application/ld+json">{}</script>`;
head.querySelector('script').textContent = `{"change": true}`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><script type="application/ld+json">{"change": true}</script></head></html>',
  'Issue #9 - <script> node'
);

head.innerHTML = `<script type="application/ld+json">{}</script>`;
head.querySelector("script").text = `{"change": true}`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><script type="application/ld+json">{"change": true}</script></head></html>'
);
assert(
  head.querySelector("script").text,
  `{"change": true}`
);

head.innerHTML = `<script>
<!--comment-->
function test() {
  return html\`<div>\${'hello'}</div>\`;
}
</script>`;

assert(
  head.toString(),
  `<head><script>
<!--comment-->
function test() {
  return html\`<div>\${'hello'}</div>\`;
}
</script></head>`,
  '<script>'
);

assert(
  head.firstChild.innerHTML,
  `
<!--comment-->
function test() {
  return html\`<div>\${'hello'}</div>\`;
}
`,
  '<script>.innerHTML'
);

head.firstChild.innerHTML = 'html`<p>ok</p>`;';
assert(head.firstChild.innerHTML, 'html`<p>ok</p>`;', '<script>.innerHTML');
{
  const { document } = parseHTML(
    '<html><script src="./main.js" type="module" nonce="111" async defer crossorigin="anonymous" nomodule referrerpolicy="no-referrer"/></html>'
  );

  const { firstElementChild: script } = document.documentElement;

  assert(script.src, `./main.js`, '<script>.src');

  assert(script.type, `module`, '<script>.type');
  assert(script.nonce, '111', '<script>.nonce');
  assert(script.async, true, '<script>.async');
  assert(script.defer, true, '<script>.defer');
  assert(script.crossOrigin, `anonymous`, '<script>.crossorigin');
  assert(script.nomodule, true, '<script>.nomodule');
  assert(script.referrerPolicy, `no-referrer`, '<script>.referrerpolicy');
  assert(
    script.toString(),
    `<script src="./main.js" type="module" nonce="111" async defer crossorigin="anonymous" nomodule referrerpolicy="no-referrer"></script>`
  );

  script.nonce = '222';
  assert(script.nonce, '222', '<script>.nonce');
  script.async = false;
  assert(script.async, false, '<script>.async');
  script.defer = false;
  assert(script.defer, false, '<script>.defer');
  script.crossOrigin = 'use-credentials';
  assert(script.crossOrigin, 'use-credentials', '<script>.crossorigin');
  script.nomodule = false;
  assert(script.nomodule, false, '<script>.nomodule');
  script.referrerPolicy = 'origin';
  assert(script.referrerPolicy, 'origin', '<script>.referrerpolicy');
  script.src = './main.js';
  assert(script.src, './main.js', '<script>.src');
  script.type = 'text/javascript';
  assert(script.type, 'text/javascript', '<script>.type');
}

{
  // https://github.com/WebReflection/linkedom/issues/292
  const { document } = parseHTML('<html></html>');
  const script = document.createElement('script')
  script.innerHTML = 'const test = "$$ $& $1"'
  document.head.append(script)
  assert(document.toString(), '<html><head><script>const test = "$$ $& $1"</script></head></html>')
}

{
  const { document } = parseHTML('<html><script>const test = "$$ $& $1"</script></html>');
  assert(document.toString(), '<html><script>const test = "$$ $& $1"</script></html>')
}
