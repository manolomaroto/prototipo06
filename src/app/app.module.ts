import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


// Servicios
import { CardsService } from './services/cards.service';
import { LocalizacionService } from './services/localizacion.service';
import { CookieService } from 'ngx-cookie-service';
import { BlogService } from './services/blog.service';
import { ReviewsService } from './services/reviews.service';


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
import { FixedBottonComponent } from './components/shared/fixed-botton/fixed-botton.component';

// Estilos
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AvisoCookiesComponent } from './components/aviso-cookies/aviso-cookies.component';
import { SafePipe } from './pipes/url-safe.pipe';
import { SliderComponent } from './shared/slider/slider.component';
import { BlogEntryComponent } from './components/blog/blog-entry/blog-entry.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CompliteEntryComponent } from './components/blog/complite-entry/complite-entry.component';

registerLocaleData(localeEs);
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
    SliderComponent,
    BlogEntryComponent,
    FixedBottonComponent,
    ReviewsComponent,
    CompliteEntryComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    CardsService,
    LocalizacionService,
    CookieService,
    BlogService,
    ReviewsService,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
