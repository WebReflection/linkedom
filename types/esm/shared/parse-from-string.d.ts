export function isNotParsing(): boolean;
export function parseFromString<DOC extends import("../html/document.js").HTMLDocument | import("../svg/document.js").SVGDocument | import("../xml/document.js").XMLDocument, INPUT extends string | NodeJS.ReadableStream>(document: DOC, isHTML: boolean, markupLanguage: INPUT): INPUT extends string ? DOC : Promise<INPUT>;
export type HTMLDocument = import('../html/document.js').HTMLDocument;
export type SVGDocument = import('../svg/document.js').SVGDocument;
export type XMLDocument = import('../xml/document.js').XMLDocument;
