import {isNotParsing} from './parse-from-string.js';

export const childNodesWM = new WeakMap;
export const childrenWM = new WeakMap;
export const querySelectorWM = new WeakMap;
export const querySelectorAllWM = new WeakMap;

export const get = (wm, self, method) => {
  if (wm.has(self))
    return wm.get(self);
  const value = method.call(self);
  wm.set(self, value);
  return value;
};

export const reset = parentNode => {
  if (isNotParsing()) {
    while (parentNode) {
      childNodesWM.delete(parentNode);
      childrenWM.delete(parentNode);
      querySelectorWM.delete(parentNode);
      querySelectorAllWM.delete(parentNode);
      parentNode = parentNode.parentNode;
    }
  }
};
