import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private _http = inject(HttpClient);
  getPokemon(numero:number):Observable<any>{
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${numero}`)
  }
}
