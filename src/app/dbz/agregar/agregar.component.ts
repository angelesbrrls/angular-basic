import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nwCharacter: Character = {
    name: '',
    power: 0
  };

  @Output() onNwCharacter: EventEmitter<Character> = new EventEmitter();

  agregar(){
    if (this.nwCharacter.name.trim().length === 0){ return }
    this.onNwCharacter.emit(this.nwCharacter);
    this.nwCharacter =  {
      name: '',
      power: 0
    }  
  }
}
