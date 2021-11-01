import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSwiper } from '@ionic/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BlogQuery, BlogService } from 'src/app/stores/blog';
import { EventQuery, EventService } from 'src/app/stores/event';
import { PhotoQuery, PhotoService } from 'src/app/stores/photo';
import { ProfileQuery, ProfileService } from 'src/app/stores/profile';
import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.page.html',
  styleUrls: ['./business-info.page.scss'],
})
export class BusinessInfoPage implements OnInit {
  profile: any;
  blogs: any;
  events: any;
  photos: any;

  constructor(
    private router: Router,
    private blogService: BlogService,
    private eventService: EventService,
    private blogQuery: BlogQuery,
    private eventQuery: EventQuery,
    private photoService: PhotoService,
    private photoQuery: PhotoQuery,
    private profileService: ProfileService,
    private profileQuery: ProfileQuery
  ) {}

  async ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.profile = state.profile;

    await this.profileService.getInfo(state.profile.uniqueId);

    this.profileQuery
      .selectAll({
        filterBy: (entity) => entity?.uniqueId === this.profile.uniqueId,
      })
      .subscribe((profile) => (this.profile = profile[0]));

    this.blogQuery
      .selectAll({
        filterBy: (entity) => entity?.uniqueId === this.profile.uniqueId,
      })
      .subscribe((blogs) => (this.blogs = blogs));

    this.eventQuery
      .selectAll({
        filterBy: (entity) => entity?.uniqueId === this.profile.uniqueId,
      })
      .subscribe((events) => (this.events = events));

    this.photoQuery
      .selectAll({
        filterBy: (entity) => entity?.uniqueId === this.profile.uniqueId,
      })
      .subscribe((photos) => (this.photos = photos));
  }

  async ionViewWillEnter() {
    await this.blogService.getList(this.profile.uniqueId);
    await this.eventService.getList(this.profile.uniqueId);
    await this.photoService.getPhotoList(this.profile.uniqueId);
  }
}
