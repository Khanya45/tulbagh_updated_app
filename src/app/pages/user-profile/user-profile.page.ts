import { Component, OnInit } from '@angular/core';
import { UserQuery, UserService } from 'src/app/stores/user';
import { LikedService, LikedQuery } from 'src/app/stores/liked';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userProfile: any;
  username: any;
  image: any;
  liked: any;
  fullname:any;

  constructor(
    public userQuery: UserQuery,
    public likedService: LikedService,
    private likedQuery: LikedQuery,
    private userService: UserService,
    private navCtrl: NavController
    ) {}

    async ngOnInit() {
      this.image = this.userQuery.getValue().data.userImageUrl;
      this.userProfile = this.userQuery.getValue().data;
      this.username = this.userQuery.getValue().username;
      this.fullname = this.userQuery.getValue().data.userName;
      
    }

    ionViewWillEnter() {
      this.likedService.getList();
      this.liked = this.likedQuery.getValue().ids.length;
    }

    // likedPofile(){
    //   const like = this.likedService.getList.length
    //   this.liked = like.le
    // }
  
    goTo(profile) {
      this.navCtrl.navigateForward('business-info', {
        state: { profile },
      });
    }

  logout() {
    this.userService.logout();
  }
}
