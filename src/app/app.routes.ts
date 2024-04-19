import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

export const routes: Routes = [
    {
        path : '', title: 'Home' , component: InicioComponent
    },
    {
        path : 'dondeEstamos', title: 'donde' , component: DondeEstamosComponent
    },
    {
        path : 'quienesSomos', title: 'quienesSomos' , component: QuienesSomosComponent
    },
    {
        path : 'comentarios', title: 'comentarios' , component: ComentariosComponent
    }
];
