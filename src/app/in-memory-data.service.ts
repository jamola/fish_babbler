import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fish } from './fish';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const fishes = [
      {
          id: 1,
          _id: '65906f963fb507b42e430328',
          specie: 'Angler',
          english: 'Angler',
          latin: 'Lophius piscatorius',
          danish: 'Havtaske',
          german: 'Seeteufel',
          french: 'Baudroie commune',
          norwegian: 'Breiflabb'
      },
      {
          id: 2,
          _id: '659073183fb507b42e430329',
          specie: 'European Eel',
          english: 'European Eel',
          latin: 'Anguilla anguilla',
          danish: 'Europæisk ål',
          german: 'Europäischer Aal',
          french: 'Anguille européenne',
          norwegian: 'Europeisk ål'
      },
      {
          id: 3,
          _id: '659075ab6096985384d6b7b7',
          specie: 'Wels catfish',
          english: 'Wels catfish',
          latin: 'Silurus glanis',
          danish: 'Malle',
          german: 'Wels',
          french: 'Silure glaneur',
          norwegian: 'Malle'
      },
      {
          id: 4,
          _id: '659075ab6096985384d6b7b8',
          specie: 'Atlantic mackerel',
          english: 'Atlantic mackerel',
          latin: 'Scomber scombrus',
          danish: 'Makrel',
          german: 'Makrele',
          french: 'Maquereau commun',
          norwegian: 'Makrel'
      },
      {
          id: 5,
          _id: '659076c46096985384d6b7b9',
          specie: 'Atlantic bluefin tuna',
          english: 'Atlantic bluefin tuna',
          latin: 'Thunnus thynnus',
          danish: 'Atlantisk blåfinnet tun',
          german: 'Atlantischer Blauflossen-Thun',
          french: "Thon rouge de l'Atlantique",
          norwegian: 'Atlantisk blåfinnet tunfisk'
          }
    ]
    return {fishes};
  }

  // Overrides the genId method to ensure that a fish always has an id.
  // If the fishes array is empty,
  // the method below returns the initial number (11).
  // if the fishes array is not empty, the method below returns the highest
  // fish id + 1.
  genId(fishes: Fish[]): number {
    return fishes.length > 0 ? Math.max(...fishes.map(fish => fish.id)) + 1 : 1;
  }
}