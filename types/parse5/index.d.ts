// Type definitions for parse5 6.0
// Project: https://github.com/inikulin/parse5
// Definitions by: Ivan Nikulin <https://github.com/inikulin>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type DocumentMode = "no-quirks" | "quirks" | "limited-quirks";

interface Location {
    endCol: number;
    endOffset: number;
    endLine: number;
    startCol: number;
    startOffset: number;
    startLine: number;
}

interface ElementLocation extends Location {
    attrs: { [attributeName: string]: Location };
    endTag: Location;
    startTag: StartTagLocation;
}

interface StartTagLocation extends Location {
    attrs: { [attributeName: string]: Location };
}

interface EndLocation {
    endCol: number;
    endOffset: number;
    endLine: number;
    endTag: Location;
}

interface TreeAdapter {
    adoptAttributes(recipient: Element, attrs: Attribute[]): void;
    appendChild(parentNode: Node, newNode: Node): void;
    createCommentNode(data: string): CommentNode;
    createDocument(): Document;
    createDocumentFragment(): DocumentFragment;
    createElement(tagName: string, namespaceURI: string, attrs: Attribute[]): Element;
    detachNode(node: Node): void;
    getAttrList(element: Element): Attribute[];
    getChildNodes(node: Node): Node[];
    getCommentNodeContent(commentNode: CommentNode): string;
    getDocumentMode(document: Document): DocumentMode;
    getDocumentTypeNodeName(doctypeNode: DocumentType): string;
    getDocumentTypeNodePublicId(doctypeNode: DocumentType): string;
    getDocumentTypeNodeSystemId(doctypeNode: DocumentType): string;
    getFirstChild(node: Node): Node
    getNamespaceURI(element: Element): string
    getNodeSourceCodeLocation(node: Node): Location | ElementLocation
    getParentNode(node: Node): ParentNode
    getTagName(element: Element): string
    getTemplateContent(templateElement: Element): DocumentFragment
    getTextNodeContent(textNode: TextNode): string
    insertBefore(parentNode: Node, newNode: Node, referenceNode: Node): void
    insertText(parentNode: Node, text: string): void
    insertTextBefore(parentNode: Node, text: string, referenceNode: Node): void
    isCommentNode(node: Node): boolean
    isDocumentTypeNode(node: Node): boolean
    isElementNode(node: Node): boolean
    isTextNode(node: Node): boolean
    setDocumentMode(document: Document, mode: DocumentMode): void
    setDocumentType(document: Document, name: string, publicId: string, systemId: string): void
    setNodeSourceCodeLocation(node: Node, location: Location | ElementLocation): void
    setTemplateContent(templateElement: Element, contentElement: DocumentFragment): void
    updateNodeSourceCodeLocation(node: Node, endLocation: EndLocation): void
}

export interface ParserOptions {
    sourceCodeLocationInfo?: boolean;
    scriptingEnabled?: boolean;
    treeAdapter?: TreeAdapter;
}

export function parse(html: string, options?: ParserOptions): Document;

export function parseFragment(html: string, options?: ParserOptions): DocumentFragment;
export function parseFragment(fragmentContext: Element, html: string, options?: ParserOptions): DocumentFragment;

interface SerializerOptions {
    treeAdapter?: TreeAdapter;
}

export function serialize(node: Node, options?: SerializerOptions): string;
