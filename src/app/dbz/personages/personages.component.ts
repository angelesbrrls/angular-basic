import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personages',
  templateUrl: './personages.component.html',
  styleUrls: ['./personages.component.css']
})
export class PersonagesComponent {
  @Input() characters: Character [] =[]
}
