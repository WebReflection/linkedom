const {readFile} = require('fs');
const {join} = require('path');
const {memoryUsage} = require('process');

const onContent = require('./content.js');

const logHeap = (message = 'total heap memory') => {
  const used = memoryUsage().heapUsed / 1024 / 1024;
  console.log(`\x1b[1m${message}:\x1b[0m ${Math.round(used * 100) / 100} MB`);
};

let cloneBench = !process.argv.some(arg => arg === '--no-clone');
let customElements = process.argv.some(arg => arg === '--custom-elements');
let mutationObserver = process.argv.some(arg => arg === '--mutation-observer');

let fileName = '';
if (process.argv.some(arg => arg === '--w3c'))
  fileName = 'w3c';
else if (process.argv.some(arg => arg === '--dom'))
  fileName = 'dom';
else if (process.argv.some(arg => arg === '--html'))
  fileName = 'html';

if (!fileName) {
  console.log(`\x1b[1mPlease use one of the following commands:\x1b[0m

  npm run benchmark:w3c     \x1b[2m# light      - 32K\x1b[0m
  npm run benchmark:dom     \x1b[2m# medium     - 2.3M\x1b[0m
  npm run benchmark:html    \x1b[2m# heavy      - 12M\x1b[0m
  npm run benchmark:html:nc \x1b[2m# heavy-ish  - no cloneNode\x1b[0m
  npm run benchmark:html:ce \x1b[2m# heavier    - Custom Elements\x1b[0m

P.S. the :ce test is available for all other tests too.
`);
  process.exit(0);
}

fileName += '.html';

module.exports = (name, createDocument, times = 2) => {
  console.log('');
  console.log(`\x1b[7m\x1b[1m ${name} \x1b[0m\x1b[7m\x1b[2m benchmark for \x1b[0m\x1b[7m ./${fileName.padEnd(22, ' ')}\x1b[0m`);
  console.log('');
  readFile(join(__dirname, fileName), (_, html) => {
    onContent(createDocument, html, times, logHeap, cloneBench, customElements, mutationObserver).then(logHeap);
  });
};
