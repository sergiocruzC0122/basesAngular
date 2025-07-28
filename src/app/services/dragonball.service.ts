import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1 , name: 'Goku', power: 9001},
    { id: 2 , name: 'Vegueta', power: 6001},
  ]);

  addCharacter(character: Character){
    this.characters.update((list) => [ ...list, character]); 
  }

}
