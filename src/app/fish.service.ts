import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Fish } from './fish';
import { FISHES } from './mock-fishes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private messageService: MessageService) { }

  getFishes(): Observable<Fish[]> {
    const fishes = of(FISHES);
    this.messageService.add('FishService: fetched fishes');
    return fishes;
  }  
}
