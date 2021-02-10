const assert = require('../assert.js').for('HTMLCanvasElement');

const {parseHTML} = global[Symbol.for('linkedom')];

const canvas = parseHTML('<canvas>').document.querySelector('canvas');

assert(canvas.height, 150, 'canvas.height');
assert(canvas.width, 300, 'canvas.width');

canvas.height = 200;
canvas.width = 320;

assert(canvas.toString(), '<canvas width="320" height="200"></canvas>');

assert(canvas.getContext('2d') !== void 0, true, 'canvas.getContext');

assert(typeof canvas.toDataURL('image/png'), 'string', 'canvas.toDataURL');