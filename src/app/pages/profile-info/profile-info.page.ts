import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { UntilDestroy } from '@ngneat/until-destroy';
import { icon, LatLng, latLng, Layer, marker, tileLayer } from 'leaflet';
import { ProfileQuery, ProfileService } from 'src/app/stores/profile';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {
  profile: any;
  uniqueId: any;
  wiki: any;

  options: L.MapOptions = {
    layers: [
      tileLayer(
        // eslint-disable-next-line max-len
        'https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=r5DE8X2qpUTOW5p9BdP2DbeQRXMjzGlxs870VpzJCl5wMsy5tMt7bPKdBx7yIc8S',
        {
          maxZoom: 18,
        }
      ),
    ],
    minZoom: 5,
    zoom: 12,
    maxZoom: 15,
    center: latLng(-33.288809, 19.13855),
    scrollWheelZoom: false,
    tap: false,
    zoomControl: false,
    attributionControl: false,
  };

  center: LatLng;
  ready: boolean;

  paradise = marker([46.78465227596462, -121.74141269177198], {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    }),
  });
  layer: Layer;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private profileQuery: ProfileQuery,
    public sanitizer: DomSanitizer,
    private launchNavigator: LaunchNavigator
  ) {}

  async ngOnInit() {
    const { state } = this.router.getCurrentNavigation().extras;
    this.uniqueId = state.uniqueId;
    await this.profileService.getInfo(this.uniqueId);
    this.profileQuery
      .selectEntity((e) => e.uniqueId === this.uniqueId)
      .subscribe((profile: any) => {
        this.profile = profile;
        if (profile?.latitude) {
          this.center = new LatLng(
            Number(profile?.latitude),
            Number(profile?.longitude)
          );
        }
      });
    this.wiki = await this.profileService.getWiki(this.uniqueId);
  }

  ionViewDidEnter() {
    this.ready = true;
    if (this.profile?.latitude) {
      this.center = new LatLng(
        Number(this.profile?.latitude),
        Number(this.profile?.longitude)
      );

      this.layer = marker(this.center, {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon-2x.png',
          shadowUrl: 'assets/marker-shadow.png',
        }),
      });
    }
  }

  onMapReady(map: L.Map) {}

  async takeMeThere() {
    if (Capacitor.isNativePlatform()) {
      await this.launchNavigator.navigate([
        Number(this.profile?.latitude),
        Number(this.profile?.longitude),
      ]);
    }
  }
}
