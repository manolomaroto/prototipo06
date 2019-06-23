import { Injectable } from '@angular/core';

@Injectable()
export class LocalizacionService {

    private localizaciones: any[] = [{
        title: 'Miraflores',
        despachoDesc: `La consulta de Miraflores de la Sierra se consolida como la principal, siendo la primera que se fundó y la que
        nos da nuestro nombre Psicología Miraflores.`,
        fotos : '../assets/img/despacho1.jpg',
        ubicacion: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.784799633214!2d-3.767678048701841!3d40.810722539404914!
        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4162223bdb92ed%3A0xe31c333fa19ecf90!2sTraves%C3%ADa+de+la+Luz%2C+5%2C+28792+
        Miraflores+de+la+Sierra%2C+Madrid!5e0!3m2!1ses!2ses!4v1512764117567`,
        ubicacionDesc: `Situados en un enclave único en la Sierra de Guadarrama atendemos a la población local y a vecinos/as de los
        municipios aledaños: Guadalix de la Sierra, Soto del Real, Manzanares el Real, Torrelaguna, Torremocha del Jarama…etc.`,
        terapiaDesc: `Atendemos terapia individual para adultos, adolescentes y terapia de pareja.
        La terapia infantil en la actualidad se realiza en la consulta de Miraflores de la Sierra, dada sus
        características especiales y los materiales terapéuticos específicos necesarios para su desarrollo.`
    }, {
        title: 'Madrid',
        despachoDesc: `La consulta de Madrid-Goya nos permite recibir a los pacientes que residen en diferentes zonas de la capital.`,
        fotos : '../assets/img/despachoGoya.jpg',
        ubicacion: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.958101954402!2d-3.678575353117273!3d40.424740419117306!
        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228bca1c2b39d%3A0x8b4ead1e5f6aeff1!2sCalle+de+Goya%2C+83%2C+28001+Madrid!
        5e0!3m2!1ses!2ses!4v1512760931794`,
        ubicacionDesc: `Gracias a su magnífica ubicación en la Calle Goya, en el corazón del Barrio de Salamanca,
        es muy sencillo su acceso desde diferentes puntos de la ciudad a través
        de metro (estación metro Goya, líneas 2 y 4), múltiples autobuses, taxis y parkings en las inmediaciones.`,
        terapiaDesc: `Atendemos terapia individual para adultos, adolescentes y terapia de pareja.
        La terapia infantil en la actualidad se realiza en la consulta de Miraflores de la Sierra, dada sus
        características especiales y los materiales terapéuticos específicos necesarios para su desarrollo.`
    }, {
        title: 'Colmenar',
        despachoDesc: `La consulta de Colmenar Viejo surge como extensión a la consulta principal de Miraflores de la Sierra,
        para acercar nuestro trabajo y facilitar el acceso a las personas residentes en la sierra norte de Madrid.`,
        fotos : '../assets/img/image1.JPG',
        ubicacion: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.714094599326!2d-3.767839348705048!3d40.65823234873825!
        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd417dde43166bc3%3A0x206837fad5a1b4a!2sCalle+del+Pilar%2C+7%2C+28770+Colmenar+
        Viejo%2C+Madrid!5e0!3m2!1ses!2ses!4v1512763327396`,
        ubicacionDesc: `Ubicada en la C/ del Pilar, 7,  cerca de la Plaza del Pueblo y la Basílica de Nuestra Señora de la Asunción,
        con parking público en las inmediaciones y autobuses que comunican con otros municipios de la sierra: Manzanares del Real,
        Soto del Real, Tres Cantos, etc.`,
        terapiaDesc: `Atendemos terapia individual para adultos, adolescentes y terapia de pareja.
        La terapia infantil en la actualidad se realiza en la consulta de Miraflores de la Sierra,
        dada sus características especiales y los materiales terapéuticos específicos necesarios para su desarrollo.`
    }];

    constructor() {}

    getLocalizacion( idx: string) {
        return this.localizaciones[idx];
    }
}
