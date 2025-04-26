const assert = require('../assert.js').for('HTMLAnchorElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<a href="https://google.com/?q=1&page=2">click me</a>');

const {lastElementChild: a} = document;

assert(a.toString(), '<a href="https://google.com/?q=1&page=2">click me</a>');
a.setAttribute('href', 'https://google.com/?q=1&page=2&test="');
assert(a.toString(), '<a href="https://google.com/?q=1&page=2&test=&quot;">click me</a>');
a.setAttribute('href', 'https://google.com/?q=asd&lol=<2>"');
assert(a.href, 'https://google.com/?q=asd&lol=%3C2%3E%22');
a.setAttribute('href', 'https://google.com/path%20to%20some%20file.pdf');
assert(a.href, 'https://google.com/path%20to%20some%20file.pdf');

// "href" should trim links, but getAttribute should preserve the original value
const untrimmedLink = '                https://example.com/\n         ';
const hrefExample = parseHTML( `<!DOCTYPE html><html><head><title>Test</title><link rel='canonical' href="${untrimmedLink}"></head><body></body></html>`, 'text/html').document.querySelector('link');
assert(hrefExample.href, 'https://example.com/');
assert(hrefExample.getAttribute('href'), untrimmedLink);
