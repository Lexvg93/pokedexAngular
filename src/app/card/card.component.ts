import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  poke!:any;

  id = input('');
  pokeId = computed(()=>{
    if(this.id().length===1){
      return "00"+this.id();
    }else if(this.id().length===2){
      return "0"+this.id();
    }else{
      return this.id();
    }
  })
}
