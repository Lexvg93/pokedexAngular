import { Routes } from '@angular/router';
import { ContenedorComponent } from './contenedor/contenedor.component';

export const routes: Routes = [
    {path:'home', component:ContenedorComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'}
];
