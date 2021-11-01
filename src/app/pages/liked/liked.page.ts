import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LikedQuery, LikedService } from 'src/app/stores/liked';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {
  constructor(
    private likedService: LikedService,
    public likedQuery: LikedQuery,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.likedService.getList();
  }

  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
  }
}
