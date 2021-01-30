'use strict';
const {booleanAttribute, numericAttribute, stringAttribute} = require('../utils.js');
const {Element} = require('../element.js');
const {Classes, customElements} = require('../custom-element-registry.js');

const empty = [];

const Level0 = new WeakMap;
const level0 = {
  get(element, name) {
    return Level0.has(element) && Level0.get(element)[name] || null;
  },
  set(element, name, value) {
    if (!Level0.has(element))
      Level0.set(element, {});
    const handlers = Level0.get(element);
    const type = name.slice(2);
    if (handlers[name])
      element.removeEventListener(type, handlers[name], false);
    if (handlers[name] = value)
      element.addEventListener(type, value, false);
  }
};

/**
 * @implements globalThis.HTMLElement
 */
class HTMLElement extends Element {

  static get observedAttributes() { return empty; }

  constructor(ownerDocument = null, localName = '') {
    super(ownerDocument, localName);
    if (!ownerDocument) {
      const {constructor: Class, _end} = this;
      if (!Classes.has(Class))
        throw new Error('unable to initialize this Custom Element');
      const {ownerDocument, localName, options} = Classes.get(Class);
      this.ownerDocument = _end.ownerDocument = ownerDocument;
      this.localName = _end.localName = localName;
      customElements.set(this, {connected: false, setup: false});
      if (options.is)
        this.setAttribute('is', options.is);
    }
  }

  // Boolean Accessors
  get contentEditable() { return booleanAttribute.get(this, 'contentEditable'); }
  /* c8 ignore start */
  set contentEditable(value) { booleanAttribute.set(this, 'contentEditable', value); }
  get draggable() { return booleanAttribute.get(this, 'draggable'); }
  set draggable(value) { booleanAttribute.set(this, 'draggable', value); }
  get hidden() { return booleanAttribute.get(this, 'hidden'); }
  set hidden(value) { booleanAttribute.set(this, 'hidden', value); }
  get spellcheck() { return booleanAttribute.get(this, 'spellcheck'); }
  set spellcheck(value) { booleanAttribute.set(this, 'spellcheck', value); }
  /* c8 ignore stop */

  // Numeric Accessors
  get tabIndex() { return numericAttribute.get(this, 'tabIndex'); }
  set tabIndex(value) { numericAttribute.set(this, 'tabIndex', value); }

  // String Accessors
  get accessKey() { return stringAttribute.get(this, 'accessKey'); }
  /* c8 ignore start */
  set accessKey(value) { stringAttribute.set(this, 'accessKey', value); }
  get dir() { return stringAttribute.get(this, 'dir'); }
  set dir(value) { stringAttribute.set(this, 'dir', value); }
  get lang() { return stringAttribute.get(this, 'lang'); }
  set lang(value) { stringAttribute.set(this, 'lang', value); }
  get title() { return stringAttribute.get(this, 'title'); }
  set title(value) { stringAttribute.set(this, 'title', value); }
  /* c8 ignore stop */

