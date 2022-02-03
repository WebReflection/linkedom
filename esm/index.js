import {DOMParser} from './dom/parser.js';
import {Document as _Document} from './interface/document.js';

import {illegalConstructor} from './shared/facades.js';
import {setPrototypeOf} from './shared/object.js';
import {WINDOW, MIME} from './shared/symbols.js';

export {parseJSON, toJSON} from './shared/parse-json.js';

export * from './shared/facades.js';
export * from './shared/html-classes.js';

export {DOMParser, WINDOW};

export {CustomEvent} from './interface/custom-event.js';
export {Event} from './interface/event.js';
export {EventTarget} from './interface/event-target.js';
export {InputEvent} from './interface/input-event.js';
export {NodeList} from './interface/node-list.js';

export const parseHTML = (html, global={}) => {
  return (new DOMParser).parseFromString(
    html, { [MIME]: 'text/html', [WINDOW]: global }
  ).defaultView;
}

export function Document() {
  illegalConstructor();
}

setPrototypeOf(Document, _Document).prototype = _Document.prototype;
