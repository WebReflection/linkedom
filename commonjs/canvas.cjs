/* c8 ignore start */
try {
  module.exports = require('canvas');
}
catch (fallback) {
  class Canvas {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    getContext() { return null; }
    toDataURL() { return ''; }
  }
  module.exports = {
    createCanvas: (width, height) => new Canvas(width, height)
  };
}
/* c8 ignore stop */
