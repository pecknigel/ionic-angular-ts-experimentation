import { Injectable } from '@angular/core';

enum TransportModeTypes {
  VAN = 1,
  TRACTOR = 2,
  TRAILER = 3,
  SHIP = 4,
}

export interface TransportMode {
  id: TransportModeTypes;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransportDataService {

  constructor() { }

  getTransportModes(): TransportMode[] {
    return [
      {
        id: TransportModeTypes.VAN,
        name: 'Van',
      },
      {
        id: TransportModeTypes.TRACTOR,
        name: 'Tractor',
      },
      {
        id: TransportModeTypes.TRAILER,
        name: 'Trailer',
      },
      {
        id: TransportModeTypes.SHIP,
        name: 'Ship',
      },
    ];
  }
}
