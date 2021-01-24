'use strict';
const update = self => {
  self._ownerElement.setAttribute('class', [...self].join(' '));
};

class ClassList extends Set {

  constructor(_ownerElement) {
    super();
    this._ownerElement = _ownerElement;
  }

  add(...names) {
    for (const name of names) {
      if (name)
        super.add(name);
    }
    update(this);
  }

  contains(name) {
    return this.has(name);
  }

  remove(...names) {
    for (const name of names)
      this.delete(name);
    update(this);
  }
}
exports.ClassList = ClassList;
