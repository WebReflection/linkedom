/**
 * @implements globalThis.CharacterData
 */
export class CharacterData extends Node implements globalThis.CharacterData {
    constructor(ownerDocument: any, localName: any, nodeType: any, data: any);
    before(...nodes: any[]): void;
    after(...nodes: any[]): void;
    replaceWith(...nodes: any[]): void;
    remove(): void;
    set data(arg: any);
    get data(): any;
    get length(): any;
    substringData(offset: any, count: any): any;
    appendData(data: any): void;
    insertData(offset: any, data: any): void;
    deleteData(offset: any, count: any): void;
    replaceData(offset: any, count: any, data: any): void;
    toJSON(): any[];
    [VALUE]: any;
}
import { Node } from "./node.js";
import { VALUE } from "../shared/symbols.js";
