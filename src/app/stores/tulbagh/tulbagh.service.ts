import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';
import { TulbaghQuery } from './tulbagh.query';
import { TulbaghStore } from './tulbagh.store';

@Injectable({ providedIn: 'root' })
export class TulbaghService {
  constructor(
    private tulbaghStore: TulbaghStore,
    private http: HttpService,
    private tulbaghQuery: TulbaghQuery
  ) {}

  async getAbout() {
    return await this.http
      .request('GET', 'wiki', {
        profile: 'tulbagh-tourism-tulbagh',
        subject: 'About Tulbagh',
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.tulbaghStore.update({ about: result[0].objectList[0] });
        }
      });
  }

  async getInfo() {
    return await this.http
      .request('GET', 'show', {
        uniqueId: 'tulbagh-tourism-tulbagh',
        format: 'json',
      })
      .then((result) => result[0]?.objectList[0]);
  }

  async showAbout() {
    await this.getAbout();
    const { about }: any = this.tulbaghQuery.getValue();
    Swal.fire({
      title: 'About Tulbagh',
      html: about?.html,
      background: 'var(--ion-color-primary)',
      customClass: {
        htmlContainer: '!text-left !text-sm !text-white',
        title: '!text-white',
      },
      showClass: {
        backdrop: 'swal2-noanimation',
        popup: 'swal2-noanimation',
      },
      showConfirmButton: false,
      showCloseButton: true,
      backdrop: true,
      heightAuto: false,
      allowOutsideClick: false,
    });
  }
}
