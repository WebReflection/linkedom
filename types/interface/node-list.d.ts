/**
 * @implements globalThis.NodeList
 */
export class NodeList extends Array<any> implements globalThis.NodeList {
    constructor(arrayLength?: number);
    constructor(arrayLength: number);
    constructor(...items: any[]);
    item(i: any): any;
}
