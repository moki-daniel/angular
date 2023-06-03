import { Component, Input } from '@angular/core';
import { Hero } from '../src/app/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
// This component only
// receives a hero object through its hero property and displays it.
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
