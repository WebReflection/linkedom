import {OWNER_ELEMENT} from '../shared/symbols.js';

const update = ({[OWNER_ELEMENT]: ownerElement, value}) => {
  ownerElement.setAttribute('class', value);
};

/**
 * @implements globalThis.DOMTokenList
 */
export class DOMTokenList extends Set {

  constructor(ownerElement) {
    super();
    this[OWNER_ELEMENT] = ownerElement;
  }

  get value() { return [...this].join(' '); }

  /**
   * @param  {...string} tokens
   */
  add(...tokens) {
    for (const token of tokens) {
      if (token)
        super.add(token);
    }
    update(this);
  }

  /**
   * @param {string} token
   */
  contains(token) { return this.has(token); }

  /**
   * @param  {...string} tokens
   */
  remove(...tokens) {
    for (const token of tokens)
      this.delete(token);
    update(this);
  }

  /**
   * @param {string} token
   * @param {boolean?} force
   */
  toggle(token, force) {
    if (this.has(token)) {
      if (force)
        return true;
      this.delete(token);
      update(this);
    }
    else if (force || arguments.length === 1) {
      super.add(token);
      update(this);
      return true;
    }
    return false;
  }

  /**
   * @param {string} token
   * @param {string} newToken
   */
  replace(token, newToken) {
    if (this.has(token)) {
      this.delete(token);
      super.add(newToken);
      update(this);
      return true;
    }
    return false;
  }

  /**
   * @param {string} token
   */
  supports() { return true; }
}
