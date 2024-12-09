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
    this._contenedorService.pokemonesTipo.subscribe(poke=>{
      if(poke===''){
        for(let i=1; i<=151;i++){
          this._pokemonService.getPokemon(i).subscribe({
            next:(data)=>{
              this.pokemones.push(data);
              this.copiaPoke.push(data);
            }
          })
        }
        this.copiaPoke.sort((a,b)=>{
          return a.id - b.id;
        })
      }else{
          this.pokemones.length = 0;
          if(poke !== 'ver-todos'){
            for(let i =0; i<this.copiaPoke.length;i++){
              const tipos = this.copiaPoke[i].types.map((type:any) =>type.type.name);
              if(tipos.some((tipo:any)=> tipo.includes(poke))){
                this.pokemones.push(this.copiaPoke[i]);
              }
            }
          }else{
            for(let i =0; i<this.copiaPoke.length;i++){
              this.pokemones.push(this.copiaPoke[i]);
            }
          }
      }
    })
  }
   
}
