export class DocumentType extends Node {
    constructor(ownerDocument: any, name: any, publicId?: string, systemId?: string);
    name: any;
    publicId: string;
    systemId: string;
    toJSON(): any[];
}
import { Node } from "./node.js";
