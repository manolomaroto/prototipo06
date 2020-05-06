import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ReviewModel } from '../models/review.model';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class ReviewsService {
    private iDMiraflores = 'ChIJj0mYOyJiQQ0RdGZeJTtnrm8';
    private iDSoto = 'ChIJox1I3GNjQQ0Ra_oTnbhbauc';
    private iDColmenar = 'ChIJm8P7Qt59QQ0RqwrUSpJVXek';
    private url = 'https://maps.googleapis.com/maps/api/place/details/json';

    private doctoraliaReviews: ReviewModel[] = [{
        author_name: 'María Victoria',
        author_url: '',
        language: '',
        profile_photo_url: '../../../assets/img/user.png',
        rating: 0,
        relative_time_description: '',
        text: `Excelente trato. La doctora es muy empática, de intelecto rápido y amable. Realmente se notan su dedicación
         y buen hacer. Estoy muy contenta de haberla encontrado.`,
         time: 1587074400000,
         localization: 'Online'
    }, {
        author_name: 'M.A.',
        author_url: '',
        language: '',
        profile_photo_url: '../../../assets/img/user.png',
        rating: 0,
        relative_time_description: '',
        text: `Tanto online como en consulta, desde el primer momento me sentí muy cómoda en terapia, gracias a la cercanía de Irene,
         y ha sido una experiencia muy positiva, pues me ha ayudado a gestionar ciertas situaciones en mi vida. Me parece una excelente
          psicóloga por su profesionalidad, su involucramiento y su capacidad para entender a los demás.`,
         time: 1586296800000,
         localization: 'Online'
    }, {
        author_name: 'Miguel',
        author_url: '',
        language: '',
        profile_photo_url: '../../../assets/img/user.png',
        rating: 0,
        relative_time_description: '',
        text: `Una gran profesional. Muy cercana y agradable. Me ofrece mucha confianza y hace que sea fácil contarle tus preocupaciones.
         Me ayudó a superar una situación difícil en mi vida. A día de hoy sigo visitándola. Es un gran apoyo. Muy recomendable.`,
         time: 1585778400000,
         localization: 'Miraflores de la Sierra'
    }, {
        author_name: 'iraiz',
        author_url: '',
        language: '',
        profile_photo_url: '../../../assets/img/user.png',
        rating: 0,
        relative_time_description: '',
        text: `Excelente terapeuta, desde el primer momento es muy cercana, amable, profesional lo que te ayuda muchisimo
         a expresar realmente lo que sientes, llevo tiempo en terapia con ella (desde el extranjero) y siempre me ha ayudado
          realmente es un tiempo y un dinero muy bien invertido, una gran psicóloga que sin duda recomiendo a todo aquel que
           necesite psicoterapia. He tenido terapeutas anteriormente pero ninguno me a hecho sentir como ella de cómodo. Gracias Irene :)`,
         time: 1584140400000,
         localization: 'Online'
    }, {
        author_name: 'Anna',
        author_url: '',
        language: '',
        profile_photo_url: '../../../assets/img/user.png',
        rating: 0,
        relative_time_description: '',
        text: `Inmejorable, estamos muy contentos con Irene. Es una muy buena profesional, súper atenta, se implica muchísimo,
         muy buen trato al paciente, se nota que disfruta de su trabajo y que realmente le gusta ayudar a los demás.
        Tiene amplia flexibilidad horaria y la consulta es ideal, muy familiar, limpia y acogedora.
        La recomiendo 100%`,
         time: 1584054000000,
         localization: 'Miraflores de la Sierra'
    }, {
        author_name: 'Tārā',
        author_url: '',
        language: '',
        profile_photo_url: '../../../assets/img/user.png',
        rating: 0,
        relative_time_description: '',
        text: `Irene muy amable desde el primer momento. Facilita mucho el primer contacto haciéndote sentir cómoda y tratar
         los asuntos relevantes con fluidez y espontaneidad. A destacar su empatía, la cercanía y se aprecia que está actualizada
          en su ámbito profesional.`,
         time: 1583967600000,
         localization: 'Miraflores de la Sierra'
    }];

    constructor( private http: HttpClient) {}

    // private params = new HttpParams().set('placeid', this.iDMiraflores).set('key', this.key);
    /* private body = {
        params: {
            placeid: this.iDMiraflores,
            key: this.key
        }
    }; */

    getReviews() {
 /*        const params = new HttpParams()
            .set('placeid', this.iDMiraflores)
            .set('key', this.key);
        return this.http.get(`${this.url}`, {params})
        .pipe(
            map( resp => (resp))
        ); */
        return this.doctoraliaReviews;
    }

    private crearArray( entriesObj: object) {
        const entries: ReviewModel[] = [];
        if (entriesObj === null) { return []; }
        Object.keys(entriesObj).forEach(key => {
            const review: ReviewModel = entriesObj[key];
            review['author_name'] = key;

            entries.push(review);
        });
        return entries;
    }
}
