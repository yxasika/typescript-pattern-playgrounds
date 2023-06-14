
export abstract class HTMLElement {
    protected abstract selector: string;
    
    private readonly nodeList: HTMLElement[] = [];
    
    printNodes(): string {
        return `${this.selector}: [${this.getNodes().map(n => n.printNodes()).join(', ')}]`;
    }
    
    public addNode(...htmlElementNode: HTMLElement[]): void {
        this.nodeList.push(...htmlElementNode);
    }
    
    public getNodes(): HTMLElement[] {
        return this.nodeList;
    }
}

export class DivElement extends HTMLElement {
    protected selector = 'div';
    
    // Unused style-property as an example for extensions of factory-functions.
    constructor(private readonly styles?: string) {
        super();
    }
}

export class SpanElement extends HTMLElement {
    protected selector = 'span';
}

export class H1Element extends HTMLElement {
    protected selector = 'h1';
    constructor(private readonly innerText?: string) {
        super();
    }
}

export class H2Element extends HTMLElement {
    protected selector = 'h2';
    constructor(private readonly innerText?: string) {
        super();
    }
}


/**
 * Html-Element builder for easy to use creations.
 */
export class HtmlElementBuilder {
    private tail;
    
    constructor(private readonly rootElement: HTMLElement) {
        this.tail = this.rootElement;
    }
    
    createRoot(): HTMLElement {
        return this.rootElement;
    }
    
    appendNode<T extends { new (...args: ConstructorParameters<T>): HTMLElement }>(type: T, ...params: ConstructorParameters<T>): HtmlElementBuilder {
        const leaf = HtmlElementBuilder.createHtmlElement(type, ...params);
        this.tail.addNode(leaf);
        this.tail = leaf;
        return this;
    }
    
    insertNode(...elements: HTMLElement): HtmlElementBuilder {
        this.tail.addNode(...elements);
        return this;
    }
    
    static createHtmlDom<T extends { new (...args: ConstructorParameters<T>): HTMLElement }>(type: T, ...params: ConstructorParameters<T>): HtmlElementBuilder {
        const rootNode = HtmlElementBuilder.createHtmlElement(type, ...params);
        return new HtmlElementBuilder(rootNode);
    }
    
    private static createHtmlElement<T extends { new (...args: ConstructorParameters<T>): HTMLElement }>(type: T, ...params: ConstructorParameters<T>): HTMLElement {
        return new type(...params);
    }
}

