/**
 * @implements globalThis.TreeWalker
 */
export class TreeWalker implements globalThis.TreeWalker {
    constructor(root: any, whatToShow?: number);
    root: any;
    currentNode: any;
    whatToShow: number;
    nextNode(): any;
    [PRIVATE]: {
        i: number;
        nodes: any[];
    };
}
import { PRIVATE } from "../shared/symbols.js";
