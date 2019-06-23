import { Injectable } from '@angular/core';

@Injectable()
export class LocalizacionService {

    private localizaciones: any[] = [{
        title: 'Miraflores'
    }, {
        title: 'Madrid',
        descripcion: `Gracias a su magnífica ubicación en la Calle Goya, en el corazón del Barrio de Salamanca,
        es muy sencillo su acceso desde diferentes puntos de la ciudad a través de metro (estación metro Goya,
        líneas 2 y 4), múltiples autobuses, taxis y parkings en las inmediaciones.`,
        fotos : ['../../assets/img/bulling.jpg'],
    }, {
        title: 'Colmenar'
    }];

    constructor() {}

    getLocalizacion( idx: string) {
        return this.localizaciones[idx];
    }
}