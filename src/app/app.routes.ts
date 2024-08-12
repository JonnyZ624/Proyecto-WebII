    import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"nosotros",component:NosotrosComponent},
    {path:"producto",component:ProductosComponent},
    {path:"ofertas",component:OfertasComponent},

    {path: '', redirectTo: 'home', pathMatch: 'full'}, 
    {path:'**', component:Error404Component}
];
