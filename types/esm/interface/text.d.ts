export class Text extends CharacterData {
    constructor(ownerDocument: any, data?: string);
    get wholeText(): string;
    cloneNode(): Text;
}
import { CharacterData } from "./character-data.js";
