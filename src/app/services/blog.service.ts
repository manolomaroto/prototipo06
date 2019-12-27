import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

    private posts: any[] = [
        {
            id: 1,
            title: 'Una entrada',
            brief: 'Resumen de la entrada',
            content: 'Esto es una entrada',
            image: '',
            created_at: '12/12/2019',
            user_id: '01',
            category_id: 'psicologia'
        },
        {
            id: 2,
            title: 'Otra entrada',
            brief: 'Resumen de la entrada',
            content: 'Esto es una entrada',
            image: '',
            created_at: '12/12/2019',
            user_id: '01',
            category_id: 'psicologia'
        },
        {
            id: 3,
            title: 'Una entrada más',
            brief: 'Resumen de la entrada',
            content: 'Esto es una entrada',
            image: '',
            created_at: '12/12/2019',
            user_id: '01',
            category_id: 'psicologia'
        }
    ];

    constructor() {
        console.log('Servicio listo para usarse');
    }

    getPosts() {
        return this.posts;
    }
}
