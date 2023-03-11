import { Element } from '../interface/element.js';
import { stringAttribute } from '../shared/attributes.js';

const classNames = new WeakMap;
const viewBoxes = new WeakMap;

const handler = {
  get(target, name) {
    return target[name];
  },
  set(target, name, value) {
    target[name] = value;
    return true;
  }
};

/**
 * @implements globalThis.SVGElement
 */
export class SVGElement extends Element {
  constructor(ownerDocument, localName, ownerSVGElement = null) {
    super(ownerDocument, localName);
    this.ownerSVGElement = ownerSVGElement;
  }

  get viewBox() {
    if (!viewBoxes.has(this)) {
      const obj = makeValObj(stringAttribute.get(this, 'viewBox'));
      const proxyObj = { baseVal: obj, animVal: obj };
      viewBoxes.set(this, new Proxy(proxyObj, handler));
    }
    return viewBoxes.get(this)
  }

  set viewBox(value) {
    if (!viewBoxes.has(this)) {
      const { x, y, width, height } = this.viewBox.baseVal;
      const obj = { baseVal: { x, y, width, height }, animVal: { x, y, width, height } }
      viewBoxes.set(this, new Proxy(obj, handler))
    }
    Object.assign(viewBoxes.get(this), value);
  }

  get className() {
    if (!classNames.has(this))
      classNames.set(this, new Proxy({baseVal: '', animVal: ''}, handler));
    return classNames.get(this);
  }

  /* c8 ignore start */
  set className(value) {
    const {classList} = this;
    classList.clear();
    classList.add(...value.split(/\s+/));
  }
  /* c8 ignore stop */

  get namespaceURI() {
    return 'http://www.w3.org/2000/svg';
  }

  getAttribute(name) {
    if (name === 'class')
      return [...this.classList].join(' ')
    if (name === 'viewbox') {
      return this.viewBox.baseVal  ? makeViewboxString(this.viewBox.baseVal) : '';
    }
    return super.getAttribute(name);
  }

  setAttribute(name, value) {
    if (name === 'class')
      this.className = value;
    else if (name === 'style') {
      const {className} = this;
      className.baseVal = className.animVal = value;
    } else if (name === 'viewbox') {
      this.viewBox.baseVal = makeValObj(value);
      this.viewBox.animVal = makeValObj(value);
    }
    super.setAttribute(name, value);
  }
}

// makeValObj :: String -> Object{x, y, width, height}
function makeValObj(str) {
  if (!str) return '';
  const [x, y, width, height] = str.split(/\s+/).map(Number);
  return { x, y, width, height };
}

// makeViewboxString :: Object{x, y, width, height} -> String
function makeViewboxString(obj) {
  return `${obj.x} ${obj.y} ${obj.width} ${obj.height}`;
}
