import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-comentario-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-comentario-hijo.component.html',
  styleUrl: './crear-comentario-hijo.component.css'
})
export class CrearComentarioHijoComponent {
  comentarionuevo : string = "";
  @Output()
  comentario = new EventEmitter<string>();

  enviarComen(){
    if (this.comentarionuevo.trim()) {
      this.comentario.emit(this.comentarionuevo);
      this.comentarionuevo = ''; 
  }
  }
}
