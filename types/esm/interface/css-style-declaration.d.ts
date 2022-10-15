export class CSSStyleDeclaration extends Map<any, any> {
    constructor(element: any);
    set cssText(arg: string);
    get cssText(): string;
    getPropertyValue(name: any): any;
    setProperty(name: any, value: any): void;
    removeProperty(name: any): void;
    get [PRIVATE](): CSSStyleDeclaration;
}
import { PRIVATE } from "../shared/symbols.js";
