/**
 * @implements globalThis.Text
 */
export class Text extends CharacterData implements globalThis.Text {
    constructor(ownerDocument: any, data?: string);
    get wholeText(): string;
}
import { CharacterData } from "./character-data.js";
