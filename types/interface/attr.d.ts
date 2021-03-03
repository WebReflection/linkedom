/**
 * @implements globalThis.Attr
 */
export class Attr extends Node implements globalThis.Attr {
    constructor(ownerDocument: any, name: any, value?: string);
    ownerElement: any;
    name: string;
    set value(arg: any);
    get value(): any;
    toJSON(): any[];
    [VALUE]: any;
    [CHANGED]: boolean;
}
import { Node } from "./node.js";
import { VALUE } from "../shared/symbols.js";
import { CHANGED } from "../shared/symbols.js";
