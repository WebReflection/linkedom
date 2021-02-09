import {Parser} from 'htmlparser2';

import {CUSTOM_ELEMENTS, PRIVATE} from './symbols.js';
import {Mime} from './mime.js';
import {keys} from './object.js';


const VOID_SOURCE = Mime['text/html'].voidElements.source.slice(4, -2);
const VOID_ELEMENTS = new RegExp(`<(${VOID_SOURCE})([^>]*?)>`, 'gi');
const VOID_SANITIZER = (_, $1, $2) => `<${$1}${$2}${/\/$/.test($2) ? '' : ' /'}>`;
const voidSanitizer = html => html.replace(VOID_ELEMENTS, VOID_SANITIZER);

let notParsing = true;

export const isNotParsing = () => notParsing;

export const parseFromString = (document, isHTML, markupLanguage) => {
  const {SVGElement} = document[PRIVATE];
  const {active, registry} = document[CUSTOM_ELEMENTS];

  let node = document;
  let ownerSVGElement = null;

  notParsing = false;

  const content = new Parser({
    // <!DOCTYPE ...>
    onprocessinginstruction(name, data) {
      if (name.toLowerCase() === '!doctype')
        document.doctype = data.slice(name.length).trim();
    },

    // <tagName>
    onopentag(name, attributes) {
      let create = true;
      if (isHTML) {
        if (ownerSVGElement) {
          node = node.appendChild(new SVGElement(document, name, ownerSVGElement));
          create = false;
        }
        else if (name === 'svg' || name === 'SVG') {
          ownerSVGElement = new SVGElement(document, name);
          node = node.appendChild(ownerSVGElement);
          create = false;
        }
        else if (active) {
          const ce = name.includes('-') ? name : (attributes.is || '');
          if (ce && registry.has(ce)) {
            const {Class} = registry.get(ce);
            node = node.appendChild(new Class);
            create = false;
            delete attributes.is;
          }
        }
      }

      if (create)
        node = node.appendChild(document.createElement(name));

      for (const name of keys(attributes))
        node.setAttribute(name, attributes[name]);
    },

    // #text, #comment
    oncomment(data) { node.appendChild(document.createComment(data)); },
    ontext(text) { node.appendChild(document.createTextNode(text)); },

    // </tagName>
    onclosetag(name) {
      if (isHTML && node === ownerSVGElement)
        ownerSVGElement = null;
      node = node.parentNode;
    }
  }, {
    decodeEntities: true,
    xmlMode: true
  });

  content.write(isHTML ? voidSanitizer(markupLanguage) : markupLanguage);
  content.end();

  notParsing = true;

  return document;
};
