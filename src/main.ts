
import './styles/main.css';

class Main {

    constructor() {
        this.init();
    }

    private init() {

        try {
            
            const button: HTMLButtonElement = document.querySelector('[data-vokz]');
            if(!button) {
                console.log('[Vokz Feedback]: Você não configurou corretamente o projeto para trabalhar com o Vokz Feedback');
                return;
            }

            let iframe: HTMLIFrameElement = document.querySelector('.vokz-iframe');
                
            if(!iframe) {
                iframe = document.createElement('iframe');
                // Passar o site com o iframe.
                iframe.src = 'https://vekro.github.io/Widget/';
                iframe.classList.add('vokz-iframe');
                document.body.appendChild(iframe);
            }

            if(iframe) {
                const buttonClose = iframe.querySelector('.button-close');
                console.log('button close: ', buttonClose);
            }

            this.configure(button, iframe);

        } catch (error) {
            throw error;
        }

    }

    public configure(button: HTMLButtonElement, iframe: HTMLIFrameElement) {

        console.log('BUTTON: ', button);
        console.log('IFRAME: ', iframe);

        const buttonRect = button.getBoundingClientRect();
        const iframeRect = iframe.getBoundingClientRect();

        // Espaço entre o botão e o iframe
        var gap = 30; // 5 pixels de espaço

        // Verifica a posição horizontal
        if (buttonRect.left + iframeRect.width + gap > window.innerWidth) {
            iframe.style.left = (window.innerWidth - iframeRect.width - gap) + 'px';
        } else {
            iframe.style.left = (buttonRect.left + gap) + 'px';
        }

        // Verifica a posição vertical
        if (buttonRect.top + buttonRect.height + iframeRect.height + gap > window.innerHeight) {
            iframe.style.top = (window.innerHeight - iframeRect.height - gap) + 'px';
        } else {
            iframe.style.top = (buttonRect.top + buttonRect.height + gap) + 'px';
        }

        
        button.addEventListener('click', (event) => this.buttonClick(event, button, iframe));

    }

    private buttonClick(event: MouseEvent, button: HTMLButtonElement, iframe: HTMLIFrameElement) {

        console.log('DEU UM CLICK NO FEEDBACK BUTTON DO VOKZ :', event);
        if(!iframe) {
            console.log('[Vokz Feedback] - O iframe não foi encontrado!');
            return;
        }

        iframe.classList.toggle('hidden');

    }


}

new Main();