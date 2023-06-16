import {DivElement, H1Element, HtmlElementBuilder, HTMLElement, SpanElement} from './builder.ts';


export function playBuilder(): void  {
    const header: HTMLElement = HtmlElementBuilder
        .createHtmlDom(DivElement, 'position: fixed; top: 0, widht: 100vw')
        .appendNode(H1Element, 'My App')
        .createRoot();

    const footer: HTMLElement = HtmlElementBuilder
        .createHtmlDom(DivElement, 'position: fixed; bottom: 0, widht: 100vw')
        .createRoot();

    const root: HTMLElement = HtmlElementBuilder
        .createHtmlDom(DivElement)
        .insertNode(header, footer)
        .appendNode(SpanElement)
        .createRoot();

    console.log(root.printNodes());
}
