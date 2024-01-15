import { Component } from '@angular/core';
import { Fish } from '../fish';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.css']
})
export class FishesComponent {
  fish: Fish = {
    id: 1,
    name: 'Eel'
  };

}
