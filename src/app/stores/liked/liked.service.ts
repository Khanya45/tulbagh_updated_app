import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LikedStore } from './liked.store';

@Injectable({ providedIn: 'root' })
export class LikedService {
  constructor(private likedStore: LikedStore, private http: HttpService) {}

  async getList() {
    return await this.http
      .request('GET', 'profileList', {
        uniqueId: 'tulbagh-tourism-tulbagh',
        view: 'mine',
        category: 'businesses',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.likedStore.upsertMany(result[0].objectList);
          this.likedStore.remove(
            (entity) =>
              !result[0].objectList.some(
                (newEntity) => newEntity.id === entity.id
              )
          );
        }
      });
  }
}
