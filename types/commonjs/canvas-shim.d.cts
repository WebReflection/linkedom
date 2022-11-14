declare class Canvas {
    constructor(width: any, height: any);
    width: any;
    height: any;
    getContext(): any;
    toDataURL(): string;
}
export function createCanvas(width: any, height: any): Canvas;
export {};
