// TODO: this stuff is complex

/**
 * @implements globalThis.MutationObserver
 */
export class MutationObserver {

  constructor(callback) {
    this._callback = callback;
    this._records = [];
    this._observing = false;
  }

  disconnect() {
    this._observing = false;
  }

  /**
   * @param {Element} target
   * @param {MutationObserverInit} options
   */
  observe(target, options = {
    subtree: false,
    childList: false,
    attributes: false,
    attributeFilter: [],
    attributeOldValue: false,
    characterData: false,
    characterDataOldValue: false
  }) {
    this._observing = true;
  }

  /**
   * @returns {MutationRecord[]}
   */
  takeRecords() {
    if (!this._observing)
      return [];
    // TODO: implement this shit
    return [];
  }
}
