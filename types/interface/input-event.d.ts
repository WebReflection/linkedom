/**
 * @implements globalThis.InputEvent
 */
export class InputEvent implements globalThis.InputEvent {
    constructor(type: any, inputEventInit?: {});
    inputType: any;
    data: any;
    dataTransfer: any;
    isComposing: any;
    ranges: any;
}
