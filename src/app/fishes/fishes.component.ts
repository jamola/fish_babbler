import { Component, OnInit } from '@angular/core';

import { Fish } from '../fish';
import { FishService } from '../fish.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.css']
})
export class FishesComponent implements OnInit {

  selectedFish?: Fish;

  fishes: Fish[] = [];

  constructor(private fishService: FishService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getFishes();
  }

  onSelect(fish: Fish): void {
    this.selectedFish = fish;
    this.messageService.add(`FishesComponent: Selected fish id=${fish.id}`);
  }

  getFishes(): void {
    this.fishService.getFishes()
        .subscribe(fishes => this.fishes = fishes);
  }
}