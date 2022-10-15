export class HTMLSelectElement extends HTMLElement {
    get options(): NodeList;
    set disabled(arg: any);
    get disabled(): any;
    set name(arg: any);
    get name(): any;
}
import { HTMLElement } from "./element.js";
import { NodeList } from "../interface/node-list.js";
