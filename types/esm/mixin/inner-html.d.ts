/**
 * @param {Node} node - Node to be serialized to HTML, potentially including shadow roots
 * @param {Object} opts - Options
 * @param {Object} opts.includeShadowRoots - Whether to include shadow roots in the output
 * @param {Object} opts.closedRoots - A list of closed shadow roots to include in the output
 * @returns {String} string of HTML representing the node and its descendants
 */
export function getInnerHTML(node: Node, opts: {
    includeShadowRoots: any;
    closedRoots: any;
}): string;
export function getInnerHtml(node: Node): string;
export function setInnerHtml(node: Node, html: string): void;
