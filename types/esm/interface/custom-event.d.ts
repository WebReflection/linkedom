/**
 * @implements globalThis.CustomEvent
 */
export class CustomEvent extends Event implements globalThis.CustomEvent {
    detail: any;
}
import { Event } from './event.js';
