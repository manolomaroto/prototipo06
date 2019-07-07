import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PsicologaComponent } from './components/psicologa/psicologa.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';
import { AvisoCookiesComponent } from './components/aviso-cookies/aviso-cookies.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'psicologa', component: PsicologaComponent },
    { path: 'localizacion/:id', component: LocalizacionComponent },
    { path: 'especialidad/:id', component: EspecialidadComponent},
    { path: 'avisoLegal', component: AvisoLegalComponent },
    { path: 'avisoCookies', component: AvisoCookiesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash : true});