  // DOM Level 0
  get onabort() { return level0.get(this, 'onabort'); }
  /* c8 ignore start */
  set onabort(value) { level0.set(this, 'onabort', value); }
  get onblur() { return level0.get(this, 'onblur'); }
  set onblur(value) { level0.set(this, 'onblur', value); }
  get oncancel() { return level0.get(this, 'oncancel'); }
  set oncancel(value) { level0.set(this, 'oncancel', value); }
  get oncanplay() { return level0.get(this, 'oncanplay'); }
  set oncanplay(value) { level0.set(this, 'oncanplay', value); }
  get oncanplaythrough() { return level0.get(this, 'oncanplaythrough'); }
  set oncanplaythrough(value) { level0.set(this, 'oncanplaythrough', value); }
  get onchange() { return level0.get(this, 'onchange'); }
  set onchange(value) { level0.set(this, 'onchange', value); }
  get onclick() { return level0.get(this, 'onclick'); }
  set onclick(value) { level0.set(this, 'onclick', value); }
  get onclose() { return level0.get(this, 'onclose'); }
  set onclose(value) { level0.set(this, 'onclose', value); }
  get oncontextmenu() { return level0.get(this, 'oncontextmenu'); }
  set oncontextmenu(value) { level0.set(this, 'oncontextmenu', value); }
  get oncuechange() { return level0.get(this, 'oncuechange'); }
  set oncuechange(value) { level0.set(this, 'oncuechange', value); }
  get ondblclick() { return level0.get(this, 'ondblclick'); }
  set ondblclick(value) { level0.set(this, 'ondblclick', value); }
  get ondrag() { return level0.get(this, 'ondrag'); }
  set ondrag(value) { level0.set(this, 'ondrag', value); }
  get ondragend() { return level0.get(this, 'ondragend'); }
  set ondragend(value) { level0.set(this, 'ondragend', value); }
  get ondragenter() { return level0.get(this, 'ondragenter'); }
  set ondragenter(value) { level0.set(this, 'ondragenter', value); }
  get ondragleave() { return level0.get(this, 'ondragleave'); }
  set ondragleave(value) { level0.set(this, 'ondragleave', value); }
  get ondragover() { return level0.get(this, 'ondragover'); }
  set ondragover(value) { level0.set(this, 'ondragover', value); }
  get ondragstart() { return level0.get(this, 'ondragstart'); }
  set ondragstart(value) { level0.set(this, 'ondragstart', value); }
  get ondrop() { return level0.get(this, 'ondrop'); }
  set ondrop(value) { level0.set(this, 'ondrop', value); }
  get ondurationchange() { return level0.get(this, 'ondurationchange'); }
  set ondurationchange(value) { level0.set(this, 'ondurationchange', value); }
  get onemptied() { return level0.get(this, 'onemptied'); }
  set onemptied(value) { level0.set(this, 'onemptied', value); }
  get onended() { return level0.get(this, 'onended'); }
  set onended(value) { level0.set(this, 'onended', value); }
  get onerror() { return level0.get(this, 'onerror'); }
  set onerror(value) { level0.set(this, 'onerror', value); }
  get onfocus() { return level0.get(this, 'onfocus'); }
  set onfocus(value) { level0.set(this, 'onfocus', value); }
  get oninput() { return level0.get(this, 'oninput'); }
  set oninput(value) { level0.set(this, 'oninput', value); }
  get oninvalid() { return level0.get(this, 'oninvalid'); }
  set oninvalid(value) { level0.set(this, 'oninvalid', value); }
  get onkeydown() { return level0.get(this, 'onkeydown'); }
  set onkeydown(value) { level0.set(this, 'onkeydown', value); }
  get onkeypress() { return level0.get(this, 'onkeypress'); }
  set onkeypress(value) { level0.set(this, 'onkeypress', value); }
  get onkeyup() { return level0.get(this, 'onkeyup'); }
  set onkeyup(value) { level0.set(this, 'onkeyup', value); }
  get onload() { return level0.get(this, 'onload'); }
  set onload(value) { level0.set(this, 'onload', value); }
  get onloadeddata() { return level0.get(this, 'onloadeddata'); }
  set onloadeddata(value) { level0.set(this, 'onloadeddata', value); }
  get onloadedmetadata() { return level0.get(this, 'onloadedmetadata'); }
  set onloadedmetadata(value) { level0.set(this, 'onloadedmetadata', value); }
  get onloadstart() { return level0.get(this, 'onloadstart'); }
  set onloadstart(value) { level0.set(this, 'onloadstart', value); }
  get onmousedown() { return level0.get(this, 'onmousedown'); }
  set onmousedown(value) { level0.set(this, 'onmousedown', value); }
  get ondurationchange() { return level0.get(this, 'ondurationchange'); }
  set onmouseenter(value) { level0.set(this, 'onmouseenter', value); }
  get onmouseenter() { return level0.get(this, 'onmouseenter'); }
  set onmouseleave(value) { level0.set(this, 'onmouseleave', value); }
  get onmouseleave() { return level0.get(this, 'onmouseleave'); }
  set onmousemove(value) { level0.set(this, 'onmousemove', value); }
  get onmousemove() { return level0.get(this, 'onmousemove'); }
  set onmouseout(value) { level0.set(this, 'onmouseout', value); }
  get onmouseout() { return level0.get(this, 'onmouseout'); }
  set onmouseover(value) { level0.set(this, 'onmouseover', value); }
  get onmouseover() { return level0.get(this, 'onmouseover'); }
  set onmouseup(value) { level0.set(this, 'onmouseup', value); }
  get onmouseup() { return level0.get(this, 'onmouseup'); }
  set onmousewheel(value) { level0.set(this, 'onmousewheel', value); }
  get onmousewheel() { return level0.get(this, 'onmousewheel'); }
  set onpause(value) { level0.set(this, 'onpause', value); }
  set onpause(value) { level0.set(this, 'onpause', value); }
  set onplay(value) { level0.set(this, 'onplay', value); }
  set onplay(value) { level0.set(this, 'onplay', value); }
  set onplaying(value) { level0.set(this, 'onplaying', value); }
  set onplaying(value) { level0.set(this, 'onplaying', value); }
  set onprogress(value) { level0.set(this, 'onprogress', value); }
  set onprogress(value) { level0.set(this, 'onprogress', value); }
  set onratechange(value) { level0.set(this, 'onratechange', value); }
  set onratechange(value) { level0.set(this, 'onratechange', value); }
  set onreset(value) { level0.set(this, 'onreset', value); }
  set onreset(value) { level0.set(this, 'onreset', value); }
  set onresize(value) { level0.set(this, 'onresize', value); }
  set onresize(value) { level0.set(this, 'onresize', value); }
  set onscroll(value) { level0.set(this, 'onscroll', value); }
  set onscroll(value) { level0.set(this, 'onscroll', value); }
  set onseeked(value) { level0.set(this, 'onseeked', value); }
  set onseeked(value) { level0.set(this, 'onseeked', value); }
  set onseeking(value) { level0.set(this, 'onseeking', value); }
  set onseeking(value) { level0.set(this, 'onseeking', value); }
  set onselect(value) { level0.set(this, 'onselect', value); }
  set onselect(value) { level0.set(this, 'onselect', value); }
  set onshow(value) { level0.set(this, 'onshow', value); }
  set onshow(value) { level0.set(this, 'onshow', value); }
  set onstalled(value) { level0.set(this, 'onstalled', value); }
  set onstalled(value) { level0.set(this, 'onstalled', value); }
  set onsubmit(value) { level0.set(this, 'onsubmit', value); }
  set onsubmit(value) { level0.set(this, 'onsubmit', value); }
  set onsuspend(value) { level0.set(this, 'onsuspend', value); }
  set onsuspend(value) { level0.set(this, 'onsuspend', value); }
  set ontimeupdate(value) { level0.set(this, 'ontimeupdate', value); }
  set ontimeupdate(value) { level0.set(this, 'ontimeupdate', value); }
  set ontoggle(value) { level0.set(this, 'ontoggle', value); }
  set ontoggle(value) { level0.set(this, 'ontoggle', value); }
  set onvolumechange(value) { level0.set(this, 'onvolumechange', value); }
  set onvolumechange(value) { level0.set(this, 'onvolumechange', value); }
  set onwaiting(value) { level0.set(this, 'onwaiting', value); }
  set onwaiting(value) { level0.set(this, 'onwaiting', value); }
  set onauxclick(value) { level0.set(this, 'onauxclick', value); }
  set onauxclick(value) { level0.set(this, 'onauxclick', value); }
  set ongotpointercapture(value) { level0.set(this, 'ongotpointercapture', value); }
  set ongotpointercapture(value) { level0.set(this, 'ongotpointercapture', value); }
  set onlostpointercapture(value) { level0.set(this, 'onlostpointercapture', value); }
  set onlostpointercapture(value) { level0.set(this, 'onlostpointercapture', value); }
  set onpointercancel(value) { level0.set(this, 'onpointercancel', value); }
  set onpointercancel(value) { level0.set(this, 'onpointercancel', value); }
  set onpointerdown(value) { level0.set(this, 'onpointerdown', value); }
  set onpointerdown(value) { level0.set(this, 'onpointerdown', value); }
  set onpointerenter(value) { level0.set(this, 'onpointerenter', value); }
  set onpointerenter(value) { level0.set(this, 'onpointerenter', value); }
  set onpointerleave(value) { level0.set(this, 'onpointerleave', value); }
  set onpointerleave(value) { level0.set(this, 'onpointerleave', value); }
  set onpointermove(value) { level0.set(this, 'onpointermove', value); }
  set onpointermove(value) { level0.set(this, 'onpointermove', value); }
  set onpointerout(value) { level0.set(this, 'onpointerout', value); }
  set onpointerout(value) { level0.set(this, 'onpointerout', value); }
  set onpointerover(value) { level0.set(this, 'onpointerover', value); }
  set onpointerover(value) { level0.set(this, 'onpointerover', value); }
  set onpointerup(value) { level0.set(this, 'onpointerup', value); }
  set onpointerup(value) { level0.set(this, 'onpointerup', value); }
  /* c8 ignore stop */

}
exports.HTMLElement = HTMLElement
