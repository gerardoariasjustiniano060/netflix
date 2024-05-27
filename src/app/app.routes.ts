import { Routes } from '@angular/router';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
{ path: '', redirectTo: '/inicio',pathMatch:'full'},
    { path: 'peliculas', component: PeliculasComponent},
    { path: 'series', component: SeriesComponent},
    { path: 'inicio', component: InicioComponent},  
];