/* c8 ignore start */
try {
  module.exports = require('canvas');
} catch (fallback) {
  module.exports = require('./canvas-shim.cjs');
}
/* c8 ignore stop */
