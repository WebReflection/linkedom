const {readFile} = require('fs');
const {join} = require('path');

const onContent = require('./benchmark-content.js');

let fileName = '';
if (process.argv.some(arg => arg === '--w3c'))
  fileName = 'w3c';
else if (process.argv.some(arg => arg === '--dom'))
  fileName = 'dom';
else if (process.argv.some(arg => arg === '--html'))
  fileName = 'html';

if (!fileName) {
  console.log(`\x1b[1mPlease use one of the following commands:\x1b[0m

  npm run benchmark:w3c   \x1b[2m# light  - 32K\x1b[0m
  npm run benchmark:dom   \x1b[2m# medium - 2.3M\x1b[0m
  npm run benchmark:html  \x1b[2m# heavy  - 12M\x1b[0m
`);
  process.exit(0);
}

fileName += '.html';

module.exports = (name, createDocument, times = 2) => {
  console.log('');
  console.log(`\x1b[7m\x1b[1m ${name} \x1b[0m\x1b[7m\x1b[2m benchmark for \x1b[0m\x1b[7m ./${fileName.padEnd(22, ' ')}\x1b[0m`);
  console.log('');
  readFile(join(__dirname, fileName), (_, html) => onContent(createDocument, html, times));
};
