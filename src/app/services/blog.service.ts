import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

    private posts: any[] = [
        {
            id: 4,
            title: 'Afrontamiento psicológico confinamiento',
            brief: '',
            content: `<p style="text-align: justify;">Psicología Miraflores ha participado
             <a href="https://anchor.fm/irene236/episodes/Afrontamiento-psicolgico-confinamiento-ed0sec">
              en el primer Podcast de Villa de Miraflores</a>
             de la Sierra. La entrevista, dirigida por Roberto Blasco, Concejal de Deportes, Infancia, y Juventud del Ayuntamiento de
              Miraflores de la Sierra, versa sobre algunas cuestiones derivadas a la pandemia del COVID-19. Trataremos de dar respuesta
               a cuestiones relativas a como se está afrontando el confinamiento y la alarma sanitaria a nivel psicológico.  </i>
           </p>
           <p>Esperando que la escucha sea de tu agrado, te saluda atentamente.</p>
           <p>Irene Gallego</p>
           `,
            image: 'assets/img/podcast-confinamiento.jpeg',
            created_at: '22/03/2020',
            user_id: '01',
            category_id: 'psicologia',
            author: 'Irene Gallego'
        },
        {
            id: 3,
            title: 'Diario de un viaje',
            brief: '',
            content: `<p style="text-align: justify;">En tiempos de pandemia donde todos de alguna manera hemos desplegado mecanismos
             de afrontamiento, más o menos funcionales, cobran aún más sentido para mi las enseñanzas de Darwin acerca de la selección
              natural. <i>“No es la más fuerte de las especies la que sobrevive, tampoco es la más inteligente la que sobrevive. 
              Es aquella que se adapta mejor al cambio”.</i>
           </p>
           <img class="responsive-img" src="assets/img/darwin-escribiendo.jpeg" alt="Darwin escribiendo">
           <p style="text-align: justify;">Al poner este pensamiento en alto, uno de mis apreciados pacientes, comparte conmigo un libro
            de su biblioteca adquirido por su padre en México en 1955: “Diario del viaje de un naturalista alrededor del mundo”, obra
            publicada en 1839, mucho antes que “El origen de las especies” que sería la obra de Darwin más famosa y que cambiaría la
             ciencia para siempre.</p>
             <img class="responsive-img" src="assets/img/diarioViajeDarwin.jpeg" alt="">
           <p>Con permiso de R. me gustaría compartir con vosotros un extracto de este manuscrito, e invitarte a nueva reflexión y que
            cada uno pueda realizar una interpretación libre sobre esto que ya Darwin escribió hace un tiempo.</p>
           <p><i>“Ejercitan estos viajes la paciencia, borran todo rastro de egoísmo, enseñan a elegir por uno mismo y a acomodarse a
            todo; en una palabra dan las cualidades que distinguen a los marinos. También enseñan los viajes un poco a desconfiar,
             pero permiten descubrir que hay en el mundo muchas personas de corazón excelente, dispuestas a serviros, aún cuando no
              se las haya visto jamás ni deban volverse a encontrar nunca".</i></p>
           <p>Y tú, ¿cómo llevas este viaje?</p>
            <p>En un paradigma más actual, revisando el pensamiento contemporáneo, filósofos, sociólogos, psicólogos e investigadores de
             las ciencias sociales en general, tratan de arrojar ideas acerca de la vivencia del COVID-19 en textos a los cuales remito
              al lector interesado como son
               <a href="https://www.elextremosur.com/files/content/23/23684/sopa-de-wuhan.pdf">Sopa de Wuhan</a>
               o <a href="https://drive.google.com/file/d/1k-YzHu9LgPajOuqz8WS5XKjfbj-EqAvM/view">La Fiebre</a>.</p>
           <p>Deseo que tú y los tuyos estéis bien.</p>
           <p>Un abrazo.</p>
           `,
            image: 'assets/img/cuaderno.jpeg',
            created_at: '17/03/2020',
            user_id: '01',
            category_id: 'psicologia',
            author: 'Irene Gallego'
        },
        {
            id: 2,
            title: 'Sobre la tela de una araña...',
            brief: 'Resumen de la entrada',
            content: `<p style="text-align: justify;">¿A quién no le recuerda el título del post a la canción que todos hemos
             cantado de pequeños en las excursiones de autobús?
            </p>
            <p style="text-align: justify;">"Un elefante se balanceaba sobre la tela de una araña, como veía que no se caía
            fueron a llamar a otro elefante".</p>
            <p>Bueno pues así es, en ocasiones cuando le damos muchas vueltas a un tema es como si poco a poco fuéramos formando
             un gran tejido de pensamientos, relaciones entre ellos y sus sucesos hasta que, metafóricamente, el resultado es una
              tela de araña.</p>
            <p>Si volvemos a la estrofa de la canción que dice "como veía que no se caían fueron a llamar a otro elefante",
             podemos derivar que en ese momento todo lo que hemos pensado tiene sentido, todo encaja así que continuamos añadiendo
              argumentos a favor de nuestro tejido.</p>
            <p>Pero ¿Que ocurre cuando queremos quitar una tela de araña de nuestra casa?. Pues, no se a vosotros pero yo puedo
             pasar días viéndola hasta que la retiro y una vez que la quito siento pena del gran trabajo laborioso que tuvo la
              araña para crear ese entretejido complejo pero tan efímero y débil a la vez.</p>
             <p>Recientemente, usaba esta metáfora de la tela de araña con este toque personal y poniendo las equivalencias pertinentes
              a la persona que tenía delante, durante una sesión con un paciente con un problema obsesivo grave (el conocido TOC en su
                 vertiente más cognitiva) para poner delante como nuestra mente genera estructuras complejas de pensamiento que puede
                  hacernos creer que son verdad.</p>
            <p>Gracias por vuestra atención.</p>
            <p>Un abrazo.</p>
            `,
            image: 'assets/img/telaArania02.jpg',
            created_at: '12/04/2020',
            user_id: '01',
            category_id: 'psicologia',
            author: 'Irene Gallego'
        },
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
            created_at: '22/03/2020',
            user_id: '01',
            category_id: 'psicologia',
            author: 'Irene Gallego'
        }
    ];

    constructor() {
    }

    getPosts() {
        return this.posts;
    }
}
