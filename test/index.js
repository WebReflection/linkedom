const {join} = require('path');
const {readdir} = require('fs').promises;

const files = new Map;

const getFiles = folder => {
  const path = join(__dirname, folder);
  if (files.has(path))
    return files.get('path');
  const promise = readdir(path);
  files.set('path', promise);
  return promise;
};

const test = folder => getFiles(folder).then(files => {
  for (const file of files) {
    if (/\.js$/.test(file)) {
      const module = join(__dirname, folder, file);
      require(module);
      delete require.cache[module];
    }
  }
});

console.log(`\x1b[7m\x1b[1m ${'LinkeDOM'.padEnd(74)}\x1b[0m`);
test('xml')
.then(() => test('svg'))
.then(() => test('html'))
.then(() => test('interface'))
.then(() => test('shared'))
.then(() => {
  setTimeout(() => {
    console.log(`\x1b[7m\x1b[1m ${'LinkeDOM - Cached'.padEnd(74)}\x1b[0m`);
    global[Symbol.for('linkedom')] = require('../cjs/cached.js');
    test('xml')
    .then(() => test('svg'))
    .then(() => test('html'))
    .then(() => test('interface'))
    .then(() => test('shared'))
    .then(() => {
      require('./issue-256.js');
    });
  }, 500);
});
