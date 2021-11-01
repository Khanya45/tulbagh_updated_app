import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Attraction } from './attraction.model';

export interface AttractionState extends EntityState<Attraction> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'attraction'
})
export class AttractionStore extends EntityStore<AttractionState> {

  constructor() {
    super();
  }

}
