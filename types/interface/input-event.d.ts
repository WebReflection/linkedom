/**
 * @implements globalThis.InputEvent
 */
export class InputEvent extends Event implements globalThis.InputEvent {
    inputType: any;
    data: any;
    dataTransfer: any;
    isComposing: any;
    ranges: any;
}
import { Event } from "./event.js";
