import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';
import { NavController } from '@ionic/angular';
import { IonicSwiper } from '@ionic/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { EventQuery, EventService } from 'src/app/stores/event';
import { TulbaghService } from 'src/app/stores/tulbagh';
import { PhotoQuery, PhotoService } from 'src/app/stores/photo';
import Swal from 'sweetalert2';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  blogs: any;
  events: any;
  photos: any;

  constructor(
    private tulbaghService: TulbaghService,
    public blogQuery: BlogQuery,
    private blogService: BlogService,
    private eventService: EventService,
    private eventQuery: EventQuery,
    private photoService: PhotoService,
    private photoQuery: PhotoQuery,
    private navCtrl: NavController
  ) {
    this.blogQuery
      .selectAll({ filterBy: (entity) => entity?.uniqueId === 'tulbagh-tourism-tulbagh' })
      .subscribe((blogs) => (this.blogs = blogs));

    this.eventQuery
      .selectAll({ filterBy: (entity) => entity?.uniqueId === 'tulbagh-tourism-tulbagh' })
      .subscribe((events) => (this.events = events));

    this.photoQuery
      .selectAll({ filterBy: (entity) => entity?.uniqueId === 'tulbagh-tourism-tulbagh' })
      .subscribe((photos) => {
        this.photos = photos;
      });
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    await this.tulbaghService.getAbout();
    await this.blogService.getList();
    await this.eventService.getList();
    await this.photoService.getPhotoList();
  }

  async showAbout() {
    await this.tulbaghService.showAbout();
  }

  async getInfo() {
    const { html } = await this.tulbaghService.getInfo();
    if (html) {
      Swal.fire({
        title: 'Information',
        html,
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

  goTo(uniqueId) {
    this.navCtrl.navigateForward('profile-info', {
      state: { uniqueId },
    });
  }

  async share() {
    await Share.share({
      title: 'See cool stuff from Tulbagh',
      text: 'Really awesome thing you need to see right meow',
      url: 'https://nomadicways.travel/',
      dialogTitle: 'Share with buddies',
    });
  }
}
