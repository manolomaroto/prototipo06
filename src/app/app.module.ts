import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';


// Servicios
import { CardsService } from './services/cards.service';
import { LocalizacionService } from './services/localizacion.service';
import { CookieService } from 'ngx-cookie-service';
import { BlogService } from './services/blog.service';


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
    FixedBottonComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    CardsService,
    LocalizacionService,
    CookieService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
