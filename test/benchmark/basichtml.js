const benchmark = require('./index.js');
const {document} = require('basichtml').init();
const template = document.createElement('template');

benchmark('basicHTML', html => {
  template.innerHTML = html;
  document.documentElement = template.content.firstElementChild;
  return document;
});
