// Please note: you can literally copy and paste this file
//              into any browser console and see it running
//              in there too, so it's easy to compare with NodeJS.

let browser = false;

const bench = (name, count, times) => {
  let total = 0;
  for (let i = 0; i < times; i++) {
    const timeName = `${name} \x1b[2m${i < 1 ? 'cold' : ' hot'}\x1b[0m`;
    console.time(clean(timeName));
    total = count();
    console.timeEnd(clean(timeName));
  }
  return total;
};

const clean = str => browser ? str.replace(/\x1b\[\dm/g, '') : str;

const crawl = (element, kind) => {
  const nodes = element[kind];
  const {length} = nodes;
  let count = length;
  for (let i = 0; i < length; i++)
    count += crawl(nodes[i], kind);
  return count;
};

const sleep = ms => new Promise($ => setTimeout($, ms));

const onContent = async (createDocument, html, times, logHeap = () => {}, cloneBench = true, customElements = false, mutationObserver = false) => {

  console.time(clean('\x1b[1mtotal benchmark time\x1b[0m'));

  logHeap('initial heap');
  console.log();

  let document;
  try {
    console.time(clean(' parsing \x1b[2mcold\x1b[0m'));
    document = createDocument(html.toString());
    console.timeEnd(clean(' parsing \x1b[2mcold\x1b[0m'));
    console.log();
    logHeap('document heap');
  }
  catch (o_O) {
    console.error(o_O);
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to parse the document: ${o_O.message}`));
    process.exit(1);
  }
  console.log();

  if (customElements) {
    let {constructor} = document.documentElement;
    while (constructor.name !== 'HTMLElement')
      constructor = Object.getPrototypeOf(constructor);
    (document.defaultView.customElements || global.customElements).define(
      'custom-element',
      class extends constructor {
        static get observedAttributes() { return ['nothing', 'really']; }
        attributeChangedCallback() {}
        connectedCallback() {}
        disconnectedCallback() {}
      }
    );
    console.log(clean('\x1b[1mCustom Elements\x1b[0m enabled via ' + constructor.name));
    console.log();
  }

  let observed = 0;
  if (mutationObserver) {
    const {MutationObserver} = document.defaultView;
    const mo = new MutationObserver(() => {
      observed++;
    });
    mo.observe(document, {
      childList: true,
      subtree: true,
      attributes: true
    });
    console.log(clean('\x1b[1mMutationObserver\x1b[0m enabled'));
    console.log();
  }

  try {
    bench(' html.normalize()', () => { document.documentElement.normalize(); }, 1);
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to normalize html: ${o_O.message}`));
  }
  console.log();

  try {
    console.log(' total childNodes', bench(' crawling childNodes', () => crawl(document.documentElement, 'childNodes'), times));
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to crawl childNodes: ${o_O.message}`));
  }
  console.log();

  await sleep(100);

  try {
    console.log(' total children', bench(' crawling children', () => crawl(document.documentElement, 'children'), times));
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to crawl children: ${o_O.message}`));
  }
  console.log();

  logHeap('after crawling heap');
  console.log();

  if (cloneBench) {
    await sleep(100);

    try {
      const html = bench(' html.cloneNode(true)', () => document.documentElement.cloneNode(true), 1);
      console.log(' cloning: OK');

      const {outerHTML: cloned} = html;
      const {outerHTML: original} = document.documentElement;
      console.log(' outerHTML: OK');

      if (cloned.length !== original.length)
        throw new Error('invalid output');
      console.log(' outcome: OK');
    }
    catch (o_O) {
      console.log();
      console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to clone html: ${o_O.message}`));
    }
    console.log();

    logHeap('after cloning heap');
    console.log();
  }

  await sleep(100);

  try {
    console.log(' total div', bench(' querySelectorAll("div")', () => document.documentElement.querySelectorAll('div').length, times));
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to querySelectorAll("div"): ${o_O.message}`));
  }
  console.log();

  await sleep(100);

  try {
    console.log(' total p', bench(' getElementsByTagName("p")', () => document.documentElement.getElementsByTagName('p').length, times));
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to getElementsByTagName("p"): ${o_O.message}`));
  }
  console.log();

  logHeap('after querying heap');
  console.log();

  await sleep(100);

  try {
    const divs = document.documentElement.querySelectorAll('div');
    console.time(' removing divs');
    divs.forEach(div => {
      div.remove();
    });
    console.timeEnd(' removing divs');
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to div.remove() them all: ${o_O.message}`));
  }
  console.log();

  await sleep(100);

  try {
    console.log(' total div', bench(' div count', () => document.documentElement.getElementsByTagName('div').length, 1));
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to getElementsByTagName("div"): ${o_O.message}`));
  }
  console.log();

  await sleep(100);

  try {
    console.log(' total p', bench(' p count', () => document.documentElement.getElementsByTagName('p').length, 1));
  }
  catch (o_O) {
    console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to getElementsByTagName("p"): ${o_O.message}`));
  }
  console.log();

  await sleep(100);

  logHeap('after removing divs heap');
  console.log();

  if (cloneBench) {
    try {
      const html = bench(' html.cloneNode(true)', () => document.documentElement.cloneNode(true), 1);
      console.log(' cloneNode: OK');
      console.log();

      await sleep(100);
      const outerHTML = bench(' html.outerHTML', () => html.outerHTML, times);

      if (outerHTML.length !== document.documentElement.outerHTML.length)
        throw new Error('invalid output');
      console.log(' outcome: OK');
    }
    catch (o_O) {
      console.warn(clean(`⚠ \x1b[1merror\x1b[0m - unable to clone html: ${o_O.message}`));
    }
    console.log();
  }

  if (cloneBench) {
    await sleep(100);
    console.time(' html.innerHTML');
    document.documentElement.innerHTML = document.documentElement.innerHTML;
    console.timeEnd(' html.innerHTML');
  }

  if (mutationObserver) {
    console.log();
    console.log(clean('\x1b[1mobserved mutations: \x1b[0m' + observed));
  }

  console.log();
  console.timeEnd(clean('\x1b[1mtotal benchmark time\x1b[0m'));
};

try {
  module.exports = onContent;
}
catch (o_O) {
  browser = true;
  onContent(
    html => {
      return (new DOMParser).parseFromString(html, 'text/html');
    },
    `<!DOCTYPE html>${document.documentElement.outerHTML}`,
    2
  );
}
