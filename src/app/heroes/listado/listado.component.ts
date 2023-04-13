import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'] ;
  heroeDeleted: string = '';

  deleteHeroe(): void{
    this.heroeDeleted = this.heroes.pop() || '';
    console.log('eliminado: ', this.heroeDeleted);
  }
}


