import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {

    private cards: Card[] = [{
        title: 'Adultos',
        img: 'assets/img/clouds.jpg',
        dibujo : '../../assets/img/terapiaAdultos.jpg',
        link: 'terapia-adultos.html',
        desc: {
            title: 'Terapia individual',
            parrafos : [
                `Nos gustaría concretar todas las posibles razones para empezar una terapia psicológica, pero es complicado porque,
                 hay tantas razones y motivos como personas que demandan atención psicológica.`,
                `En general diremos que las personas adultas acuden al psicólogo cuando las estrategias personales para solucionar
                 los problemas emocionales dejan de ser suficientes y hay un sentimiento de desesperanza.`,
                 `También podemos precisar apoyo o consejo ante situaciones en las que no somos capaces de
                  identificar porque nos sentimos desanimados, enfados o tristes.`,
                  `A veces incluso se busca un psicólogo por consejo de otro profesional sanitario: médico, fisioterapeuta…etc.
                   Y la razón es que factores como el estrés y la ansiedad pueden derivar en síntomas psicosomáticos como cansancio,
                    contracturas musculares, trastornos digestivos, cefaleas tensionales, dolor crónico,…etc.`,
                `De lo que estamos seguros es que es recomendable acudir a un psicólogo cuando estamos atravesando por una situación
                 de alto nivel de malestar y sufrimiento, que afecta o dificulta nuestras actividades de vida cotidiana y nuestras
                  relaciones con los otros.`,
                `Esta es la lista de los problemas que trabajamos en consulta con mayor frecuencia:`
            ],
            listado: [
                `Trastornos de la ansiedad.`,
                `Trastornos del estado de ánimo.`,
                `Trastornos adaptativos o problemas derivados de sucesos estresantes (ruptura sentimental, divorcio, separación,
                 problemas conyugales, enfermedad médica crónica, dificultades emocionales, problemas en el trabajo, cambio de
                  residencia, casarse, tener hijos, jubilarse… etcétera).`,
                `Problemas de inseguridad, toma de decisiones.`,
                `Duelo por fallecimiento de un ser querido y otras pérdidas.`,
                `Problemas laborales y orientación laboral.`,
                `Fobia social y fobias específicas (a conducir, a volar…etc).`,
                `Trastornos psicosomáticos y problemas de salud.`,
                `Trastornos de personalidad (Trastorno obsesivo-compulsivo de la personalidad, TLP, Trastorno Evitativo,
                 Trastorno de personalidad por Dependencia)`,
                `Adicciones y problemas de control de impulsos.`
            ]
        }
    },
    {
        title: 'Adolescentes',
        img: 'assets/img/backpack.jpg',
        dibujo : '../../assets/img/bulling.jpg',
        link: 'terapia-adultos.html',
        desc: {
            parrafos: [
                `Cuestiones que tratamos:`
            ],
            listado: [
                `Dificultades de relación con los iguales`,
                `Autoestima`,
                `Problemas de conducta en casa y en el colegio`,
                `Manejo del enfado y la ira`,
                `Trastornos de la ansiedad`,
                `Miedos e inseguridades`,
                `Acoso escolar (Bullying) y/ó acoso a través de redes sociales (Ciberbullying)`,
                `Autolesiones (Cutting)`,
                `Problemas de alimentación: anorexia, bulimia`,
                `Enuresis noctura`,
                `Problemas de identidad`,
                `Orientación académica y profesional`,
                `Pautas educativas para padres y madres`
            ]
        }
    },
    {
        title: 'Parejas',
        img: 'assets/img/holding-hands.jpg',
        dibujo : '../../assets/img/pareja.jpg',
        link: 'terapia-adultos.html',
        desc: {
            parrafos: [
                `Los temas más comunes por los que las parejas acuden a terapia son:`
            ],
            listado: [
                `Problemas de comunicación`,
                `Discusiones`,
                `Dificultades derivadas de situaciones vitales importantes: nacimiento de hijos,
                 cambio de residencia, marcha de los hijos del hogar, jubilación`,
                `Problemas con la familia política o familia de origen`,
                `Crisis relacionadas con problemas de celos e infidelidades`,
                `Conflictos individuales de uno de los miembros de la pareja por causas ajenas a la relación`,
                `Mediación en separaciones y divorcios`,
                `Intervención en resolución de conflictos de pareja`
            ]
        }
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
    dibujo: string;
    link: string;
    desc: object;
}
