/**
 * @implements globalThis.CDATASection
 */
export class CDATASection extends CharacterData implements globalThis.CDATASection {
    constructor(ownerDocument: any, data?: string);
    cloneNode(): CDATASection;
}
import { CharacterData } from './character-data.js';
