import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PromotionStore, PromotionState } from './promotion.store';

@Injectable({ providedIn: 'root' })
export class PromotionQuery extends QueryEntity<PromotionState> {

  constructor(protected store: PromotionStore) {
    super(store);
  }

}
