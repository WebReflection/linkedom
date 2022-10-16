export class CharacterData extends Node {
    constructor(ownerDocument: any, localName: any, nodeType: any, data: any);
    before(...nodes: any[]): void;
    after(...nodes: any[]): void;
    replaceWith(...nodes: any[]): void;
    remove(): void;
    set data(arg: string);
    get data(): string;
    set nodeValue(arg: string);
    get nodeValue(): string;
    set textContent(arg: string);
    get textContent(): string;
    get length(): number;
    substringData(offset: any, count: any): string;
    appendData(data: any): void;
    insertData(offset: any, data: any): void;
    deleteData(offset: any, count: any): void;
    replaceData(offset: any, count: any, data: any): void;
    toJSON(): any[];
    [VALUE]: string;
}
import { Node } from "./node.js";
import { VALUE } from "../shared/symbols.js";
