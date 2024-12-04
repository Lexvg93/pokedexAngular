import { Component, Input } from '@angular/core';
import { Boton } from '../models/boton';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input()
  botonId!:Boton;
  pokexTipo(name:string){
    console.log(name)
  }
}
