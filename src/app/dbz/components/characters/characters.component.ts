import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  @Input() characters: Character [] = [];
  @Output() onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacterById(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }

}
