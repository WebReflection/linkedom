const fs = require('fs');
const {join} = require('path');
const {memoryUsage} = require('process');
const {DOMParser} = require('../../cjs/index.js');


const parser = new DOMParser;
let length = 0;

const logStatus = (message = 'total heap memory') => {
  const used = memoryUsage().heapUsed / 1024 / 1024;
  const processed = length / 1024 / 1024;
  console.log(
    `\x1b[1m${message}:\x1b[0m ${Math.round(used * 100) / 100} MB`,
    `\x1b[1mtotal processed:\x1b[0m ${Math.round(processed * 100) / 100} MB`
  );
}

logStatus('initial heap');

const src = fs.createReadStream(join(__dirname, './big.xml'));
src.on('data', chunk => {
  length += chunk.length;
  logStatus();
});

console.time(' parsing \x1b[2mcold\x1b[0m');
parser.parseFromString(src, 'text/xml').then(doc => {
  console.timeEnd(' parsing \x1b[2mcold\x1b[0m');
  console.log();
  logStatus('document heap');
  const hotels = doc.querySelectorAll('hotelName')
  console.log('Num of hotels:', hotels.length)
}).catch((o_O) => {
  console.error(o_O);
  console.warn(`⚠ \x1b[1merror\x1b[0m - unable to parse the document: ${o_O.message}`);
});
