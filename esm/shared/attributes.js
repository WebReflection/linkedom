export const booleanAttribute = {
  get(element, name) {
    return element.hasAttribute(name.toLowerCase());
  },
  set(element, name, value) {
    if (value)
      element.setAttribute(name.toLowerCase(), '');
    else
      element.removeAttribute(name.toLowerCase());
  }
};

export const numericAttribute = {
  get(element, name) {
    return parseFloat(element.getAttribute(name.toLowerCase()) || 0);
  },
  set(element, name, value) {
    element.setAttribute(name.toLowerCase(), value);
  }
};

export const stringAttribute = {
  get(element, name) {
    return element.getAttribute(name.toLowerCase()) || '';
  },
  set(element, name, value) {
    element.setAttribute(name.toLowerCase(), value);
  }
};

/* oddly enough, this apparently is not a thing
export const nullableAttribute = {
  get(element, name) {
    return element.getAttribute(name);
  },
  set(element, name, value) {
    if (value === null)
      element.removeAttribute(name);
    else
      element.setAttribute(name, value);
  }
};
*/
