import { Component } from '@angular/core';
import { Hero } from '../src/app/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
heroes = HEROES;
selectedHero?: Hero;
// this is the return type of the function. Void means it will return nothing
// delimit the type of the variable to a 'Hero', which means the
// function will only accept parameters of the type Hero or abstractions of it.
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
