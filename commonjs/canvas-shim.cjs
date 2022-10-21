class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getContext() {
    return null;
  }
  toDataURL() {
    return '';
  }
}

module.exports = {
  createCanvas: (width, height) => new Canvas(width, height),
};
