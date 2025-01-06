import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

//es una clase quie tiene propiedades y metodos
export class HeroComponent {

  public name: string ='ironman';
  public age : number = 45

  //get son propiedades
  public get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  //metodo
  getHeroDescription():string {

    return `${this.name } - ${this.age}`;
  }

  changeHero():void {
    this.name = "Spiderman";
  }

  changeAge():void {
    this.age = 100;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
