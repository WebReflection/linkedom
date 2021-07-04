import {parseHTML} from '../es.js';
import createAssert from './assert-es.js';

const assert = createAssert.for('Web Worker');

let {document} = parseHTML('<div><svg><rect /></svg></div>');

assert(document.querySelector('div').firstChild.localName, 'svg', 'Should be an svg element in the div');