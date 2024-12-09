import { Component, OnInit } from '@angular/core';
import { BotonComponent } from '../boton/boton.component';
import { Boton } from '../models/boton';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  botonesDatos!:Boton[];
  ngOnInit(): void {
    this.botonesDatos=[
      {id:"ver-todos",nombre:"Ver Todos"},
      {id:"normal",nombre:"Normal"},
      {id:"fire", nombre:"Fire"},
      {id:"water", nombre:"Water"},
      {id:"grass", nombre:"Grass"},
      {id:"electric", nombre:"Electric"},
      {id:"ice", nombre:"Ice"},
      {id:"fighting", nombre:"Fighting"},
      {id:"poison",nombre:"Poison"},
      {id:"ground", nombre:"Ground"},
      {id:"flying", nombre:"Flying"},
      {id:"psychic", nombre:"Psychic"},
      {id:"bug", nombre:"Bug"},
      {id:"rock", nombre:"Rock"},
      {id:"ghost", nombre:"Ghost"},
      {id:"dark", nombre:"Dark"},
      {id:"dragon", nombre:"Dragon"},
      {id:"steel", nombre:"Steel"},
      {id:"fairy", nombre:"Fairy"}
    ]
  }

}
