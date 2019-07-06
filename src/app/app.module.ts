import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { CardsService } from './services/cards.service';
import { LocalizacionService } from './services/localizacion.service';
import { CookieService } from 'ngx-cookie-service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PsicologaComponent } from './components/psicologa/psicologa.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/shared/card/card.component';
import { CookiesComponent } from './components/shared/cookies/cookies.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';

// Estilos
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AvisoCookiesComponent } from './components/aviso-cookies/aviso-cookies.component';
import { SafePipe } from './pipes/url-safe.pipe';
import { SliderComponent } from './shared/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PsicologaComponent,
    LocalizacionComponent,
    EspecialidadComponent,
    BlogComponent,
    CardComponent,
    CookiesComponent,
    FooterComponent,
    AvisoLegalComponent,
    AvisoCookiesComponent,
    SafePipe,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFontAwesomeModule
  ],
  providers: [
    CardsService,
    LocalizacionService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
