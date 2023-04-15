import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Input() character: Character = {
    name: '',
    power: 0
  };

  @Output() onNwCharacter: EventEmitter<Character> = new EventEmitter();

  add(){
    if (this.character.name.trim().length === 0){ return }
    this.onNwCharacter.emit(this.character);
    this.character =  {
      name: '',
      power: 0
    }
  }
}
