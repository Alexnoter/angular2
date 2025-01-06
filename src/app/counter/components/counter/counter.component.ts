import { Component } from "@angular/core";


@Component({
    /* el selector es como haremos el llamado */
    selector:'app-counter',
    standalone: false,
    /* lo que contendra , puede ir una ruta */
    template: `
    <h3> Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">refrescar</button>
    <button (click)="increaseBy(-1)">-1</button>

    `

})
export class CounterComponent {

    public counter: number = 10;


    increaseBy(value:number ):void {
        this.counter += value;
    }

    resetCounter():void {
        this.counter = 10;
    }


}


