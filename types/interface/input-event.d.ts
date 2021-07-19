/**
 * @implements globalThis.InputEvent
 */
export class InputEvent extends Event implements globalThis.InputEvent {
    constructor(type: any, inputEventInit?: {});
    inputType: any;
    data: any;
    dataTransfer: any;
    isComposing: any;
    ranges: any;
}
import { Event } from "./event.js";
