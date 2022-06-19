const assert = require("../assert.js").for("HTMLScriptElement");

const { parseHTML } = global[Symbol.for("linkedom")];

const { document } = parseHTML("<!DOCTYPE html><html />");

let script = document.createElement("script");
script.setAttribute("what", "ever");
script.appendChild(document.createTextNode('"'));
assert(
  script.toString(),
  '<script what="ever">"</script>',
  "text elements toString"
);

// Unrelated
const { head } = document;
head.innerHTML = `<nope csp-hash="any">"</nope>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><nope csp-hash="any">"</nope></head></html>',
  "Issue #1 - <nope> node"
);
head.innerHTML = `<div csp-hash="any">"</div>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><div csp-hash="any">"</div></head></html>',
  "Issue #1 - <div> node"
);
head.innerHTML = `<title csp-hash="any">"</title>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><title csp-hash="any">"</title></head></html>',
  "Issue #1 - <title> node"
);
head.innerHTML = `<style csp-hash="any">"</style>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><style csp-hash="any">"</style></head></html>',
  "Issue #1 - <style> node"
);
head.innerHTML = `<script csp-hash="any">"</script>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><script csp-hash="any">"</script></head></html>',
  "Issue #1 - <script> node"
);
head.innerHTML = `<textarea csp-hash="any">"</textarea>`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><textarea csp-hash="any">"</textarea></head></html>',
  "Issue #1 - <textarea> node"
);

head.innerHTML = `<script type="application/ld+json">{}</script>`;
head.querySelector("script").textContent = `{"change": true}`;
assert(
  document.toString(),
  '<!DOCTYPE html><html><head><script type="application/ld+json">{"change": true}</script></head></html>',
  "Issue #9 - <script> node"
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
  "<script>"
);

assert(
  head.firstChild.innerHTML,
  `
<!--comment-->
function test() {
  return html\`<div>\${'hello'}</div>\`;
}
`,
  "<script>.innerHTML"
);

head.firstChild.innerHTML = "html`<p>ok</p>`;";
assert(head.firstChild.innerHTML, "html`<p>ok</p>`;", "<script>.innerHTML");
{
  const { document } = parseHTML(
    '<html><script src="./main.js" type="module"/></html>'
  );

  const { firstElementChild: script } = document.documentElement;

  assert(script.src, `./main.js`, "<script>.src");

  assert(script.type, `module`, "<script>.type");
}
