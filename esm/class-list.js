const index = ({classes, element}, name) => ({
  i: classes.indexOf(name),
  classes,
  update() {
    element.setAttribute('class', classes.join(' '));
  }
});

export class ClassList {
  constructor(element) {
    this.element = element;
    this.classes = [];
  }
  add(name) {
    const {i, classes, update} = index(this, name);
    if (i < 0) {
      classes.push(name);
      update();
    }
  }
  contains(name) {
    return -1 < index(this, name).i;
  }
  remove(name) {
    const {i, classes, update} = index(this, name);
    if (-1 < i) {
      classes.splice(i, 1);
      update();
    }
  }
};
