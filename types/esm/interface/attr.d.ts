/**
 * @implements globalThis.Attr
 */
export class Attr extends Node implements globalThis.Attr {
    constructor(ownerDocument: any, name: any, value?: string);
    ownerElement: any;
    name: string;
    set value(arg: string);
    get value(): string;
    toJSON(): any[];
    [VALUE]: string;
    [CHANGED]: boolean;
}
import { Node } from "./node.js";
import { VALUE } from "../shared/symbols.js";
import { CHANGED } from "../shared/symbols.js";
