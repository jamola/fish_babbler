import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Fish } from './fish';
import { FISHES } from './mock-fishes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class FishService {

  constructor(private messageService: MessageService) { }

  getFishes(): Observable<Fish[]> {
    const fishes = of(FISHES);
    this.messageService.add('FishService: fetched fishes');
    return fishes;
  }


  getFish(id: number): Observable<Fish> {
    // For now, assume that a fish with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const fish = FISHES.find(f => f.id === id)!;
    this.messageService.add(`FishService: fetched fish id=${id}`);
    return of(fish);
  }
}
