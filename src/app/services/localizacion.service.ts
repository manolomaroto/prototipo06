import { Injectable } from '@angular/core';

@Injectable()
export class LocalizacionService {

    private localizaciones: any[] = [{
        title: 'Miraflores'
    }, {
        title: 'Madrid'
    }, {
        title: 'Colmenar'
    }];

    constructor() {}

    getLocalizacion( idx: string) {
        return this.localizaciones[idx];
    }
}