import {DOMParser} from './dom/parser.js';
import {Document as _Document} from './interface/document.js';

import {illegalConstructor} from './shared/facades.js';
import {setPrototypeOf} from './shared/object.js';
export {parseJSON, toJSON} from './shared/parse-json.js';

export * from './shared/facades.js';
export * from './shared/html-classes.js';

export {DOMParser};

export {CustomEvent} from './interface/custom-event.js';
export {Event} from './interface/event.js';
export {EventTarget} from './interface/event-target.js';
export {InputEvent} from './interface/input-event.js';
export {NodeList} from './interface/node-list.js';

export const parseHTML = html => (new DOMParser).parseFromString(
  html, 'text/html'
).defaultView;

export function Document() {
  illegalConstructor();
}

setPrototypeOf(Document, _Document).prototype = _Document.prototype;
