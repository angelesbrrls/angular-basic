import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'] ;
  heroeDeleted: string = '';

  deleteHeroe(): void{
    this.heroeDeleted = this.heroes.pop() || '';
    console.log('eliminado: ', this.heroeDeleted);
  }
}


