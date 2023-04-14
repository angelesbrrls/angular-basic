import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character [] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ]

  nwCharacter : Character = {
    name: 'Mestro Roshi',
    power: 1000
  }

  addNwCharacter( character: Character){
    this.characters.push(character);
  }


}
