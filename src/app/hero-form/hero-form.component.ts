import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Super Strength', 'Super Speed', 'Flight', 'Super Intelligence', 'Rich',
  'Righteousness']

  model = new Hero(18, 'Hulk', this.powers[0], 'Bruce Benner');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  ngOnInit(): void {
  }

}
