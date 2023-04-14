import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{ title }} </h1>
    <h1> {{ base }} </h1>
    <button (click)=" operacion (base) "> + {{ base }} </button>
    <span> {{ num }} </span>
    <button (click)=" operacion (-base)  "> - {{ base }} </button>
    `
})


export class CounterComponent {
    title : string = 'Counter App';
    num   : number = 10;
    base  : number = 5;

    operacion (valor: number){
      this.num += valor;
    }

}
