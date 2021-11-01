import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileService } from 'src/app/stores/profile';

@Component({
  selector: 'app-business-search',
  templateUrl: './business-search.page.html',
  styleUrls: ['./business-search.page.scss'],
})
export class BusinessSearchPage implements OnInit {
  profiles: any[];
  searchProfiles: any[];
  constructor(
    private modalCtrl: ModalController,
    private profileService: ProfileService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getSearchList();
  }

  dismiss(profile = null) {
    this.modalCtrl.dismiss(profile);
  }

  async getSearchList() {
    this.profiles = await this.profileService
      .getList('Search')
      .then((result) => result[0]?.objectList);
  }

  searchProfile(event) {
    const found = this.profiles.filter((profile) =>
      profile?.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.searchProfiles = found;
  }
}
