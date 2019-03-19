import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {

    private cards: Card[] = [{
        title: 'Adultos',
        img: 'assets/img/clouds.jpg',
        link: 'terapia-adultos.html'
    },
    {
        title: 'Adolescentes',
        img: 'assets/img/clouds.jpg',
        link: 'terapia-adultos.html'
    },
    {
        title: 'Parejas',
        img: 'assets/img/clouds.jpg',
        link: 'terapia-adultos.html'
    }];

    constructor() {}

    getCards(): Card[] {
        return this.cards;
    }
}

export interface Card {
    title: string;
    img: string;
    link: string;
}