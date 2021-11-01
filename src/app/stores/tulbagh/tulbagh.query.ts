import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TulbaghStore, TulbaghState } from './tulbagh.store';

@Injectable({ providedIn: 'root' })
export class TulbaghQuery extends Query<TulbaghState> {
  about = this.select('about');

  constructor(protected store: TulbaghStore) {
    super(store);
  }

}
