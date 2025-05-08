import {HTMLImageElement} from '../html/image-element.js';

export const ImageClass = ownerDocument =>
/**
 * @implements globalThis.Image
 */
class Image extends HTMLImageElement {
  constructor(width, height) {
    super(ownerDocument);
    switch (arguments.length) {
      case 1:
        this.width = width;
        this.height = width;
        break;
      case 2:
        this.width = width;
        this.height = height;
        break;
    }
  }
};
