import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ContenedorService } from '../services/contenedor.service';
import { PokemonApiService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent implements OnInit{
  private copiaPoke:any[]=[];
  private _contenedorService = inject(ContenedorService)
  private _pokemonService= inject(PokemonApiService)
  pokemones:any[]=[];
  ngOnInit(): void {
    
  }
   
}
