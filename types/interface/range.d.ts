/**
 * @implements globalThis.Range
 */
export class Range implements globalThis.Range {
    commonAncestorContainer: any;
    insertNode(newNode: any): void;
    selectNode(node: any): void;
    surroundContents(parentNode: any): void;
    setStartBefore(node: any): void;
    setStartAfter(node: any): void;
    setEndBefore(node: any): void;
    setEndAfter(node: any): void;
    cloneContents(): any;
    deleteContents(): void;
    extractContents(): any;
    createContextualFragment(html: any): any;
    cloneRange(): Range;
    [START]: any;
    [END]: any;
}
import { START } from "../shared/symbols.js";
import { END } from "../shared/symbols.js";
