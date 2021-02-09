const assert = require('../assert.js').for('CharacterData');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<html><!--comment-->text</html>');

const [comment, text] = document.documentElement.childNodes;

assert(JSON.stringify(comment.cloneNode()), '[8,"comment"]');

assert(JSON.stringify(text.cloneNode()), '[3,"text"]');

