import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Promotion } from './promotion.model';

export interface PromotionState extends EntityState<Promotion> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'promotion', idKey: 'wikiId'
})
export class PromotionStore extends EntityStore<PromotionState> {

  constructor() {
    super();
  }

}
