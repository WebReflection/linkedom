'use strict';
const Event = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/event'));
const EventTarget = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/event-target'));

exports.Event = Event;
exports.EventTarget = EventTarget;

class CustomEvent extends Event {
  constructor(type, eventInitDict = {}) {
    super(type, eventInitDict);
    this.detail = eventInitDict.detail;
  }
}
exports.CustomEvent = CustomEvent

// https://dom.spec.whatwg.org/#nodelist
class NodeList extends Array {
  item(i) {
    return i < this.length ? this[i] : null;
  }
}
exports.NodeList = NodeList

// https://dom.spec.whatwg.org/#interface-htmlcollection
/*
const HTMLCollectionHandler = {
  get(target, name) {
    return name in target ?
      target[name] :
      target.find(node => (
        node.id === name || node.getAttribute('name') === name
      ));
  }
};

export class HTMLCollection extends NodeList {
  constructor(...args) {
    return new Proxy(super(...args), HTMLCollectionHandler);
  }
  namedItem(name) {
    return this[name];
  }
}
*/
