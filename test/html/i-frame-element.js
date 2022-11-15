const assert = require('../assert.js').for('HTMLIframeElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><iframe src="./test.html"></html>');

const {firstElementChild: iframe} = document.documentElement;

assert(iframe.src, './test.html', 'Issue #82 - <iframe>.src');


{
  const { document } = parseHTML("<html><body><iframe></iframe></body></html>");
  const iframe = document.body.querySelector("iframe");

  iframe.srcdoc = `<html><span style="color: red">Test</span></html>`;
  assert(
    document.body.innerHTML,
    `<iframe srcdoc="<html><span style=&quot;color: red&quot;>Test</span></html>"></iframe>`
  );
}

{
  const { document } = parseHTML("<html><body><iframe></iframe></body></html>");
  const iframe = document.body.querySelector("iframe");

  iframe.allow = "geolocation";
  iframe.name = "iframe-name";
  iframe.referrerPolicy = "no-referrer";
  iframe.loading = "lazy";
  assert(
    document.body.innerHTML,
    `<iframe loading="lazy" referrerpolicy="no-referrer" name="iframe-name" allow="geolocation"></iframe>`
  );
}

{
  const { document } = parseHTML(
    "<html><body><iframe allowfullscreen></iframe></body></html>"
  );
  const iframe = document.body.querySelector("iframe");
  assert(iframe.allowFullscreen, true);
  iframe.allowFullscreen = false;
  assert(
    document.body.innerHTML,
    `<iframe></iframe>`
  );
}

{
  const { document } = parseHTML(
   `<html><body><iframe loading="lazy" referrerpolicy="no-referrer" name="iframe-name" allow="geolocation"></iframe></body></html>`
  ); 

  const iframe = document.body.querySelector("iframe");
  assert(iframe.allowFullscreen, false);
  assert(iframe.loading, 'lazy');
  assert(iframe.referrerPolicy, "no-referrer");
  assert(iframe.name, "iframe-name");
  assert(iframe.allow, "geolocation");
}