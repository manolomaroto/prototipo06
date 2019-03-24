import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {

    private cards: Card[] = [{
        title: 'Adultos',
        img: 'assets/img/clouds.jpg',
        link: 'terapia-adultos.html',
        desc: 'Nos gustaría concretar todas las posibles razones para empezar una terapia psicológica, pero es complicado porque'
    },
    {
        title: 'Adolescentes',
        img: 'assets/img/backpack.jpg',
        link: 'terapia-adultos.html',
        desc: 'Cuestiones que tratamos:Dificultades de relación. Problemas de conducta en casa y en el colegio, Manejo del enfado y la ira'
    },
    {
        title: 'Parejas',
        img: 'assets/img/holding-hands.jpg',
        link: 'terapia-adultos.html',
        desc: 'Los temas más comunes por los que las parejas acuden a terapia son:'
    }];

    constructor() {}

    getCards(): Card[] {
        return this.cards;
    }

    getCard( idx: string) {
        return this.cards[idx];
    }
}

export interface Card {
    title: string;
    img: string;
    link: string;
    desc: string;
}