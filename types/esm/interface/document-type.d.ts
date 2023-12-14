/**
 * @implements globalThis.DocumentType
 */
export class DocumentType extends Node implements globalThis.DocumentType {
    constructor(ownerDocument: any, name: any, publicId?: string, systemId?: string);
    name: any;
    publicId: string;
    systemId: string;
    cloneNode(): DocumentType;
    toJSON(): any[];
}
import { Node } from './node.js';
