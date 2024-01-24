import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Fish } from '../fish';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-fish-search',
  templateUrl: './fish-search.component.html',
  styleUrls: [ './fish-search.component.css' ]
})
export class FishSearchComponent implements OnInit {
  fishes$!: Observable<Fish[]>;
  private searchTerms = new Subject<string>();

  constructor(private fishservice: FishService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.fishes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.fishservice.searchFishes(term)),
    );
  }
}