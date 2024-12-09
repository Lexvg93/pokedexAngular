import { Component, inject, Input } from '@angular/core';
import { Boton } from '../models/boton';
import { ContenedorService } from '../services/contenedor.service';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  private contenedorService = inject(ContenedorService)
  @Input()
  botonId!:Boton;
  pokexTipo(name:string){
    console.log(name)
    this.contenedorService.mostrarPokemon(name);
  }
}
