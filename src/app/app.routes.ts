import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PsicologaComponent } from './components/psicologa/psicologa.component';
import { LocalizacionComponent } from './components/localizacion/localizacion.component';
import { EspecialidadComponent } from './components/especialidad/especialidad.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'psicologa', component: PsicologaComponent },
    { path: 'localizacion', component: LocalizacionComponent },
    { path: 'especialidad', component: EspecialidadComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
