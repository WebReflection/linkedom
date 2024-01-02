const { parseHTML } = require('../cjs');

let { document } = parseHTML('<div><!--comment--></div>');

const comment = document.querySelector('div').firstChild;

comment.replaceWith(
  document.createTextNode('text'),
  comment
);

if (comment.parentNode.outerHTML !== '<div>text<!--comment--></div>')
  throw new Error('replaceWith same node fails');