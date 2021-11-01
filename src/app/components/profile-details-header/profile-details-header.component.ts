import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/stores/profile';
import { UserQuery } from 'src/app/stores/user';

@Component({
  selector: 'app-profile-details-header',
  templateUrl: './profile-details-header.component.html',
  styleUrls: ['./profile-details-header.component.scss'],
})
export class ProfileDetailsHeaderComponent implements OnInit {
  @Input() profile: any;

  constructor(
    private navCtrl: NavController,
    private profileService: ProfileService,
    public userQuery: UserQuery
  ) {}

  ngOnInit() {}

  goTo(uniqueId) {
    this.navCtrl.navigateForward('profile-info', {
      state: { uniqueId },
    });
  }

  async membership(profile) {
    await this.profileService.membership(profile);
  }
}
