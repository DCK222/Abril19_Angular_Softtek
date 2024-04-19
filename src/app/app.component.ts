import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ InicioComponent, RouterLink,RouterOutlet]
})
export class AppComponent {
  title = 'abril19_Softtek';
}
