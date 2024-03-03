import { FileService } from "./FileService";

export class DomService {

    private fileService: FileService = new FileService();

    constructor() {}

    public addCssFileHeader(fileName: string) {
        const url: string = this.fileService.getUrl(fileName);
        const element: HTMLLinkElement = document.createElement('link');
        element.href = url;
        element.type = 'stylesheet';
        document.head.appendChild(element);
    }

    public appendChild(element: HTMLElement) {
        document.body.appendChild(element);
    }


}