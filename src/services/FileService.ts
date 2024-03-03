export class FileService {

    constructor() {}

    public getUrl(fileName: string): string {
        return 'https://vekro.github.io/ArquivoEstatico/dist/' + fileName;
    }

}