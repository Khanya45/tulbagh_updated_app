import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface TulbaghState {
  about: string;
}

export const createInitialState = (): TulbaghState => ({
  about: '',
});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tulbagh' })
export class TulbaghStore extends Store<TulbaghState> {
  constructor() {
    super(createInitialState());
  }
}
