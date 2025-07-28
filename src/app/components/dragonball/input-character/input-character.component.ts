import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'input-character',
  imports: [],
  templateUrl: './input-character.component.html',
})
export class InputCharacterComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  characters = signal<Character[]>([
    { id: 1 , name: 'Goku', power: 9001},
    { id: 2 , name: 'Vegueta', power: 6001},
  ]);

  addCharacter(){
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    }

    // this.characters.update((list) => [ ...list, newCharacter]); 
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
}
