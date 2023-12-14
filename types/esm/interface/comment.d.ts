/**
 * @implements globalThis.Comment
 */
export class Comment extends CharacterData implements globalThis.Comment {
    constructor(ownerDocument: any, data?: string);
    cloneNode(): Comment;
}
import { CharacterData } from './character-data.js';
