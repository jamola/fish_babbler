import { Component, OnInit } from '@angular/core';

import { Fish } from '../fish';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.css']
})
export class FishesComponent implements OnInit {
  fishes: Fish[] = [];

  constructor(private fishService: FishService) { }

  ngOnInit(): void {
    this.getFishes();
  }

  getFishes(): void {
    this.fishService.getFishes()
    .subscribe(fishes => this.fishes = fishes);
  }

  add(specie: string): void {
    specie = specie.trim();
    if (!specie) { return; }
    this.fishService.addFish({ specie } as Fish)
      .subscribe(fish => {
        this.fishes.push(fish);
      });
  }

  delete(fish: Fish): void {
    this.fishes = this.fishes.filter(f => f !== fish);
    this.fishService.deleteFish(fish.id).subscribe();
  }
  
}
