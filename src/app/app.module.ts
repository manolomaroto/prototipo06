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

// Estilos
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { ComponentsModule } from './components/components.module';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ComponentsModule
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
