import { Component } from '@angular/core';
import { Fish } from '../fish';
import { FISHES } from '../mock-fishes';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.css']
})

export class FishesComponent {

  fishes = FISHES;
  selectedFish?: Fish;

  onSelect(fish: Fish): void {
    this.selectedFish = fish;
  }
}