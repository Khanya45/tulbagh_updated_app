import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface WeatherState {
  today: any;
  forecast: any;
}

export const createInitialState = (): WeatherState => ({
  today: null,
  forecast: null,
});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'weather', resettable: false })
export class WeatherStore extends Store<WeatherState> {
  constructor() {
    super(createInitialState());
  }
}
