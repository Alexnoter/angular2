import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})

export class MainPageComponent {

  public characters: Character[] = [
  {
    name: 'krilin',
    power: 1000,
  },{
    name: 'Goku',
    power: 9500,
  },{
    name: 'Vegeta',
    power: 7000,
  }
];

  onNewCharacter( character: Character ):void {
    this.characters.push(character);
  }

  onDeleteCharacter( character: number ):void {
    this.characters.splice(character,1);
  }

}

