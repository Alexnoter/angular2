import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krilin',
      power: 1000,
    },{
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },{
      id: uuid(),
      name: 'Vegeta',
      power: 7000,
    }

  ];

  addCharacter( character: Character ):void {
    //aca dice que tome todas las propiedades y las esparsa en caracteres
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  onDeleteCharacter( character: number ):void {
    this.characters.splice(character,1);
  }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
