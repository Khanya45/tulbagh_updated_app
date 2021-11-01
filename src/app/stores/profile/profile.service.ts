import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { LikedService } from '../liked';
import { ProfileStore } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private profileStore: ProfileStore,
    private toastCtrl: ToastController,
    private likedService: LikedService,
    private http: HttpService
  ) {}

  async getList(list: string) {
    return await this.http.request('GET', 'profileList', {
      profile: 'tulbagh-tourism-tulbagh',
      list,
      // radius: '20000',
      sort: 'alpha',
      items: '200',
      format: 'json',
    });
  }

  async getInfo(uniqueId = 'tulbagh-tourism-tulbagh') {
    return await this.http
      .request('GET', 'show', {
        uniqueId,
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.profileStore.upsertMany(result[0].objectList);
          return result[0].objectList[0];
        }
      });
  }
  async getWiki(profile = 'tulbagh-tourism-tulbagh') {
    return await this.http
      .request('GET', 'wiki', {
        profile,
        format: 'json',
      })
      .then((result) => result[0]?.objectList[0]);
  }

  async membership({ canLeave, uniqueId }) {
    const action = canLeave === 'true' ? 'leave' : 'join';
    this.profileStore.setLoading(true);
    await this.http
      .request('POST', 'profileMembership', {
        action,
        uniqueId,
        format: 'json',
      })
      .then((result) => {
        if (result[0].status?.code === 0) {
          this.getInfo(uniqueId);
          this.presentToast(action === 'join');
          this.likedService.getList();
        }
      });
  }

  async presentToast(followed: boolean) {
    const toast = await this.toastCtrl.create({
      message: followed
        ? 'Profile successfully followed'
        : 'Profile successfully unfollowed',
      color: followed ? 'success' : 'dark',
      icon: followed ? 'heart' : 'heart-dislike',
      duration: 2000,
    });
    toast.present();
  }
}
