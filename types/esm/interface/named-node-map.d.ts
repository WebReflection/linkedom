/**
 * @implements globalThis.NamedNodeMap
 */
export class NamedNodeMap extends Array<any> implements globalThis.NamedNodeMap {
    constructor(ownerElement: any);
    ownerElement: any;
    getNamedItem(name: any): any;
    setNamedItem(attr: any): void;
    removeNamedItem(name: any): void;
    item(index: any): any;
    getNamedItemNS(_: any, name: any): any;
    setNamedItemNS(_: any, attr: any): void;
    removeNamedItemNS(_: any, name: any): void;
}
