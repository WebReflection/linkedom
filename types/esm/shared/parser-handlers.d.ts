export function append(self: any, node: any, active: any): any;
export function attribute(element: any, end: any, attribute: any, value: any, active: any): void;
export function onprocessinginstruction(name: string, data: string): string;
export function onopentag<StackItem extends {
    document: MimeToDoc[keyof MimeToDoc];
    node: MimeToDoc[keyof MimeToDoc] | Node;
    ownerSVGElement: SVGElement | undefined;
    rootNode: Node | undefined;
}>(name: string, attributes: Record<string, string>, item: StackItem, isHTML: boolean): void;
export function oncomment<StackItem extends {
    document: MimeToDoc[keyof MimeToDoc];
    node: MimeToDoc[keyof MimeToDoc] | Node;
    ownerSVGElement: SVGElement | undefined;
    rootNode: Node | undefined;
}>(data: string, item: StackItem): void;
export function ontext<StackItem extends {
    document: MimeToDoc[keyof MimeToDoc];
    node: MimeToDoc[keyof MimeToDoc] | Node;
    ownerSVGElement: SVGElement | undefined;
    rootNode: Node | undefined;
}>(text: any, item: StackItem): void;
export function onclosetag<StackItem extends {
    document: MimeToDoc[keyof MimeToDoc];
    node: MimeToDoc[keyof MimeToDoc] | Node;
    ownerSVGElement: SVGElement | undefined;
    rootNode: Node | undefined;
}>(item: StackItem, isHTML: boolean, cb: (document: MimeToDoc[keyof MimeToDoc]) => void): void;
export type Node = import('../interface/node').Node;
export type SVGElement = import('../svg/element').SVGElement;
export type HTMLDocument = import('../html/document.js').HTMLDocument;
export type SVGDocument = import('../svg/document').SVGDocument;
export type XMLDocument = import('../xml/document').XMLDocument;
export type MimeToDoc = {
    "text/html": HTMLDocument;
    "image/svg+xml": SVGDocument;
    "text/xml": XMLDocument;
};
