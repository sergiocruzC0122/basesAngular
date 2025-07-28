import { Component, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { InputCharacterComponent } from "../../components/dragonball/input-character/input-character.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, InputCharacterComponent],
  templateUrl: './dragonball-super.component.html',
})
export class DragonballSuperComponent {

  public dragonballService = inject(DragonballService);
  
}
