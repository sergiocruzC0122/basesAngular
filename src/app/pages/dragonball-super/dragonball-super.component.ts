import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interfaces';
import { InputCharacterComponent } from "../../components/dragonball/input-character/input-character.component";

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, InputCharacterComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {
  
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1 , name: 'Goku', power: 9001},
    { id: 2 , name: 'Vegueta', power: 6001},
  ]);

  
  addCharacter(character: Character){
    this.characters.update((list) => [ ...list, character]); 
  }

  
}
