import Event from '@ungap/event';
import EventTarget from '@ungap/event-target';

export {Event, EventTarget};

/**
 * @implements globalThis.CustomEvent
 */
class CustomEvent extends Event {
  constructor(type, eventInitDict = {}) {
    super(type, eventInitDict);
    this.detail = eventInitDict.detail;
  }
}

// https://dom.spec.whatwg.org/#nodelist
/**
 * @implements globalThis.NodeList
 */
export class NodeList extends Array {
  item(i) {
    return i < this.length ? this[i] : null;
  }
}

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
