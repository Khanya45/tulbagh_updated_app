import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AttractionStore } from './attraction.store';

@Injectable({ providedIn: 'root' })
export class AttractionService {
  constructor(
    private attractionStore: AttractionStore,
    private http: HttpService
  ) {}

  async getTop() {
    return await this.http
      .request('GET', 'profileList', {
        profile: 'tulbagh-tourism-tulbagh',
        list: 'Top Attractions',
        // radius: '20000',
        sort: 'alpha',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.attractionStore.upsertMany(result[0].objectList);
          this.attractionStore.remove(
            (entity) =>
              !result[0].objectList.some(
                (newEntity) => newEntity.id === entity.id
              )
          );
        }
      });
  }
}
