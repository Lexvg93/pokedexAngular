import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenedorService {
  private tipoPokemon:string='';
  private pokemons:BehaviorSubject<string>=new BehaviorSubject<string>('');

  get pokemonesTipo(){
    return this.pokemons.asObservable();
  }

  mostrarPokemon(poke:any){
    this.tipoPokemon=poke;
    this.pokemons.next(this.tipoPokemon);
    console.log(this.tipoPokemon)
  }
  
}
