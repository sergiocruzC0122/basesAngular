import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
})
export class DragonballComponent { 

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1 , name: 'Goku', power: 9001},
    // { id: 2 , name: 'Vegueta', power: 5001},
    // { id: 3 , name: 'Poccolo', power: 3001},
    // { id: 4 , name: 'Yamcha', power: 1000},
  ]);

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    this.characters.update((list) => [ ...list, newCharacter]); 
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
