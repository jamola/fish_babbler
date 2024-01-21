import { Component, OnInit } from '@angular/core';
import { Fish } from '../fish';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  fishes: Fish[] = [];

  constructor(private fishService: FishService) { }

  ngOnInit(): void {
    this.getFishes();
  }

  getFishes(): void {
    this.fishService.getFishes()
      .subscribe(fishes => this.fishes = fishes.slice(2, 4));
  }
}