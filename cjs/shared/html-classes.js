'use strict';
const {HTMLElement} = require('../html/element.js');
const {HTMLTemplateElement} = require('../html/template-element.js');
const {HTMLHtmlElement} = require('../html/html-element.js');
const {HTMLScriptElement} = require('../html/script-element.js');
const {HTMLFrameElement} = require('../html/frame-element.js');
const {HTMLIFrameElement} = require('../html/i-frame-element.js');
const {HTMLObjectElement} = require('../html/object-element.js');
const {HTMLHeadElement} = require('../html/head-element.js');
const {HTMLBodyElement} = require('../html/body-element.js');
const {HTMLStyleElement} = require('../html/style-element.js');
const {HTMLTimeElement} = require('../html/time-element.js');
const {HTMLFieldSetElement} = require('../html/field-set-element.js');
const {HTMLEmbedElement} = require('../html/embed-element.js');
const {HTMLHRElement} = require('../html/hr-element.js');
const {HTMLProgressElement} = require('../html/progress-element.js');
const {HTMLParagraphElement} = require('../html/paragraph-element.js');
const {HTMLTableElement} = require('../html/table-element.js');
const {HTMLFrameSetElement} = require('../html/frame-set-element.js');
const {HTMLLIElement} = require('../html/li-element.js');
const {HTMLBaseElement} = require('../html/base-element.js');
const {HTMLDataListElement} = require('../html/data-list-element.js');
const {HTMLInputElement} = require('../html/input-element.js');
const {HTMLParamElement} = require('../html/param-element.js');
const {HTMLMediaElement} = require('../html/media-element.js');
const {HTMLAudioElement} = require('../html/audio-element.js');
const {HTMLHeadingElement} = require('../html/heading-element.js');
const {HTMLDirectoryElement} = require('../html/directory-element.js');
const {HTMLQuoteElement} = require('../html/quote-element.js');
const {HTMLCanvasElement} = require('../html/canvas-element.js');
const {HTMLLegendElement} = require('../html/legend-element.js');
const {HTMLOptionElement} = require('../html/option-element.js');
const {HTMLSpanElement} = require('../html/span-element.js');
const {HTMLMeterElement} = require('../html/meter-element.js');
const {HTMLVideoElement} = require('../html/video-element.js');
const {HTMLTableCellElement} = require('../html/table-cell-element.js');
const {HTMLTitleElement} = require('../html/title-element.js');
const {HTMLOutputElement} = require('../html/output-element.js');
const {HTMLTableRowElement} = require('../html/table-row-element.js');
const {HTMLDataElement} = require('../html/data-element.js');
const {HTMLMenuElement} = require('../html/menu-element.js');
const {HTMLSelectElement} = require('../html/select-element.js');
const {HTMLBRElement} = require('../html/br-element.js');
const {HTMLButtonElement} = require('../html/button-element.js');
const {HTMLMapElement} = require('../html/map-element.js');
const {HTMLOptGroupElement} = require('../html/opt-group-element.js');
const {HTMLDListElement} = require('../html/d-list-element.js');
const {HTMLTextAreaElement} = require('../html/text-area-element.js');
const {HTMLFontElement} = require('../html/font-element.js');
const {HTMLDivElement} = require('../html/div-element.js');
const {HTMLLinkElement} = require('../html/link-element.js');
const {HTMLSlotElement} = require('../html/slot-element.js');
const {HTMLFormElement} = require('../html/form-element.js');
const {HTMLImageElement} = require('../html/image-element.js');
const {HTMLPreElement} = require('../html/pre-element.js');
const {HTMLUListElement} = require('../html/u-list-element.js');
const {HTMLMetaElement} = require('../html/meta-element.js');
const {HTMLPictureElement} = require('../html/picture-element.js');
const {HTMLAreaElement} = require('../html/area-element.js');
const {HTMLOListElement} = require('../html/o-list-element.js');
const {HTMLTableCaptionElement} = require('../html/table-caption-element.js');
const {HTMLAnchorElement} = require('../html/anchor-element.js');
const {HTMLLabelElement} = require('../html/label-element.js');
const {HTMLUnknownElement} = require('../html/unknown-element.js');
const {HTMLModElement} = require('../html/mod-element.js');
const {HTMLDetailsElement} = require('../html/details-element.js');
const {HTMLSourceElement} = require('../html/source-element.js');
const {HTMLTrackElement} = require('../html/track-element.js');
const {HTMLMarqueeElement} = require('../html/marquee-element.js');

