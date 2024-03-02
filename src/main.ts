import { HtmlRootElement } from "./HtmlRootElement";
import './styles.css'

class Main {

    constructor() {
        this.init();
    }

    private init() {

        // Deve verificar se já existe o elemento na tela, caso contrário, cria.
        try {
            const element: HtmlRootElement = document.querySelector('.vokz-feedback');
            if(!element) {
                const element: HtmlRootElement = this.createRootElement();
                this.configureRootElement(element);
                this.attachRootElementInDom(element);
            }
        } catch (error) {
            throw error;
        }

    }

    private createRootElement() {
        try {
            const element: HtmlRootElement = document.createElement('div');
            element.innerText = 'V';
            element.addEventListener('click', (e: MouseEvent) => this.rootClickEventHandler(e));
            element.classList.add('vokz-feedback');
            return element;
        } catch(error) {
            throw error;
        }
    }

    private configureRootElement(element: HtmlRootElement) {
        element.classList.add('vokz-feedback-style');
    }

    private attachRootElementInDom(element: HtmlRootElement) {
        document.querySelector('body').appendChild(element);
    }
    
    private rootClickEventHandler(event: MouseEvent) {
        console.log('ESTÁ DISPARANDO O EVENTO DO SITE COM URL: ', window.location);
        console.log('EVENTO DISPARADO ', event);
    }

}

new Main();