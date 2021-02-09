const assert = require('../assert.js').for('HTMLButtonElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const {document} = parseHTML('<button>click me</button>');

const {lastElementChild: button} = document;

button.disabled = true;
assert(button.toString(), '<button disabled>click me</button>');
assert(button.disabled, true);
assert(JSON.stringify(button), '[1,"button",2,"disabled",3,"click me",-1]');

button.disabled = false;
assert(button.toString(), '<button>click me</button>');
assert(button.tagName, 'BUTTON');
assert(button.nodeName, 'BUTTON');
assert(button.lastElementChild, null, 'lastElementChild');
assert(button.firstElementChild, null, 'firstElementChild');