exports.HTMLElement = HTMLElement;
exports.HTMLTemplateElement = HTMLTemplateElement;
exports.HTMLHtmlElement = HTMLHtmlElement;
exports.HTMLScriptElement = HTMLScriptElement;
exports.HTMLFrameElement = HTMLFrameElement;
exports.HTMLIFrameElement = HTMLIFrameElement;
exports.HTMLObjectElement = HTMLObjectElement;
exports.HTMLHeadElement = HTMLHeadElement;
exports.HTMLBodyElement = HTMLBodyElement;
exports.HTMLStyleElement = HTMLStyleElement;
exports.HTMLTimeElement = HTMLTimeElement;
exports.HTMLFieldSetElement = HTMLFieldSetElement;
exports.HTMLEmbedElement = HTMLEmbedElement;
exports.HTMLHRElement = HTMLHRElement;
exports.HTMLProgressElement = HTMLProgressElement;
exports.HTMLParagraphElement = HTMLParagraphElement;
exports.HTMLTableElement = HTMLTableElement;
exports.HTMLFrameSetElement = HTMLFrameSetElement;
exports.HTMLLIElement = HTMLLIElement;
exports.HTMLBaseElement = HTMLBaseElement;
exports.HTMLDataListElement = HTMLDataListElement;
exports.HTMLInputElement = HTMLInputElement;
exports.HTMLParamElement = HTMLParamElement;
exports.HTMLMediaElement = HTMLMediaElement;
exports.HTMLAudioElement = HTMLAudioElement;
exports.HTMLHeadingElement = HTMLHeadingElement;
exports.HTMLDirectoryElement = HTMLDirectoryElement;
exports.HTMLQuoteElement = HTMLQuoteElement;
exports.HTMLCanvasElement = HTMLCanvasElement;
exports.HTMLLegendElement = HTMLLegendElement;
exports.HTMLOptionElement = HTMLOptionElement;
exports.HTMLSpanElement = HTMLSpanElement;
exports.HTMLMeterElement = HTMLMeterElement;
exports.HTMLVideoElement = HTMLVideoElement;
exports.HTMLTableCellElement = HTMLTableCellElement;
exports.HTMLTitleElement = HTMLTitleElement;
exports.HTMLOutputElement = HTMLOutputElement;
exports.HTMLTableRowElement = HTMLTableRowElement;
exports.HTMLDataElement = HTMLDataElement;
exports.HTMLMenuElement = HTMLMenuElement;
exports.HTMLSelectElement = HTMLSelectElement;
exports.HTMLBRElement = HTMLBRElement;
exports.HTMLButtonElement = HTMLButtonElement;
exports.HTMLMapElement = HTMLMapElement;
exports.HTMLOptGroupElement = HTMLOptGroupElement;
exports.HTMLDListElement = HTMLDListElement;
exports.HTMLTextAreaElement = HTMLTextAreaElement;
exports.HTMLFontElement = HTMLFontElement;
exports.HTMLDivElement = HTMLDivElement;
exports.HTMLLinkElement = HTMLLinkElement;
exports.HTMLSlotElement = HTMLSlotElement;
exports.HTMLFormElement = HTMLFormElement;
exports.HTMLImageElement = HTMLImageElement;
exports.HTMLPreElement = HTMLPreElement;
exports.HTMLUListElement = HTMLUListElement;
exports.HTMLMetaElement = HTMLMetaElement;
exports.HTMLPictureElement = HTMLPictureElement;
exports.HTMLAreaElement = HTMLAreaElement;
exports.HTMLOListElement = HTMLOListElement;
exports.HTMLTableCaptionElement = HTMLTableCaptionElement;
exports.HTMLAnchorElement = HTMLAnchorElement;
exports.HTMLLabelElement = HTMLLabelElement;
exports.HTMLUnknownElement = HTMLUnknownElement;
exports.HTMLModElement = HTMLModElement;
exports.HTMLDetailsElement = HTMLDetailsElement;
exports.HTMLSourceElement = HTMLSourceElement;
exports.HTMLTrackElement = HTMLTrackElement;
exports.HTMLMarqueeElement = HTMLMarqueeElement;

const HTMLClasses = {
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
};
exports.HTMLClasses = HTMLClasses;
