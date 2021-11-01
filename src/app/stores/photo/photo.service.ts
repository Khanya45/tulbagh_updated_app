import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PhotoStore } from './photo.store';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private photoStore: PhotoStore, private http: HttpService) {}

  async getPhotoList(profile = 'tulbagh-tourism-tulbagh') {
    await this.http
      .request('GET', 'photoList', { profile, format: 'json' })
      .then((result) => {
        this.photoStore.upsertMany(result[0].objectList);
      });
  }
}
