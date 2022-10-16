export class NonElementParentNode extends ParentNode {
    getElementById(id: any): import("./parent-node.js").NodeStruct;
    cloneNode(deep: any): any;
    toJSON(): any[];
}
import { ParentNode } from "./parent-node.js";
