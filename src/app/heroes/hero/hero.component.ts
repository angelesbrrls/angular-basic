import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.componente.html',
})
export class HeroComponent{
    name: string = 'Ironman';
    age: number = 45;


    get nameCapitalized(){
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${ this.name } - ${ this.age } `
    }

    changeName(): void{
        this.name = 'Spiderman';
    }

    changeAge(): void{
        this.age = 39
    }
}
