const fs = require('fs');
const {join} = require('path');
const {memoryUsage} = require('process');
const {DOMStream} = require('../../cjs/index.js');

let silent = process.argv.some(arg => arg === '--silent');

let length = 0;

const logStatus = (message = 'total heap memory') => {
  const used = memoryUsage().heapUsed / 1024 / 1024;
  const processed = length / 1024 / 1024;
  console.log(
    `\x1b[1m${message}:\x1b[0m ${Math.round(used * 100) / 100} MB`,
    `\x1b[1mtotal processed:\x1b[0m ${Math.round(processed * 100) / 100} MB`
  );
}

console.log('');
console.log(`\x1b[7m\x1b[1m DOMStream \x1b[0m\x1b[7m\x1b[2m benchmark for \x1b[0m\x1b[7m ./html/html\x1b[0m`);
console.log('');

logStatus('initial heap');

const domStream = new DOMStream('text/html', (name) => {
  return name === 'span';
});

const src = fs.createReadStream(join(__dirname, './html.html'));
src.on('data', chunk => {
  length += chunk.length;
  logStatus();
});

console.time(' parsing \x1b[2mcold\x1b[0m');
src.on('end', () => {
  console.timeEnd(' parsing \x1b[2mcold\x1b[0m');
  console.log();
  logStatus('end heap');
})

src.pipe(domStream).ondocument(doc => {
  const html = doc.documentElement.outerHTML
  if (!silent) console.log(html);
  if (!silent) logStatus('doc heap');
});
