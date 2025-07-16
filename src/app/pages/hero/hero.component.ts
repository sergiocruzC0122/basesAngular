import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent { 

  name = signal("Ironman");
  age = signal(45);


  getHeroDescription(){
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(){
    this.name.set("Spiderman");
    this.age.set(22);
  }

  chageAge(value: number){
    this.age.set(value);
  }

  resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
  }
}
