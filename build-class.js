import uhyphen from 'uhyphen';
import {writeFile} from 'fs';

const classes = {
  HTMLHtmlElement: ['html'],
  HTMLScriptElement: ['script'],
  HTMLFrameElement: ['frame'],
  HTMLIFrameElement: ['iframe'],
  HTMLObjectElement: ['object'],
  HTMLHeadElement: ['head'],
  HTMLBodyElement: ['body'],
  HTMLStyleElement: ['style'],
  HTMLTimeElement: ['time'],
  HTMLFieldSetElement: ['fieldset'],
  HTMLEmbedElement: ['embed'],
  HTMLHRElement: ['hr'],
  HTMLProgressElement: ['progress'],
  HTMLParagraphElement: ['p'],
  HTMLTableElement: ['table'],
  HTMLFrameSetElement: ['frameset'],
  HTMLLIElement: ['li'],
  HTMLBaseElement: ['base'],
  HTMLDataListElement: ['datalist'],
  HTMLInputElement: ['input'],
  HTMLParamElement: ['param'],
  HTMLMediaElement: ['media'],
  HTMLAudioElement: ['audio'],
  HTMLHeadingElement: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  HTMLDirectoryElement: ['dir'],
  HTMLQuoteElement: ['quote'],
  HTMLCanvasElement: ['canvas'],
  HTMLLegendElement: ['legend'],
  HTMLOptionElement: ['option'],
  HTMLSpanElement: ['span'],
  HTMLMeterElement: ['meter'],
  HTMLVideoElement: ['video'],
  HTMLTableCellElement: ['td', 'th'],
  HTMLTitleElement: ['title'],
  HTMLOutputElement: ['output'],
  HTMLTableRowElement: ['tr'],
  HTMLDataElement: ['data'],
  HTMLMenuElement: ['menu'],
  HTMLSelectElement: ['select'],
  HTMLBRElement: ['br'],
  HTMLButtonElement: ['button'],
  HTMLMapElement: ['map'],
  HTMLOptGroupElement: ['optgroup'],
  HTMLDListElement: ['dl'],
  HTMLTextAreaElement: ['textarea'],
  HTMLFontElement: ['font'],
  HTMLDivElement: ['div'],
  HTMLLinkElement: ['link'],
  HTMLSlotElement: ['slot'],
  HTMLFormElement: ['form'],
  HTMLImageElement: ['img'],
  HTMLPreElement: ['pre'],
  HTMLUListElement: ['ul'],
  HTMLMetaElement: ['meta'],
  HTMLPictureElement: ['picture'],
  HTMLAreaElement: ['area'],
  HTMLOListElement: ['ol'],
  HTMLTableCaptionElement: ['caption'],
  HTMLAnchorElement: ['a'],
  HTMLLabelElement: ['label'],
  HTMLUnknownElement: ['unknown'],
  HTMLModElement: ['mod'],
  HTMLDetailsElement: ['details'],
  HTMLSourceElement: ['source'],
  HTMLTrackElement: ['track'],
  HTMLMarqueeElement: ['marquee']
};

Object.keys(classes).forEach(key => {

  return;
  writeFile(`./esm/${uhyphen(key)}.js`, `import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.${key}
 */
export class ${key} extends HTMLElement {
  constructor(ownerDocument, localName = '${classes[key][0]}') {
    super(ownerDocument, localName);
  }
}
`, Object);
});
