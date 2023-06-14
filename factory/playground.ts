import { DivElement, HtmlElementBuilder, SpanElement, HTMLElement, H1Element } from './factory.ts';


export function playFactory(): void  {
    const header: HTMLElement = HtmlElementBuilder
        .createHtmlDom(DivElement, 'position: fixed; top: 0, widht: 100vw')
        .appendNode(H1Element, 'My App')
        .createRoot();
    
    const footer: HTMLElement = HtmlElementBuilder
        .createHtmlDom(DivElement, 'position: fixed; bottom: 0, widht: 100vw')
        .createRoot();
    
    // TODO now just add TSX and party right? :P
    const root: HTMLElement = HtmlElementBuilder
        .createHtmlDom(DivElement)
        .insertNode(header, footer)
        .appendNode(SpanElement)
        .createRoot();
    
    console.log(root.printNodes());
}
