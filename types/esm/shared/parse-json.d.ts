export function parseJSON(value: string | jsdonValue[]): HTMLDocument;
export function toJSON(node: Document | Element): jsdonValue[];
/**
 * - either a node type or its content
 */
export type jsdonValue = number | string;
import { HTMLDocument } from '../html/document.js';
