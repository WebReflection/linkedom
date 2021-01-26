const update = ({_ownerElement, value}) => {
  _ownerElement.setAttribute('class', value);
};

export class DOMTokenList extends Set {

  constructor(_ownerElement) {
    super();
    this._ownerElement = _ownerElement;
  }

  get value() {
    return [...this].join(' ');
  }

  add(...tokens) {
    for (const token of tokens) {
      if (token)
        super.add(token);
    }
    update(this);
  }

  contains(token) {
    return this.has(token);
  }

  remove(...tokens) {
    for (const token of tokens)
      this.delete(token);
    update(this);
  }

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

  replace(token, newToken) {
    if (this.has(token)) {
      this.delete(token);
      super.add(newToken);
      update(this);
      return true;
    }
    return false;
  }

  supports(token) {
    return true;
  }
};
