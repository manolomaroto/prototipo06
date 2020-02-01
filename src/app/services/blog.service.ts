import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

    private posts: any[] = [
        {
            id: 1,
            title: 'Beneficios de la terapia online',
            brief: 'Resumen de la entrada',
            content: `<p style="text-align: justify;">Las nuevas tecnologías ofrecen posibilidades también para
             la terapia psicológica. Solo con tener conexión a internet podrás acceder a una manera más cómoda y
              privada de consulta. Las ventajas de la terapia en línea son múltiples: más comodidad, más ahorro,
               mayor privacidad y más facilidad para concertar las citas.</p>
               <p style="text-align: justify;">Para que conozcas un poco mejor las características de esta nueva
                manera de ir al psicólogo, te voy a explicar algunos de sus beneficios.</p>
                <h2>1. Desde tu casa, con toda comodidad</h2>
                <p>Olvídate de tener que arreglarte y desplazarte varios kilómetros
                 para acudir a tus sesiones. Solo necesitas conectarte a la red para tenerme al otro lado. Esto
                  es especialmente útil para personas con movilidad reducida o que tengan algún impedimento para salir.
                   Uno de los casos más habituales es el de quienes tienen hijos pequeños y no pueden dejarlos con nadie.</p>
                   <h2>2. Ahorro en los desplazamientos</h2>
                   <p>Una de las ventajas de no salir de casa es que te ahorras el dinero del traslado.
                    No tendrás que pagar transporte público, ni gasolina, ni aparcamiento. Además, también ahorras todo el tiempo
                     que perderías en ir y volver.</p>
            <h2>3. Mayor privacidad con la psicologa</h2>
            <p>Nadie tiene por qué saber dónde vas ni verte entrar en ningún lugar. Desde la intimidad
             de tu domicilio podrás contar conmigo como tu psicologa de confianza, sin intermediarios.</p>
             <h2>4. Terapia online, a la hora que mejor te venga</h2>
             <p>La terapia online te permite organizar mejor tu tiempo. <a href="https://psicologiaonline.simplybook.it/v2/">
             Concertar una cita</a> es más sencillo y tienes más horas a tu disposición, ya que podrás combinar las sesiones
              con tu trabajo o estudios.</p>
              <h2>5. Comunicación más abierta</h2>
              <p>Gracias al sentimiento de seguridad que brinda estar en casa y a que no hay ningún
               elemento externo que intimide, la comunicación con el terapeuta se hace más abierta. Así podrás expresarte con mayor
                confianza.</p>
            <h2>6. Terapia en linea con múltiples recursos</h2>
            <p>La modalidad <em>online</em> sirve también para utilizar otros canales de comunicación.
             Aunque la videoconferenciaes la forma más adecuada, en algunos casos podrás usar el correo electrónico para explicarme
             por escrito alguna cuestión de la que te cueste hablar.</p>
             <h2>7. Desde cualquier lugar</h2>
             <p>No tendrás que interrumpir tu terapia a causa de un viaje o de un cambio de localidad. Estés donde estés, podrás
             conectarte para no interrumpir tu proceso de mejora.</p>
             <h2>Una nueva vía para la psicologia</h2>
             <p>Estos son solo siete de los muchos beneficios que te aporta la terapia en linea. Para la psicologia es muy útil que
              se puedan realizar tratamientos de esta manera porque permite una conexión más relajada entre paciente y terapeuta.</p>
              <p>Para ponértelo más fácil, en mi página web puedes solicitar una prueba gratuita para que
               conozcas cómo funciona la consulta <em>online.</em> Si la experiencia te satisface podrás continuar reservando tu siguiente
                cita, de 45 minutos, con total comodidad.</p>
            <p>Esta nueva forma de terapia psicológica es una buena noticia para tu bienestar y sirve tanto
             para adultos y adolescentes como para hacer terapia de pareja. Además, los tratamientos son igual de eficaces que si asistes
              a la consulta presencial. Así que ya sabes, si quieres probar la terapia en linea, te espero a solo un
              <a href="https://psicologiaonline.simplybook.it/v2/"> clic</a> de distancia.`,
            image: 'assets/img/terapiaOnline.jpg',
            created_at: '12/12/2019',
            user_id: '01',
            category_id: 'psicologia'
        }
    ];

    constructor() {
    }

    getPosts() {
        return this.posts;
    }
}
