import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Fish} from '../fish';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-fish-detail',
  templateUrl: './fish-detail.component.html',
  styleUrls: [ './fish-detail.component.css' ]
})
export class FishDetailComponent implements OnInit {
  fish: Fish | undefined;

  constructor(
    private route: ActivatedRoute,
    private fishService: FishService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFish();
  }

  getFish(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.fishService.getFish(id)
      .subscribe(fish => this.fish = fish);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.fish) {
      this.fishService.updateFish(this.fish)
        .subscribe(() => this.goBack());
    }
  }
}
