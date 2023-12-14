export const emptyAttributes: Set<string>;
export function setAttribute(element: any, attribute: any): void;
export function removeAttribute(element: any, attribute: any): void;
export namespace booleanAttribute {
    function get(element: any, name: any): any;
    function set(element: any, name: any, value: any): void;
}
export namespace numericAttribute {
    function get(element: any, name: any): number;
    function set(element: any, name: any, value: any): void;
}
export namespace stringAttribute {
    function get(element: any, name: any): any;
    function set(element: any, name: any, value: any): void;
}
