import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PsicologaComponent } from './psicologa/psicologa.component';
import { LocalizacionComponent } from './localizacion/localizacion.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { SafePipe } from '../pipes/url-safe.pipe';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { AvisoCookiesComponent } from './aviso-cookies/aviso-cookies.component';
import { BlogEntryComponent } from './blog/blog-entry/blog-entry.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';

@NgModule({
  declarations: [
    ReviewsComponent,
    FooterComponent,
    HomeComponent,
    PsicologaComponent,
    LocalizacionComponent,
    EspecialidadComponent,
    SafePipe,
    AvisoLegalComponent,
    AvisoCookiesComponent,
    BlogEntryComponent,
    BlogComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    SharedModule,
    ReviewsComponent,
    FooterComponent,
    HomeComponent,
    PsicologaComponent,
    LocalizacionComponent,
    EspecialidadComponent,
    SafePipe,
    AvisoLegalComponent,
    AvisoCookiesComponent,
    BlogEntryComponent,
    BlogComponent
  ]
})
export class ComponentsModule { }
