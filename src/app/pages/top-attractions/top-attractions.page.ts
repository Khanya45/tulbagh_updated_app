import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AttractionQuery } from 'src/app/stores/attraction';

@Component({
  selector: 'app-top-attractions',
  templateUrl: './top-attractions.page.html',
  styleUrls: ['./top-attractions.page.scss'],
})
export class TopAttractionsPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    public attractions: AttractionQuery
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
