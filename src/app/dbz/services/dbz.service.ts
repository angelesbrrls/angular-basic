import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character [] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ]

  character : Character = {
    id: uuid(),
    name: 'Mestro Roshi',
    power: 1000
  }

  addNwCharacter( character: Character): void {
    const newCharacter: Character ={ id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string) {
    this.characters = this.characters.filter ( character => character.id !== id );
  }
}
