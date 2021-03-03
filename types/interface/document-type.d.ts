/**
 * @implements globalThis.DocumentType
 */
export class DocumentType extends Node implements globalThis.DocumentType {
    constructor(ownerDocument: any, name: any);
    name: any;
    toJSON(): any[];
}
import { Node } from "./node.js";
