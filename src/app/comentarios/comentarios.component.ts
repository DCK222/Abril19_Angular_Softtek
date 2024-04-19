import { Component } from '@angular/core';
import { CrearComentarioHijoComponent } from "../crear-comentario-hijo/crear-comentario-hijo.component";

@Component({
    selector: 'app-comentarios',
    standalone: true,
    templateUrl: './comentarios.component.html',
    styleUrl: './comentarios.component.css',
    imports: [CrearComentarioHijoComponent]
})
export class ComentariosComponent {
comentarios : string[] = [];

agregarComent(comentario : string){
  this.comentarios.push(comentario);
}
}
